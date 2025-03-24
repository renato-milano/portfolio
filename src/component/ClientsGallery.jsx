import { useState } from "react";
import React from "react";
import { ciro, tony } from "../assets/assets";

const videos = [ciro, tony, ciro, tony];

const ClientsGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="group relative  rounded-xl h-[50vh] grid grid-cols-1 flex items-center border-2 justify-center overflow-hidden transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      {/* Sfondo con sfumatura */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to top,transparent 20%,#000 100%)",
        }}
      />

      {/* Contenitore video */}
      <div
        aria-hidden="true"
        className="flex absolute top-24 left-[52%] -translate-x-1/2 -translate-y-1/2 lg:top-[45%]"
      >
        {videos.map((src, index) => {
          // Calcoliamo la traslazione dinamica
          console.log("hoveredIndex", hoveredIndex + 1);
          let translateX = index * 10; // Offset base
          let rotationReset = ""; // Resetta la rotazione
          if (hoveredIndex !== null) {
            if (index === hoveredIndex - 1 && index >= 0) {
              //translateX += 90; // Sposta il precedente a sinistra
            }
            if (index === hoveredIndex + 1 && index < videos.length) {
              //translateX -= 90; // Sposta il successivo a destra
            }
          }
          return (
            <div
              key={index}
              className={`group w-32 lg:w-40 overflow-hidden rounded-xl border-2 border-white/30 shadow-2xl shadow-black transition-all transform-gpu 
                  ${index % 2 === 0 ? "rotate-12 " : "-rotate-12 "} 
                  hover:rotate-0 hover:scale-120`}
              style={{
                transform: `translateX(-${translateX}px) ${rotationReset}`,
              }}
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
        <div className="absolute p-4 group-hover:-translate-y-5 transition flex-col items-start  duration-300 group-hover:shadow-4xl inset-0 h-[50%] top-45 right-30  flex items-center justify-center text-white text-xl font-bold">
          <h2 className="font-quick text-2xl text-gray-200/75 text-weight-500 text-start group-hover:text-white group-hover:font-bold transition duration-300">
            Contribution
          </h2>
          <p className="font-quick text-base text-gray-200/50 text-start ">
            Continuous support, clear communication, and constant collaboration
            to turn{" "}
            <span className="group-hover:text-white transition duration-300">
              every idea into success.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientsGallery;
