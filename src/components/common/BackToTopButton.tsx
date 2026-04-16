"use client";

import { useEffect, useState, useRef } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      setIsVisible(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={onBackToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-4 z-[90] inline-flex h-11 w-11 items-center justify-center border border-black bg-white text-black shadow-sm transition-all duration-200 hover:bg-black hover:text-white md:bottom-8 md:right-8 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 19V5m0 0l-6 6m6-6l6 6"
        />
      </svg>
    </button>
  );
}
