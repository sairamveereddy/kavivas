import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      {/* Dark theme logo (White text from user upload) */}
      <Image
        src="/kavivas-logo-white.png"
        alt="Kavivas Tech"
        width={584}
        height={342}
        className="hidden dark:block h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
        priority
      />
      {/* Light theme logo (Dark slate text) */}
      <Image
        src="/kavivas-logo-dark.png"
        alt="Kavivas Tech"
        width={584}
        height={342}
        className="block dark:hidden h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
        priority
      />
    </div>
  );
}
