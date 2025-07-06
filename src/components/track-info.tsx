"use client"

import { motion } from "framer-motion"
import type { Track } from "@/types/music"

interface TrackInfoProps {
  track: Track | null
  className?: string
  isPlaying?: boolean
}

export function TrackInfo({ track, className = "", isPlaying = false }: TrackInfoProps) {
  if (!track) {
    return (
      <div className={`${className}`}>
        <div className="h-6 bg-gray-700 rounded animate-pulse mb-2" />
        <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3" />
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-semibold text-white truncate">{track.title}</h2>
      {isPlaying ? (
        <div className="overflow-x-hidden w-full">
          <div
            className="whitespace-nowrap text-sm text-gray-400 animate-marquee"
            style={{ display: 'inline-block', minWidth: '100%' }}
          >
            {track.artist}
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-400 truncate">{track.artist}</p>
      )}
    </motion.div>
  )
}

if (typeof window !== 'undefined') {
  const styleId = 'marquee-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        display: inline-block;
        animation: marquee 8s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }
}
