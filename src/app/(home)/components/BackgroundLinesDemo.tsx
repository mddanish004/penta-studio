import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl sm:text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight" style={{ zIndex: 2 }}>
        Penta Studio <br /> 
        <p className="text-lg sm:text-xl md:text-2xl pt-4 font-semibold">
          We build digital products that make an impact
        </p>
      </h2>
      <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-4" style={{ zIndex: 2 }}>
        Penta Studio is a team of passionate developers and designers, crafting exceptional digital experiences for forward-thinking businesses.
      </p>
    </BackgroundLines>
  );
}
