// data/mockData.ts

export interface Student {
  id: string;
  name: string;
  major: string;
  country: string;
  avatar: string;
  level: number;
  xp: number;
  momentumScore: number;
  streak: number;
  skills: { coding: number; math: number; theory: number; design: number };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface CourseQuiz {
  id: string;
  courseCode: string;
  courseName: string;
  questions: QuizQuestion[];
}

export interface Post {
  id: string;
  author: string;
  avatar: string;
  country: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

// 1. Current Session User (Target User)
export const currentUser: Student = {
  id: "hitsz-2026-001",
  name: "Shahina Omonova",
  major: "Computer Science and Technology",
  country: "Uzbekistan",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shahina",
  level: 4,
  xp: 3450,
  momentumScore: 92,
  streak: 12,
  skills: { coding: 88, math: 75, theory: 82, design: 90 }
};

// 2. Sample Course Quizzes (HITSZ Curriculum)
export const mockQuizzes: CourseQuiz[] = [
  {
    id: "q1",
    courseCode: "CS301",
    courseName: "Advanced Data Structures & Algorithms",
    questions: [
      {
        id: "q1_1",
        question: "Which data structure is inherently used to implement Breadth-First Search (BFS)?",
        options: ["Stack", "Queue", "Priority Queue", "Binary Tree"],
        correctAnswer: 1
      },
      {
        id: "q1_2",
        question: "What is the worst-case time complexity of a QuickSort implementation using a random pivot?",
        options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "q2",
    courseCode: "AI402",
    courseName: "Artificial Intelligence & Machine Learning",
    questions: [
      {
        id: "q2_1",
        question: "What loss function is standard for multi-class classification problems?",
        options: ["Mean Squared Error", "Categorical Cross-Entropy", "Binary Cross-Entropy", "Hinge Loss"],
        correctAnswer: 1
      }
    ]
  }
];

// 3. 100 Students Sample Array for Leaderboard calculations
export const mockLeaderboard: Student[] = [
  currentUser,
  { id: "2", name: "Alexandre Dubois", major: "Data Science", country: "France", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", level: 5, xp: 4200, momentumScore: 96, streak: 24, skills: { coding: 95, math: 90, theory: 85, design: 60 } },
  { id: "3", name: "Min-jun Kim", major: "Automation", country: "South Korea", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Min", level: 4, xp: 3900, momentumScore: 95, streak: 18, skills: { coding: 80, math: 95, theory: 88, design: 50 } },
  { id: "4", name: "Fatima Al-Sayed", major: "Electronic Info", country: "Egypt", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima", level: 4, xp: 3200, momentumScore: 89, streak: 7, skills: { coding: 75, math: 85, theory: 90, design: 70 } },
  ...Array.from({ length: 96 }, (_, i) => ({
    id: `student_${i + 5}`,
    name: `International Student ${i + 5}`,
    major: i % 2 === 0 ? "Computer Science" : "Mechanical Engineering",
    country: ["Russia", "Thailand", "Malaysia", "Pakistan", "Kazakhstan"][i % 5],
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=student_${i}`,
    level: Math.floor(Math.random() * 3) + 1,
    xp: Math.floor(Math.random() * 2500) + 500,
    momentumScore: Math.floor(Math.random() * 40) + 55,
    streak: Math.floor(Math.random() * 10),
    skills: { coding: 60, math: 60, theory: 60, design: 60 }
  }))
].sort((a, b) => b.momentumScore - a.momentumScore);

// 4. HITSZ Campus Moments
export const mockPosts: Post[] = [
  {
    id: "p1",
    author: "Alexandre Dubois",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    country: "France",
    content: "Late night coding session at the HITSZ Library 4th floor. Algorithms assignment is no joke! 💻⚡",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60",
    likes: 42,
    comments: 7,
    timestamp: "2 hours ago"
  },
  {
    id: "p2",
    author: "Shahina Omonova",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shahina",
    country: "Uzbekistan",
    content: "Just smashed today's AI Daily Quest! 🧠 Momentum score is up to 92. Who's challenging me on the leaderboards this week?",
    likes: 56,
    comments: 12,
    timestamp: "4 hours ago"
  }
];

// 5. Achievements Engine
export const mockAchievements = [
  { id: "a1", title: "Code Warrior", desc: "Complete 10 error-free coding daily quizzes", progress: 80, unlocked: false, icon: "Code" },
  { id: "a2", title: "Global Titan", desc: "Reach top 3 on the International Student Leaderboard", progress: 100, unlocked: true, icon: "Globe" },
  { id: "a3", title: "Streak Master", desc: "Maintain a 10-day consistent study streak", progress: 100, unlocked: true, icon: "Zap" }
];
