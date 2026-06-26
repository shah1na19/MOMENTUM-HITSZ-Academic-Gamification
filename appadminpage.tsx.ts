"use client";
import { BarChart3, Users, BookOpen, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminHub() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin & Faculty Hub</h1>
        <p className="text-sm text-slate-400">Real-time engagement telemetry across the HITSZ international student body.</p>
      </div>

      {/* Aggregate Analytical Matrices */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { name: "Total Registered Cohort", value: "100 Students", desc: "15 Nationalities represented", icon: Users, color: "text-cyan-400" },
          { name: "Weekly Quiz Submissions", value: "412 Submissions", desc: "+12% acceleration since last week", icon: BookOpen, color: "text-emerald-400" },
          { name: "Mean Core Momentum Score", value: "78.4%", desc: "Target optimal baseline: 75.0%", icon: BarChart3, color: "text-purple-400" }
        ].map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <Card key={idx} className="border-slate-800 bg-slate-900/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-xs font-semibold uppercase tracking-wider text-slate-400">{metric.name}</CardTitle>
                <Icon className={`w-4 h-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-100">{metric.value}</div>
                <p className="text-xs text-slate-500 mt-1">{metric.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Broadcast Terminal Control Panel */}
      <Card className="border-slate-800 bg-slate-900/40">
        <CardHeader>
          <CardTitle className="text-md font-semibold text-slate-200 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-cyan-400" /> Live Target Broadcast Terminal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Announcement Scope</label>
            <input type="text" placeholder="Global HITSZ International Students Group..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Message Payload</label>
            <textarea placeholder="Type urgent campus notifications, localized policy updates, or academic updates here..." className="w-full min-h-[100px] bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 resize-none" />
          </div>
          <button className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-colors">
            Dispatch Live System Event
          </button>
        </CardContent>
      </Card>
    </div>
  );
}