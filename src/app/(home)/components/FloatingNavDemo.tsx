"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection("home"),
    },
    {
      name: "Services",
      link: "#services",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection("services"),
    },
    {
      name: "Team",
      link: "#team",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => scrollToSection("team"),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
