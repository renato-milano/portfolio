import { useState } from "react";
import React from "react";
import { ciro,tony } from "../assets/assets";
const videos = [
  ciro,
    tony,
    ciro,
    tony,
];

const ClientsGallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Sfondo con sfumatura */}
        <div className="absolute inset-0" style={{ maskImage: "linear-gradient(to top,transparent 20%,#000 100%)" }} />
  
        {/* Contenitore video */}
        <div
          aria-hidden="true"
          className="flex absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[45%]"
        >
          {videos.map((src, index) => {
            // Calcoliamo la traslazione dinamica
            let translateX = index * 30; // Offset base
            if (hoveredIndex !== null) {
              if (index === hoveredIndex - 1){
                translateX += 80;
            }  // Sposta a sinistra
              if (index === hoveredIndex + 1){
                translateX -= 80;} // Sposta a destra
            }
  
            return (
              <div
                key={index}
                className={`group w-32 lg:w-40 overflow-hidden rounded-xl border-2 border-white/30 shadow-2xl shadow-black transition-all transform-gpu 
                  ${index % 2 === 0 ? "rotate-12" : "-rotate-12"} 
                  hover:rotate-0 hover:scale-110`}
                style={{ transform: `translateX(-${translateX}px)` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <video
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="scale-105"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </div>
      </div>
    );
  
};

export default ClientsGallery;
