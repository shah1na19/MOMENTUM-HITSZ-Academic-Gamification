"use client";
import { useState } from "react";
import { Sparkles, Send, Bot, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AIConfigCoach() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Salam Shahina! I am parsing your HITSZ course metrics right now. What concept can I unpack for you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Analyzing your focus map... Based on your CS301 pipeline records, I suggest revising balanced red-black trees before tomorrow's dynamic window closes." }
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto h-[78vh] flex flex-col border border-slate-800 bg-slate-900/10 rounded-2xl overflow-hidden">
      {/* Dynamic Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold text-sm">Momentum AI Engine v1.2</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
          <Sparkles className="w-3 h-3 text-amber-400" /> Context Aware
        </div>
      </div>

      {/* Messages Panel */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/40">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-3 max-w-[85%] items-start rounded-2xl p-4 text-sm ${m.role === "user" ? "bg-cyan-500/10 text-cyan-200 border border-cyan-500/20" : "bg-slate-900 text-slate-300 border border-slate-800"}`}>
              {m.role === "assistant" ? <Bot className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> : <User className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />}
              <p className="leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Tray */}
      <div className="p-4 border-t border-slate-800 bg-slate-950">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about data structures, quiz scores, or optimization..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button onClick={handleSend} className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-950 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}