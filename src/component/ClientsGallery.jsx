import { useState } from "react";
import React from "react";
import { ciro, tony } from "../assets/assets";
import { TbHeartHandshake } from "react-icons/tb";

const videos = [ciro, tony, ciro, tony];

const ClientsGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <div className="group relative bg-black rounded-xl h-[25vw] grid grid-cols-1 flex items-center border-2 justify-center overflow-hidden transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
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
        className="flex absolute top-24 left-[52%] -translate-x-1/2 -translate-y-30 top-[50%] lg:top-[45%] "
      >
        {videos.map((src, index) => {
          // Calcoliamo la traslazione dinamica
          let translateX = index * 10; // Offset base
          let rotationReset = ""; // Resetta la rotazione
          let trasform = `translateX(-${translateX}px)`;
          /*let trasform = "";
          if (isMobile && index === 0) {
            trasform = "translateX(90px) translateY(-100px)";
          }
          if (isMobile && index === 1) {
            trasform = "translateX(-25px) translateY(50px)";
          }
          if (isMobile && index === 2) {
            trasform = "translateX(-20px)translateY(60px)";
          }
          if (isMobile && index === 3) {
            trasform = "translateX(-130px) translateY(-113px)";
          }
          if (!isMobile) {
            trasform = `translateX(-${translateX}px)`;
          }*/
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
                transform: { trasform },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <video
                muted
                loop
                playsInline
                autoPlay={isMobile ? true : false}
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
        <div className="absolute p-4 group-hover:-translate-y-5 transition flex-col items-start duration-300 group-hover:shadow-4xl inset-0 h-[50%] lg:top-55 top-50 md:right-30 right-60 w-[80%] md:w-[90%] lg:w-[95%] pl-25 sm:pl-20 xl:pl-10 flex items-center justify-center text-white text-xl font-bold">
          <div className="flex font-quick text-2xl text-gray-200/75 text-weight-400 text-start text-white md:text-gray-300/25 group-hover:text-white group-hover:font-bold transition duration-300">
            Collaboration
            <TbHeartHandshake className="ml-4" />
          </div>
          <p className="font-quick text-[1.7vh] text-gray-200/50 text-start ">
            Continuous{" "}
            <span className="group-hover:text-white transition duration-300">
              support
            </span>
            , clear{" "}
            <span className="group-hover:text-white transition duration-300">
              communication
            </span>
            , and constant{" "}
            <span className="group-hover:text-white transition duration-300">
              collaboration
            </span>{" "}
            to turn every idea into{" "}
            <span className="group-hover:text-white transition duration-300">
              success.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientsGallery;
