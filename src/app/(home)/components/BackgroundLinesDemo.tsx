import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-[100vh]">
      <div className="flex flex-col items-center justify-center h-full w-full py-8 sm:py-12">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight" style={{ zIndex: 2 }}>
          Penta Studio
          <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 font-semibold">
            We build digital products that make an impact
          </p>
        </h2>
        <p className="max-w-[90%] sm:max-w-xl mx-auto text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-6 sm:mt-8" style={{ zIndex: 2 }}>
          Penta Studio is a team of passionate developers and designers, crafting exceptional digital experiences for forward-thinking businesses.
        </p>
      </div>
    </BackgroundLines>
  );
}
