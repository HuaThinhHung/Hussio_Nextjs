"use client";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone as faPhoneSolid,
  faPaperPlane,
  faTimes,
  faSpinner,
  faComments,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/config/site";

// Types
interface Product {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  handle: string;
  image?: string;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface FloatingChatButtonProps {
  products?: Product[];
}

// Default products
const defaultProducts: Product[] = [
  {
    id: "1",
    title: "Áo Polo HUSSIO Classic",
    price: 590000,
    compareAtPrice: 790000,
    handle: "ao-polo-classic",
  },
  {
    id: "2",
    title: "Áo Thun HUSSIO Essential",
    price: 390000,
    handle: "ao-thun-essential",
  },
  {
    id: "3",
    title: "Áo Sơ Mi HUSSIO Formal",
    price: 690000,
    handle: "ao-so-mi-formal",
  },
  {
    id: "4",
    title: "Quần Kaki HUSSIO Slim",
    price: 590000,
    handle: "quan-kaki-slim",
  },
  {
    id: "5",
    title: "Áo Khoác HUSSIO Windbreaker",
    price: 890000,
    handle: "ao-khoac-windbreaker",
  },
];

// Quick suggestions
const quickSuggestions = [
  "Giá áo polo",
  "Có những sản phẩm nào?",
  "Địa chỉ shop",
  "Liên hệ",
];

// Helper: Format price
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(price);
};

// Helper: Discount percent
const getDiscountPercent = (price: number, compareAtPrice?: number): number => {
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
};

export default function FloatingChatButton({ products = defaultProducts }: FloatingChatButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "contact">("chat");
  const containerRef = useRef<HTMLDivElement>(null);

  // ChatBot state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Xin chào! Tôi là HUSSIO Assistant. Tôi có thể giúp gì cho bạn? 🛍️",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input
  useEffect(() => {
    if (isExpanded && activeTab === "chat") {
      inputRef.current?.focus();
    }
  }, [isExpanded, activeTab]);

  // Close on click outside
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

  // Find product by name
  const findProduct = (query: string): Product | undefined => {
    const normalizedQuery = query.toLowerCase().trim();
    return products.find((p) =>
      p.title.toLowerCase().includes(normalizedQuery)
    );
  };

  // Get products by category
  const getProductsByCategory = (query: string): Product[] => {
    const normalizedQuery = query.toLowerCase();
    const categories: Record<string, string[]> = {
      "áo polo": ["polo"],
      "áo thun": ["thun", "tee"],
      "áo sơ mi": ["sơ mi", "so mi", "shirt"],
      "áo khoác": ["khoác", "jacket", "windbreaker"],
      "quần": ["quần", "kaki", "jean"],
    };

    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some((kw) => normalizedQuery.includes(kw))) {
        return products.filter((p) =>
          keywords.some((kw) => p.title.toLowerCase().includes(kw))
        );
      }
    }
    return [];
  };

  // Main message handler
  const handleMessage = (userMessage: string): string => {
    const msg = userMessage.toLowerCase().trim();

    // 1. Price inquiry
    if (msg.includes("giá") || msg.includes("price")) {
      const product = findProduct(msg);
      if (product) {
        const discount = getDiscountPercent(product.price, product.compareAtPrice);
        let response = `📦 **${product.title}**\n`;
        response += `💰 Giá: ${formatPrice(product.price)}`;
        if (discount > 0) {
          response += ` (giảm ${discount}%)`;
        }
        response += `\n🔗 Xem chi tiết: /products/${product.handle}`;
        return response;
      }

      const categoryProducts = getProductsByCategory(msg);
      if (categoryProducts.length > 0) {
        let response = `📋 Các sản phẩm:\n\n`;
        categoryProducts.slice(0, 3).forEach((p, i) => {
          response += `${i + 1}. ${p.title}: ${formatPrice(p.price)}\n`;
        });
        response += "\n👉 Bạn muốn xem chi tiết sản phẩm nào?";
        return response;
      }

      return "🛍️ Bạn muốn biết giá sản phẩm nào? Tôi có thể tư vấn:\n- Áo Polo\n- Áo Thun\n- Áo Sơ Mi\n- Quần Kaki\n- Áo Khoác";
    }

    // 2. Product list
    if (
      msg.includes("sản phẩm") ||
      msg.includes("danh sách") ||
      msg.includes("có gì") ||
      msg.includes("có những")
    ) {
      let response = "📦 **DANH SÁCH SẢN PHẨM HUSSIO:**\n\n";
      const categories = ["Áo Polo", "Áo Thun", "Áo Sơ Mi", "Quần Kaki", "Áo Khoác"];
      categories.forEach((cat, i) => {
        response += `${i + 1}. ${cat}\n`;
      });
      response += "\n💡 Hãy hỏi 'Giá áo polo' để biết chi tiết!";
      return response;
    }

    // 3. Address
    if (
      msg.includes("địa chỉ") ||
      msg.includes("address") ||
      msg.includes("shop") ||
      msg.includes("cửa hàng")
    ) {
      return `📍 **Địa chỉ HUSSIO:**\n${siteConfig.address.full}\n\n🕒 Giờ mở cửa: 8:30 - 22:30\n🚗 Gửi xe miễn phí`;
    }

    // 4. Contact
    if (
      msg.includes("liên hệ") ||
      msg.includes("contact") ||
      msg.includes("sđt") ||
      msg.includes("số điện thoại") ||
      msg.includes("zalo")
    ) {
      let response = `📞 **LIÊN HỆ HUSSIO:**\n\n`;
      response += `☎️ Hotline: 087.774.7777\n`;
      response += `💬 Zalo: ${siteConfig.social.zalo}\n`;
      response += `📧 Email: hussio.official@gmail.com\n`;
      response += `⏰ Thời gian: 8:30 - 22:30 (tất cả các ngày)`;
      return response;
    }

    // 5. Greetings
    if (
      msg.includes("xin chào") ||
      msg.includes("hello") ||
      msg.includes("hi") ||
      msg.includes("chào")
    ) {
      return "👋 Chào bạn! Rất vui được hỗ trợ bạn. Bạn cần tìm hiểu về sản phẩm, giá cả hay địa chỉ mua hàng?";
    }

    // 6. Thank you
    if (
      msg.includes("cảm ơn") ||
      msg.includes("thank") ||
      msg.includes("ok") ||
      msg.includes("được rồi")
    ) {
      return "❤️ Không có gì! Nếu cần thêm thông tin, tôi luôn ở đây để hỗ trợ bạn. Chúc bạn một ngày tốt lành! 🛍️";
    }

    // Default
    return "🤔 Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể:\n• Hỏi về giá sản phẩm (VD: 'Giá áo polo')\n• Xem danh sách sản phẩm\n• Hỏi địa chỉ shop\n• Liên hệ hỗ trợ\n\nHoặc chọn một gợi ý bên dưới 👇";
  };

  // Send message
  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = handleMessage(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleSuggestion = (suggestion: string) => {
    sendMessage(suggestion);
    setActiveTab("chat");
  };

  const toggleChat = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) setActiveTab("chat");
  };

  return (
    <div ref={containerRef} className="relative flex flex-col items-end">
      {/* Main Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label={isExpanded ? "Đóng hỗ trợ" : "Mở hỗ trợ trực tuyến"}
      >
        {isExpanded ? (
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
        ) : (
          <FontAwesomeIcon icon={faComments} className="w-6 h-6" />
        )}
      </button>

      {/* Expanded Panel */}
      {isExpanded && (
        <div className="absolute bottom-full right-0 mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up" style={{ height: "520px" }}>
          {/* Tabs Header */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === "chat"
                  ? "bg-black text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon icon={faComments} className="mr-2" />
              Chat CSKH
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === "contact"
                  ? "bg-black text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon icon={faHeadset} className="mr-2" />
              Liên hệ
            </button>
          </div>

          {/* Chat Tab */}
          {activeTab === "chat" && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50" style={{ height: "380px" }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-black text-white rounded-br-md"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                      }`}
                    >
                      {msg.text.split("\n").map((line, i) => (
                        <p key={i} className={i > 0 ? "mt-2" : ""}>
                          {line}
                        </p>
                      ))}
                      <p className="text-[10px] opacity-50 mt-1 text-right">
                        {msg.timestamp.toLocaleTimeString("vi-VN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md">
                      <FontAwesomeIcon icon={faSpinner} spin className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions */}
              {messages.length === 1 && (
                <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-gray-100 bg-white">
                  {quickSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestion(suggestion)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[10px] font-semibold uppercase tracking-wider rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nhập tin nhắn..."
                    className="flex-1 px-4 py-2.5 bg-gray-100 border-0 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="p-6 space-y-6 overflow-y-auto" style={{ height: "520px" }}>
              {/* Social Media */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Theo dõi chúng tôi
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  <a
                    href="https://www.facebook.com/HUSSIO.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                  </a>
                  <a
                    href="https://m.me/HUSSIO.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#0084ff] hover:border-[#0084ff] hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faFacebookMessenger} className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/hussio.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:border-transparent transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@hussio.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-black hover:border-black hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faPhoneSolid} className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Hotline</p>
                      <p className="text-sm font-semibold">087.774.7777</p>
                      <p className="text-xs text-gray-500">8:30 - 22:30</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faPhoneSolid} className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Zalo</p>
                      <p className="text-sm font-semibold">{siteConfig.social.zalo.replace("https://zalo.me/", "")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faPhoneSolid} className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</p>
                      <p className="text-sm font-semibold">hussio.official@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Địa chỉ
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                    <FontAwesomeIcon icon={faPhoneSolid} className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed">{siteConfig.address.full}</p>
                    <p className="text-xs text-gray-500 mt-1">Mở cửa: 8:30 - 22:30</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
