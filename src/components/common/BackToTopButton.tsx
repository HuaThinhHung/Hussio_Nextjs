"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
      className={`inline-flex h-11 w-11 items-center justify-center border border-black bg-white text-black shadow-sm transition-all duration-200 hover:bg-black hover:text-white ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="h-5 w-5" />
    </button>
  );
}
