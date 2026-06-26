"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Award, Trophy, MessageSquare, BookOpen, Users, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  if (pathname === "/") return null; // Hide sidebar navigation elements on Landing Page

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Daily Quiz", href: "/quiz", icon: BookOpen },
    { name: "Leaderboard", href: "/leaderboards", icon: Trophy },
    { name: "Moments", href: "/moments", icon: Users },
    { name: "AI Coach", href: "/coach", icon: MessageSquare },
    { name: "Profile", href: "/profile", icon: Award },
    { name: "Admin Hub", href: "/admin", icon: ShieldAlert },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          MOMENTUM // HITSZ
        </Link>
        <nav className="flex items-center space-x-1 md:space-x-4 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  isActive 
                    ? "bg-slate-800 text-cyan-400 shadow-md border border-slate-700" 
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
