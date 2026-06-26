"use client";
import { currentUser } from "@/data/mockData";
import { Zap, Flame, Target, Sparkles, BookOpen, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Dynamic Profile Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
        <div className="flex items-center space-x-4">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-16 h-16 rounded-full border-2 border-cyan-500 bg-slate-800" />
          <div>
            <h2 className="text-2xl font-bold text-slate-100">{currentUser.name}</h2>
            <p className="text-sm text-slate-400">{currentUser.major} • {currentUser.country}</p>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          <div className="px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[100px]">
            <span className="text-xs text-slate-400 block">Level</span>
            <span className="text-xl font-bold text-cyan-400">{currentUser.level}</span>
          </div>
          <div className="px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[100px]">
            <span className="text-xs text-slate-400 block">Momentum</span>
            <span className="text-xl font-bold text-emerald-400">{currentUser.momentumScore}%</span>
          </div>
          <div className="px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[100px]">
            <span className="text-xs text-slate-400 block">Streak</span>
            <span className="text-xl font-bold text-orange-400 flex items-center gap-1">
              <Flame className="w-5 h-5 fill-orange-500 text-orange-500" /> {currentUser.streak} Days
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Quests */}
        <Card className="lg:col-span-2 border-slate-800 bg-slate-900/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Target className="w-5 h-5 text-cyan-400" /> Active Daily Quests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Morning Refresh Quiz", xp: "+50 XP", done: true },
              { name: "Interact on Campus Moments Feed", xp: "+30 XP", done: false },
              { name: "Review Advanced Algorithms Concept Notes", xp: "+100 XP", done: false }
            ].map((quest, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" checked={quest.done} readOnly className="w-4 h-4 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500 bg-slate-800" />
                  <span className={`text-sm ${quest.done ? 'line-through text-slate-500' : 'text-slate-300'}`}>{quest.name}</span>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-cyan-950/50 text-cyan-400 rounded-md border border-cyan-900">{quest.xp}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Recommendations Module */}
        <Card className="border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Sparkles className="w-5 h-5 text-amber-400" /> AI Coach Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;Shahina, your focus indicators show a minor drop in theoretical math pacing over the last 48 hours. Try running the 5-question Linear Algebra micro-deck today to boost your score back above 95.&rdquo;
            </p>
            <Progress value={currentUser.momentumScore} className="h-2 bg-slate-800" />
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>System Health Threshold</span>
              <span>Optimal</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class Schedule and Timelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-slate-800 bg-slate-900/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Clock className="w-5 h-5 text-purple-400" /> Today&apos;s Class Tracks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { code: "CS301", name: "Data Structures", room: "T3-302", time: "10:00 - 11:45" },
              { code: "AI402", name: "Machine Learning", room: "T4-501", time: "14:00 - 15:45" }
            ].map((cls, idx) => (
              <div key={idx} className="p-3 bg-slate-900/40 border border-slate-800 rounded-xl flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold px-2 py-0.5 bg-purple-950 text-purple-300 rounded border border-purple-900 mr-2">{cls.code}</span>
                  <span className="text-sm font-medium text-slate-200">{cls.name}</span>
                </div>
                <div className="text-right text-xs">
                  <p className="text-slate-300">{cls.time}</p>
                  <p className="text-slate-500">{cls.room}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}