"use client";
import { useState } from "react";
import { mockQuizzes } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Award } from "lucide-react";

export default function QuizPage() {
  const activeQuiz = mockQuizzes[0];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleNext = () => {
    if (selectedOpt === activeQuiz.questions[currentIdx].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentIdx + 1 < activeQuiz.questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOpt(null);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="max-w-md mx-auto py-12">
        <Card className="border-slate-800 bg-slate-900/40 text-center p-6">
          <CardContent className="space-y-6 pt-6">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-800">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="text-slate-400">You scored {score} out of {activeQuiz.questions.length}</p>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
              <p className="text-sm text-cyan-400 font-mono">+{score * 50} XP Gained</p>
            </div>
            <button onClick={() => { setCurrentIdx(0); setSelectedOpt(null); setScore(0); setQuizFinished(false); }} className="w-full py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors">
              Retry Matrix Track
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = activeQuiz.questions[currentIdx];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center text-sm text-slate-400">
        <div>
          <span className="text-slate-100 font-semibold">{activeQuiz.courseCode}</span>: {activeQuiz.courseName}
        </div>
        <span>Question {currentIdx + 1} of {activeQuiz.questions.length}</span>
      </div>

      <Card className="border-slate-800 bg-slate-900/40">
        <CardHeader>
          <CardTitle className="text-xl text-slate-100 leading-snug">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOpt(idx)}
              className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex justify-between items-center ${
                selectedOpt === idx 
                  ? "border-cyan-500 bg-cyan-950/20 text-cyan-200" 
                  : "border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700"
              }`}
            >
              <span>{option}</span>
              {selectedOpt === idx && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />}
            </button>
          ))}
        </CardContent>
      </Card>

      <button
        disabled={selectedOpt === null}
        onClick={handleNext}
        className="w-full py-3 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:hover:bg-slate-100 text-slate-950 font-semibold rounded-xl transition-all text-sm shadow-md"
      >
        Submit and Advance
      </button>
    </div>
  );
}