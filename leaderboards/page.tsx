"use client";
import { mockLeaderboard } from "@/data/mockData";
import { Trophy, Globe, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function LeaderboardPage() {
  const [filter, setFilter] = useState<"global" | "uzb">("global");

  const displayList = filter === "global" 
    ? mockLeaderboard.slice(0, 10)
    : mockLeaderboard.filter(s => s.country === "Uzbekistan" || s.id === "hitsz-2026-001");

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campus Rankings</h1>
          <p className="text-sm text-slate-400">Competitive global metrics updated live across HITSZ faculties.</p>
        </div>
        
        <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-1">
          <button 
            onClick={() => setFilter("global")}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${filter === "global" ? "bg-slate-800 text-cyan-400" : "text-slate-400"}`}
          >
            <Globe className="w-3.5 h-3.5" /> Global Top 10
          </button>
          <button 
            onClick={() => setFilter("uzb")}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${filter === "uzb" ? "bg-slate-800 text-cyan-400" : "text-slate-400"}`}
          >
            <GraduationCap className="w-3.5 h-3.5" /> Uzbekistan Regional
          </button>
        </div>
      </div>

      <div className="border border-slate-800 rounded-xl bg-slate-900/20 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 p-4 border-b border-slate-800 text-xs font-semibold tracking-wider uppercase text-slate-500">
          <div className="col-span-2 text-center">Rank</div>
          <div className="col-span-5">Student</div>
          <div className="col-span-3">Country</div>
          <div className="col-span-2 text-right">Momentum</div>
        </div>

        <div className="divide-y divide-slate-800">
          {displayList.map((student, idx) => {
            const isTargetUser = student.id === "hitsz-2026-001";
            return (
              <div 
                key={student.id} 
                className={`grid grid-cols-12 gap-2 p-4 items-center text-sm transition-colors ${isTargetUser ? "bg-cyan-950/20 border-y border-cyan-800/50" : "hover:bg-slate-900/40"}`}
              >
                <div className="col-span-2 flex justify-center font-bold">
                  {idx === 0 ? <Trophy className="w-5 h-5 text-amber-400" /> : idx === 1 ? <Trophy className="w-5 h-5 text-slate-300" /> : idx === 2 ? <Trophy className="w-5 h-5 text-amber-700" /> : idx + 1}
                </div>
                <div className="col-span-5 flex items-center space-x-3">
                  <img src={student.avatar} alt="" className="w-8 h-8 rounded-full bg-slate-800 hidden sm:block" />
                  <div>
                    <p className={`font-semibold ${isTargetUser ? "text-cyan-400" : "text-slate-200"}`}>{student.name}</p>
                    <p className="text-xs text-slate-500 truncate max-w-[150px] sm:max-w-none">{student.major}</p>
                  </div>
                </div>
                <div className="col-span-3 text-slate-400 font-medium">{student.country}</div>
                <div className="col-span-2 text-right font-mono font-bold text-emerald-400">{student.momentumScore}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
