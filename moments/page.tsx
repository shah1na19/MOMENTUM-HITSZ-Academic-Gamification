"use client";
import { mockPosts } from "@/data/mockData";
import { Heart, MessageSquare, Send, Image } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CampusMoments() {
  const [posts, setPosts] = useState(mockPosts);
  const [newText, setNewText] = useState("");

  const handlePost = () => {
    if (!newText.trim()) return;
    const newPost = {
      id: `custom_${Date.now()}`,
      author: "Shahina Omonova",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shahina",
      country: "Uzbekistan",
      content: newText,
      likes: 0,
      comments: 0,
      timestamp: "Just now"
    };
    setPosts([newPost, ...posts]);
    setNewText("");
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Create Post Card */}
      <Card className="border-slate-800 bg-slate-900/40 backdrop-blur-sm">
        <CardContent className="pt-6 space-y-4">
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Share insights or stack study vectors on campus..."
            className="w-full min-h-[80px] bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-all resize-none"
          />
          <div className="flex justify-between items-center pt-2">
            <button className="text-slate-500 hover:text-slate-300 transition-colors">
              <Image className="w-5 h-5" />
            </button>
            <button onClick={handlePost} className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs flex items-center gap-1.5 transition-colors">
              <Send className="w-3.5 h-3.5" /> Broadcast
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Posts Render Loop */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="border-slate-800 bg-slate-900/20">
            <CardHeader className="flex flex-row items-center space-x-3 p-4">
              <img src={post.avatar} alt="" className="w-10 h-10 rounded-full border border-slate-800 bg-slate-800" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">{post.author}</h4>
                <p className="text-xs text-slate-500">{post.country} • {post.timestamp}</p>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">{post.content}</p>
              {post.image && (
                <img src={post.image} alt="Upload asset" className="rounded-xl border border-slate-800 max-h-72 w-full object-cover" />
              )}
              <div className="flex gap-4 pt-2 text-slate-500 text-xs font-medium">
                <button className="flex items-center gap-1.5 hover:text-rose-400 transition-colors">
                  <Heart className="w-4 h-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <MessageSquare className="w-4 h-4" /> {post.comments}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
