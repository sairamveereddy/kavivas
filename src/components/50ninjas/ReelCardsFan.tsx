"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Heart, Sparkles, Volume2, VolumeX, Maximize2, X } from "lucide-react";
import { FIFTY_NINJAS_DATA } from "@/data/50ninjas-data";

export default function ReelCardsFan() {
  const [activeCard, setActiveCard] = useState<string | null>("card-3");
  const [isMuted, setIsMuted] = useState(true);
  const [modalVideo, setModalVideo] = useState<(typeof cards)[0] | null>(null);

  const cards = FIFTY_NINJAS_DATA.heroCards;

  const getCardTransform = (id: string, defaultTilt: string, index: number) => {
    const isCenter = id === "card-3";
    const isActive = activeCard === id;
    const offset = index - 2;

    if (isActive) {
      return {
        rotate: 0,
        y: -18,
        scale: 1.08,
        zIndex: 40,
      };
    }

    return {
      rotate: parseFloat(defaultTilt),
      y: Math.abs(offset) * 14,
      scale: isCenter ? 1.02 : 0.98,
      zIndex: 20 - Math.abs(offset),
    };
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 pt-8 pb-16 overflow-visible">
      {/* Fan Container */}
      <div className="flex items-center justify-center -space-x-10 sm:-space-x-12 md:-space-x-16 perspective-1000 py-6">
        {cards.map((card, index) => {
          const transform = getCardTransform(card.id, card.tilt, index);
          const isCenter = card.id === "card-3";
          const isActive = activeCard === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              animate={transform}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard("card-3")}
              onClick={() => setModalVideo(card)}
              className={`relative shrink-0 w-44 sm:w-52 md:w-60 h-72 sm:h-84 md:h-96 rounded-3xl overflow-hidden cursor-pointer select-none transition-shadow duration-300 group ${
                isActive || isCenter
                  ? "shadow-2xl shadow-black ring-2 ring-white/60"
                  : "shadow-xl ring-1 ring-white/10"
              }`}
            >
              {/* Native HTML5 Video Element */}
              <div className="absolute inset-0 bg-black">
                <video
                  src={card.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50 pointer-events-none" />
              </div>

              {/* Top Bar with Views & Likes */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[11px] font-medium z-10 pointer-events-none">
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-zinc-200 text-[10px] border border-white/10">
                  <Eye className="w-3 h-3 text-white" />
                  <span>{card.views}</span>
                </span>
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] border border-white/10">
                  <Heart className="w-3 h-3 fill-red-500 text-red-500" />
                  <span>{card.likes}</span>
                </span>
              </div>

              {/* Audio & Expand Controls on Hover */}
              <div className="absolute top-11 right-3 z-20 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  type="button"
                  onClick={toggleSound}
                  className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110 cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
                <div
                  className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-transform hover:scale-110"
                  title="Full View"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Center Play Indicator on hover */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-black translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="absolute bottom-3 inset-x-3 z-10 pointer-events-none">
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-mono mb-0.5">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-[10px] font-medium uppercase tracking-wider">{card.niche}</span>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight leading-tight">
                  {card.creator}
                </h4>
                <div className="flex items-center justify-between mt-1 text-[11px] text-zinc-300">
                  <span className="text-zinc-400 font-mono text-[10px]">{card.handle}</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-800/90 text-zinc-200 border border-zinc-700">
                    {card.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Caption beneath fan */}
      <div className="text-center mt-3">
        <p className="text-xs sm:text-sm text-zinc-400 font-medium">
          Real Short-Form Video Reels • Produced by <span className="text-white font-semibold">50Ninjas Studio</span>
        </p>
      </div>

      {/* Full Reel Video Player Modal */}
      <AnimatePresence>
        {modalVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalVideo(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalVideo(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Video Element */}
              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  src={modalVideo.videoUrl}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Creator details in modal footer */}
              <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">{modalVideo.creator}</h4>
                  <p className="text-xs text-zinc-400 font-mono">{modalVideo.handle} • {modalVideo.niche}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-200 border border-zinc-800">
                    <Eye className="w-3 h-3 text-white" />
                    <span>{modalVideo.views}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-zinc-900 text-white border border-zinc-800">
                    <Heart className="w-3 h-3 fill-red-500 text-red-500" />
                    <span>{modalVideo.likes}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}