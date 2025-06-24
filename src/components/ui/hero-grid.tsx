import { cn } from "@/lib/utils";
import React from "react";
import { ModeToggle } from "../theme-toggle";
import { TextGenerateEffect } from "./textgenerate";
import Link from "next/link";
import MagicButton from "./magic-button";
import { FaLocationArrow } from "react-icons/fa";

export function HeroGrid() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Move ModeToggle inside and position it top-right */}
      <div className="absolute top-0 right-0 z-30">
        <ModeToggle />
      </div>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="relative justify-center flex flex-col">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className="relative z-0 bg-gradient-to-b from-neutral-200 to-neutral-700 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            thedwincmpy
          </h2>
          <TextGenerateEffect
            words="this is my personal site showcasing some of my skills"
            className="my-4 text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Edwin Olivares
          </p>
          <Link href={"#about"}>
            <MagicButton
              title="see my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
