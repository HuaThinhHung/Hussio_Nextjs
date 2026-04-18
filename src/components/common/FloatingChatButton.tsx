"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone as faPhoneSolid } from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/config/site";

const FloatingChatButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Đóng khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isExpanded]);

  const chatOptions = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/HUSSIO.vn",
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#1877F2]",
      icon: <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />,
    },
    {
      label: "Messenger",
      href: "https://m.me/HUSSIO.vn",
      color: "bg-[#0084ff]",
      hoverColor: "hover:bg-[#0084ff]",
      icon: <FontAwesomeIcon icon={faFacebookMessenger} className="w-5 h-5" />,
    },
    {
      label: "Zalo",
      href: siteConfig.social.zalo,
      color: "bg-[#0068ff]",
      hoverColor: "hover:bg-[#0068ff]",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 48 48">
          <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm-4.143 34.857l-3.6-1.92c-.42-.228-1.08-.228-1.5 0l-3.6 1.92V42h7.2v-7.143zM23.999 6.286c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S30.626 6.286 23.999 6.286z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/HUSSIO.vn",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
      hoverColor: "hover:from-purple-600 hover:via-pink-600 hover:to-orange-600",
      icon: <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@HUSSIO.vn",
      color: "bg-[#000000]",
      hoverColor: "hover:bg-[#000000]",
      icon: <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />,
    },
    {
      label: "Hotline",
      href: "tel:0877747777",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-600",
      icon: <FontAwesomeIcon icon={faPhoneSolid} className="w-5 h-5" />,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-end"
    >
      {/* Panel Options - Hiển thị khi click */}
      {isExpanded && (
        <div className="absolute bottom-full right-0 mb-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
          {/* Panel Header */}
          <div className="bg-black text-white px-4 py-3">
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Hỗ trợ trực tuyến
            </h3>
            <p className="text-xs text-gray-300 mt-0.5">
              Chọn kênh liên hệ
            </p>
          </div>

          {/* Panel Body - Grid 2x2 */}
          <div className="p-3 grid grid-cols-2 gap-2">
            {chatOptions.map((option) => (
              <Link
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`group flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${option.hoverColor} bg-gray-50 hover:bg-opacity-80`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${option.color} flex items-center justify-center text-white shadow-md transition-transform duration-200 group-hover:scale-110`}
                >
                  {option.icon}
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-black">
                  {option.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Chat Button - Nhỏ gọn */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className={`w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isExpanded ? "rotate-90 bg-gray-800" : ""
        }`}
        aria-label={isExpanded ? "Đóng hỗ trợ" : "Mở hỗ trợ trực tuyến"}
      >
        {isExpanded ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingChatButton;
