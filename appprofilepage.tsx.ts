"use client";
import { currentUser, mockAchievements } from "@/data/mockData";
import { Award, ShieldCheck, Zap, Code, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ProfilePage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Main Stats Frame */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border-slate-800 bg-slate-900/30 text-center p-6">
          <CardContent className="space-y-4 pt-4">
            <img src={currentUser.avatar} alt="" className="w-24 h-24 rounded-full mx-auto border-2 border-cyan-400 bg-slate-800" />
            <div>
              <h2 className="text-xl font-bold">{currentUser.name}</h2>
              <p className="text-xs text-slate-400">{currentUser.major}</p>
              <p className="text-xs text-cyan-400 font-mono mt-1">Origin: {currentUser.country}</p>
            </div>
            <div className="pt-2 flex justify-center gap-2">
              <span className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300">Class of 2028</span>
              <span className="px-2 py-1 bg-cyan-950/40 border border-cyan-900 rounded text-xs text-cyan-400">UID-001</span>
            </div>
          </CardContent>
        </Card>

        {/* Skill Matrix Vector Overview */}
        <Card className="md:col-span-2 border-slate-800 bg-slate-900/10">
          <CardHeader>
            <CardTitle className="text-md font-semibold text-slate-200 flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" /> Curricular Skill Vectors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(currentUser.skills).map(([skill, val]) => (
              <div key={skill} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium uppercase tracking-wider text-slate-400">
                  <span>{skill}</span>
                  <span className="font-mono text-cyan-400">{val}%</span>
                </div>
                <Progress value={val} className="h-1.5 bg-slate-900" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Gamified Badges Container */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2 text-slate-200">
          <Award className="w-5 h-5 text-amber-400" /> Earned Badges & Milestones
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {mockAchievements.map((ach) => (
            <Card key={ach.id} className={`border-slate-800 bg-slate-900/30 ${ach.unlocked ? "border-amber-500/30 bg-amber-950/5" : ""}`}>
              <CardContent className="p-4 flex gap-4 items-start">
                <div className={`p-2 rounded-lg ${ach.unlocked ? "bg-amber-500/10 text-amber-400" : "bg-slate-800 text-slate-600"}`}>
                  {ach.icon === "Zap" ? <Zap className="w-5 h-5" /> : ach.icon === "Code" ? <Code className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                    {ach.title}
                    {ach.unlocked && <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />}
                  </h4>
                  <p className="text-xs text-slate-400 leading-normal">{ach.desc}</p>
                  <div className="pt-2">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                      <span>Progress</span>
                      <span>{ach.progress}%</span>
                    </div>
                    <Progress value={ach.progress} className="h-1 bg-slate-950" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}