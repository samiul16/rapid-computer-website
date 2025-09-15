"use client";

import Image from "next/image";
import React, { useState } from "react";

interface VideoPlayerProps {
  url: string; // YouTube video URL
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube Video ID
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const videoId = getYouTubeId(url);

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-base font-bold text-zinc-950">Video Description</h3>

      <div className="relative w-full mx-auto aspect-video rounded-lg overflow-hidden">
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <Image
              width={600}
              height={470}
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-black/60 border-2 border-white flex items-center justify-center cursor-pointer text-white text-2xl hover:scale-110 transition"
              >
                ▶
              </button>
            </div>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
