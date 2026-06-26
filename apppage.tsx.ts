"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Trophy, MessagesSquare, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 space-y-12 py-12">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 max-w-3xl"
      >
        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/50 border border-cyan-800 rounded-full">
          Designed for HITSZ International Students
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Gamify Your Academic Growth
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Track daily metrics, dominate local courses, and build consistent learning habits within the Harbin Institute of Technology global network.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link href="/dashboard" className="inline-flex items-center justify-center px-6 py-3 font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 group">
          Enter Hub Dashboard
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* High Fidelity Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl pt-12">
        {[
          { title: "Daily Strategy Quizzes", desc: "Short, impactful 5-question micro-tests across localized HITSZ core CS pipelines.", icon: GraduationCap },
          { title: "Momentum Vectors", desc: "Dynamic analytics checking your active daily speed, continuous study streaks, and consistency.", icon: Rocket },
          { title: "Cross-Border Rankings", desc: "Compete across country cohorts, faculties, or international segments.", icon: Trophy },
          { title: "AI Academic Coach", desc: "24/7 dedicated support parsing your specific progression blockers.", icon: MessagesSquare }
        ].map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl text-left backdrop-blur-sm"
            >
              <div className="p-3 bg-slate-800/80 rounded-lg w-fit text-cyan-400 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-100">{feat.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}