"use client";
import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
    onClick?: () => void;
  }[];
  className?: string;
}) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex max-w-fit fixed top-4 sm:top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 sm:pl-8 py-2 items-center justify-center space-x-2 sm:space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx: number) => (
        <button
          key={`nav-item-${idx}`}
          onClick={navItem.onClick}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-1 sm:px-2"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-xs sm:text-sm">{navItem.name}</span>
        </button>
      ))}
      <button 
        onClick={scrollToContact}
        className="border text-xs sm:text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full"
      >
        <span>Contact</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    </motion.div>
  );
};
