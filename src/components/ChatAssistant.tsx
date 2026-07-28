"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/company";

type Message = { id: number; text: string; sender: "user" | "ai" };

export default function ChatAssistant() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatPulse, setChatPulse] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Lead capture — the visitor must submit their details before chatting.
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadError, setLeadError] = useState("");

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChatPulse(true);
      setTimeout(() => setChatPulse(false), 5000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = { id: Date.now(), text: inputValue.trim(), sender: "user" };
    const history = [...messages, userMessage];
    setMessages(history);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead: { fullName: leadName.trim(), email: leadEmail.trim(), phone: leadPhone.trim() },
          messages: history.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });
      const data = await res.json();
      const reply = data.reply || data.error || "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, sender: "ai" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Connection error. Please check your network and try again.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    const name = leadName.trim() || "there";
    setMessages([
      {
        id: Date.now(),
        text: `Hello ${name}, good day to you. How may I help you with our security services, the training academy, or careers today?`,
        sender: "ai",
      },
    ]);
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    const name = leadName.trim();
    const email = leadEmail.trim();
    const phone = leadPhone.trim();

    if (!name || !email || !phone) {
      setLeadError("Please fill in your full name, email, and phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLeadError("Please enter a valid email address.");
      return;
    }

    setLeadError("");
    setLeadSubmitted(true);
    setMessages([
      {
        id: Date.now(),
        text: `Hello ${name}, good day to you. Welcome to ${COMPANY.name}. How may I be of help today?`,
        sender: "ai",
      },
    ]);
  };

  const fieldClass =
    "border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 w-[92vw] sm:w-[400px] h-[500px] flex flex-col overflow-hidden mb-4"
          >
            <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold">
                  PGS
                </div>
                <div>
                  <h4 className="font-bold text-sm">PGS Assistant</h4>
                  <p className="text-[10px] text-white/70 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setChatOpen(false)}
                  aria-label="Close chat"
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {!leadSubmitted ? (
              <form onSubmit={handleSubmitLead} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                <p className="text-sm text-gray-600">
                  Please share your details to start chatting with our assistant.
                </p>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lead-name" className="text-xs font-semibold text-primary">Full name</label>
                  <input id="lead-name" type="text" value={leadName} onChange={(e) => setLeadName(e.target.value)} placeholder="Jane Doe" className={fieldClass} />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lead-email" className="text-xs font-semibold text-primary">Email</label>
                  <input id="lead-email" type="email" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} placeholder="jane@example.com" className={fieldClass} />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lead-phone" className="text-xs font-semibold text-primary">Phone number</label>
                  <input id="lead-phone" type="tel" value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} placeholder="301 459 4000" className={fieldClass} />
                </div>
                {leadError && <p className="text-xs text-red-500">{leadError}</p>}
                <button
                  type="submit"
                  className="mt-1 bg-accent text-white rounded-xl px-4 py-2.5 text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Submit &amp; start chat
                </button>
              </form>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"}`}
                    >
                      <div
                        className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                          msg.sender === "user"
                            ? "bg-accent text-white rounded-br-none"
                            : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="mr-auto items-start max-w-[85%] flex flex-col">
                      <div className="p-3 bg-gray-100 border border-gray-200 rounded-2xl rounded-bl-none flex items-center gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-3 border-t border-gray-200 bg-white flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Ask about training, services, contact…"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    aria-label="Message"
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-gray-700 bg-gray-50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    aria-label="Send message"
                    className="bg-accent text-white p-2 rounded-xl hover:bg-accent/90 disabled:opacity-50 transition-colors"
                  >
                    <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 border border-white/10 ${
          chatOpen ? "bg-primary text-white rotate-90" : "bg-accent hover:bg-accent/90 text-white"
        } ${chatPulse && !chatOpen ? "animate-bounce" : "hover:scale-110"}`}
        aria-label="Toggle chat assistant"
      >
        {chatOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
