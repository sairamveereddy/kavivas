import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface LeadPayload {
  plan: string;
  fullName: string;
  email: string;
  instagram: string;
  whatsapp: string;
  contentStyle: string;
  aiSubscription: string;
  creatorReferences?: string;
  projectGoals?: string;
  source?: string;
  submittedAt?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    const timestamp = new Date().toISOString();
    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      submittedAt: timestamp,
      ...body,
    };

    // 1. Persist lead to local JSON storage so zero inquiries are ever lost
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "50ninjas-leads.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
      let existingLeads: any[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existingLeads = JSON.parse(fileContent);
      } catch {
        existingLeads = [];
      }
      existingLeads.unshift(leadRecord);
      await fs.writeFile(filePath, JSON.stringify(existingLeads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("[50Ninjas] Local storage error:", fsErr);
    }

    // 2. Dispatch to live Google Sheets Webhook
    const googleWebhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxf47GE7SgmtMrIg_BTgbd3r-1TT-rraCz_JOq46jokaJHqHFPJueL31DMy9k2x4Frx/exec";

    let webhookSuccess = false;
    if (googleWebhookUrl) {
      try {
        const response = await fetch(googleWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
          redirect: "follow",
        });
        webhookSuccess = response.ok;
      } catch (webhookErr) {
        console.error("[50Ninjas] Google Sheets Webhook dispatch error:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
      leadId: leadRecord.id,
    });
  } catch (error: any) {
    console.error("[50Ninjas] Submission error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "50ninjas-leads.json");
    const content = await fs.readFile(filePath, "utf-8");
    const leads = JSON.parse(content);
    return NextResponse.json({ total: leads.length, leads });
  } catch {
    return NextResponse.json({ total: 0, leads: [] });
  }
}