"use client";

import React, { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  title: string;
  animationType?: "fadeInUp" | "slideInLeft" | "typewriter" | "glitch" | "wave";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  animationType = "fadeInUp",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (animationType === "typewriter" && isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        setDisplayedText(title.slice(0, index + 1));
        index++;
        if (index >= title.length) {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isVisible, title, animationType]);

  const getAnimationClasses = () => {
    if (!isVisible) return "opacity-0 translate-y-8";

    switch (animationType) {
      case "fadeInUp":
        return "animate-fadeInUp";
      case "slideInLeft":
        return "animate-slideInLeft";
      case "typewriter":
        return "animate-fadeIn";
      case "glitch":
        return "animate-glitch";
      case "wave":
        return "animate-wave";
      default:
        return "animate-fadeInUp";
    }
  };

  const renderTitle = () => {
    switch (animationType) {
      case "typewriter":
        return (
          <>
            {displayedText}
            <span className="animate-pulse">|</span>
          </>
        );

      case "wave":
        return title.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-wave"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "0.6s",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ));

      case "glitch":
        return (
          <span className="relative">
            {title}
            <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-glitch-1">
              {title}
            </span>
            <span className="absolute top-0 left-0 text-blue-500 opacity-70 animate-glitch-2">
              {title}
            </span>
          </span>
        );

      default:
        return title;
    }
  };

  return (
    <div
      ref={headerRef}
      className={`flex justify-between items-end ${className}`}
    >
      <h2
        className={`text-4xl font-bold text-black transition-all duration-700 ease-out ${getAnimationClasses()}`}
        style={{ animationDelay: "0.5s", fontFamily: "'Barlow', sans-serif" }}
      >
        {renderTitle()}
      </h2>
    </div>
  );
};

export default SectionHeader;
