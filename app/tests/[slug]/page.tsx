"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Bookmark,
  Flag,
  Info,
  ShieldAlert,
  X,
  Timer,
  BarChart2,
  Zap,
  Brain,
  Award
} from "lucide-react";
import { GlassCard } from "../../_components/ui/GlassCard";
import { ExamInstructionsModal } from "../../_components/ui/ExamInstructionsModal";
import { GradientButton } from "../../_components/ui/GradientButton";

// Types
type QuestionStatus = 'not_visited' | 'not_answered' | 'answered' | 'marked' | 'answered_marked';

interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctOption?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  category?: string;
}

// Enhanced Mock Questions with more details
const mockQuestions: Question[] = Array.from({ length: 30 }, (_, i) => ({
  id: `q${i + 1}`,
  text: `This is a sample question ${i + 1}. In a real scenario, this would contain the actual exam question text, possibly with mathematical formulas or images. What is the correct answer?`,
  options: [
    { id: 'A', text: `Option A for question ${i + 1}` },
    { id: 'B', text: `Option B for question ${i + 1}` },
    { id: 'C', text: `Option C for question ${i + 1}` },
    { id: 'D', text: `Option D for question ${i + 1}` },
  ],
  difficulty: ['easy', 'medium', 'hard'][i % 3] as 'easy' | 'medium' | 'hard',
  category: ['Mathematics', 'Science', 'English', 'General Knowledge'][i % 4]
}));

export default function ExamPage() {
  const router = useRouter();
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [warnings, setWarnings] = useState(0);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showStatistics, setShowStatistics] = useState(true);

  // Exam State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [statuses, setStatuses] = useState<Record<number, QuestionStatus>>({
    0: 'not_answered'
  });
  const [questionTimer, setQuestionTimer] = useState(0);
  const [questionTimes, setQuestionTimes] = useState<Record<number, number>>({});

  // Refs for animations
  const questionRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Start exam
  const startExam = () => {
    setIsStarted(true);
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((e) => console.log(e));
    }
  };

  // Timer & Security
  useEffect(() => {
    if (!isStarted || isSubmitted) return;

    // Timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });

      setQuestionTimer(prev => prev + 1);
    }, 1000);

    // Security: Tab Switch Detection
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setWarnings(w => {
          const newW = w + 1;
          if (newW >= 3) {
            handleSubmit();
          } else {
            setShowWarningModal(true);
          }
          return newW;
        });
      }
    };

    // Security: Prevent right click & copy
    const preventContext = (e: Event) => e.preventDefault();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("contextmenu", preventContext);
    document.addEventListener("copy", preventContext);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("contextmenu", preventContext);
      document.removeEventListener("copy", preventContext);
    };
  }, [isStarted, isSubmitted]);

  // Track time spent on each question
  useEffect(() => {
    if (isStarted && !isSubmitted) {
      setQuestionTimes(prev => ({
        ...prev,
        [currentIndex]: (prev[currentIndex] || 0) + 1
      }));
    }
  }, [currentIndex, isStarted, isSubmitted]);

  // Format Time
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Status Logic
  const updateStatus = (index: number, hasAnswer: boolean, isMarked: boolean) => {
    setStatuses(prev => ({
      ...prev,
      [index]: hasAnswer && isMarked ? 'answered_marked' :
        hasAnswer ? 'answered' :
          isMarked ? 'marked' : 'not_answered'
    }));
  };

  // Actions with animation
  const handleOptionSelect = (optId: string) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: optId }));
    const isMarked = statuses[currentIndex] === 'marked' || statuses[currentIndex] === 'answered_marked';
    updateStatus(currentIndex, true, isMarked);
  };

  const handleClearResponse = () => {
    const newAnswers = { ...answers };
    delete newAnswers[currentIndex];
    setAnswers(newAnswers);
    const isMarked = statuses[currentIndex] === 'marked' || statuses[currentIndex] === 'answered_marked';
    updateStatus(currentIndex, false, isMarked);
  };

  const handleMarkForReview = () => {
    const hasAnswer = !!answers[currentIndex];
    const isCurrentlyMarked = statuses[currentIndex] === 'marked' || statuses[currentIndex] === 'answered_marked';
    updateStatus(currentIndex, hasAnswer, !isCurrentlyMarked);
    goToNext();
  };

  const handleSaveAndNext = () => {
    const hasAnswer = !!answers[currentIndex];
    updateStatus(currentIndex, hasAnswer, false);
    goToNext();
  };

  const goToNext = () => {
    if (currentIndex < mockQuestions.length - 1) {
      setIsTransitioning(true);
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (!statuses[nextIdx]) {
        setStatuses(prev => ({ ...prev, [nextIdx]: 'not_answered' }));
      }
      setQuestionTimer(0);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex(currentIndex - 1);
      setQuestionTimer(0);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const jumpToQuestion = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    if (!statuses[index]) {
      setStatuses(prev => ({ ...prev, [index]: 'not_answered' }));
    }
    setQuestionTimer(0);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleSubmit = useCallback(() => {
    setIsSubmitted(true);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(e => console.log(e));
    }
  }, []);

  // Get status color and icon
  const getStatusInfo = (status?: QuestionStatus) => {
    switch (status) {
      case 'answered':
        return {
          color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
          icon: CheckCircle,
          label: 'Answered'
        };
      case 'not_answered':
        return {
          color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
          icon: X,
          label: 'Not Answered'
        };
      case 'marked':
        return {
          color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30',
          icon: Flag,
          label: 'Marked'
        };
      case 'answered_marked':
        return {
          color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30 relative overflow-hidden after:content-[""] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 after:border-l-[16px] after:border-l-transparent after:border-b-[16px] after:border-b-emerald-500',
          icon: Flag,
          label: 'Answered & Marked'
        };
      default:
        return {
          color: 'bg-[var(--surface-hover)] text-[var(--secondary-soft)] border-[var(--border)]',
          icon: Info,
          label: 'Not Visited'
        };
    }
  };

  // Get statistics
  const getStats = () => {
    let ans = 0, notAns = 0, marked = 0, ansMarked = 0, notVisited = 0;
    for (let i = 0; i < mockQuestions.length; i++) {
      const s = statuses[i];
      if (s === 'answered') ans++;
      else if (s === 'not_answered') notAns++;
      else if (s === 'marked') marked++;
      else if (s === 'answered_marked') ansMarked++;
      else notVisited++;
    }
    return { ans, notAns, marked, ansMarked, notVisited };
  };

  const stats = getStats();

  // Calculate progress
  const progress = ((stats.ans + stats.ansMarked) / mockQuestions.length) * 100;

  // Get difficulty color
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'easy': return 'text-emerald-500 bg-emerald-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'hard': return 'text-rose-500 bg-rose-500/10';
      default: return 'text-[var(--secondary-soft)] bg-[var(--surface-hover)]';
    }
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--bg)] to-[var(--surface)] flex items-center justify-center p-6">
        <ExamInstructionsModal
          isOpen={!isStarted}
          onClose={() => router.push('/app/pyqs')}
          onStart={startExam}
          totalQuestions={mockQuestions.length}
          durationMins={Math.floor(3600 / 60)}
        />
      </div>
    );
  }

  if (isSubmitted) {
    // Enhanced Analysis UI
    const score = stats.ans * 4 - stats.notAns * 1;
    const accuracy = stats.ans > 0 ? Math.round((stats.ans / (stats.ans + stats.notAns)) * 100) : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--bg)] to-[var(--surface)] p-6 flex flex-col items-center justify-center">
        <GlassCard className="max-w-4xl w-full stack items-center py-16 px-8 text-center border-[var(--border)] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 pointer-events-none" />

          {/* Success Animation */}
          <div className="relative mb-8">
            <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30 animate-pulse">
              <CheckCircle size={56} className="text-white" strokeWidth={2} />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <Award size={20} className="text-yellow-900" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            Exam Submitted Successfully!
          </h1>
          <p className="text-xl text-[var(--secondary-soft)] mb-10">
            Your responses have been securely recorded. Here's your performance summary:
          </p>

          {/* Score Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mb-10">
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl font-bold text-[var(--heading)] mb-1">{score}</div>
              <div className="text-sm font-bold text-emerald-500 uppercase tracking-wider">Score</div>
            </div>
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl font-bold text-[var(--heading)] mb-1">{accuracy}%</div>
              <div className="text-sm font-bold text-blue-500 uppercase tracking-wider">Accuracy</div>
            </div>
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl font-bold text-[var(--heading)] mb-1">{stats.ans + stats.ansMarked}</div>
              <div className="text-sm font-bold text-violet-500 uppercase tracking-wider">Answered</div>
            </div>
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl font-bold text-[var(--heading)] mb-1">{stats.notAns}</div>
              <div className="text-sm font-bold text-rose-500 uppercase tracking-wider">Not Answered</div>
            </div>
          </div>

          <GradientButton onClick={() => router.push('/pyq')} className="px-12 py-5 text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40">
            Return to Dashboard
          </GradientButton>
        </GlassCard>
      </div>
    );
  }

  const currentQ = mockQuestions[currentIndex];
  const statusInfo = getStatusInfo(statuses[currentIndex]);

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col select-none font-body">
      {/* HEADER - Enhanced */}
      <header className="h-[80px] bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)] flex items-center justify-between px-6 lg:px-8 shrink-0 z-20 shadow-lg sticky top-0">
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h1 className="font-bold text-[var(--heading)] text-xl leading-none mb-1">Mock Test: Full Syllabus</h1>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[var(--secondary-soft)] uppercase tracking-wider">Proctored Session</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-500">Live</span>
              </div>
            </div>
          </div>

          <div className="px-5 py-2.5 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] shadow-sm flex items-center gap-3">
            <span className="text-xs font-bold text-[var(--secondary-soft)] uppercase tracking-widest hidden md:inline">Question</span>
            <span className="font-bold text-[var(--primary)] text-base">{currentIndex + 1} <span className="text-[var(--secondary-soft)]">/ {mockQuestions.length}</span></span>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full font-bold border shadow-lg backdrop-blur-md transition-all duration-300 ${timeLeft < 300 ? 'bg-rose-500/10 text-rose-600 border-rose-500/30 animate-pulse shadow-rose-500/20' : 'bg-[var(--surface-hover)] text-[var(--heading)] border-[var(--border)]'}`}>
            <Clock size={20} className={timeLeft < 300 ? 'animate-bounce text-rose-500' : 'text-[var(--primary)]'} />
            <span className="font-mono text-lg tracking-wider">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </header>

      {/* WARNING MODAL - Enhanced */}
      {showWarningModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
          <GlassCard className="p-10 max-w-md w-full shadow-2xl border-rose-500/30 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-500" />

            <div className="relative mb-6">
              <div className="w-24 h-24 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_-10px_rgba(244,63,94,0.4)]">
                <AlertTriangle size={48} />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                {warnings}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[var(--heading)] mb-3">Security Warning</h3>
            <p className="text-[var(--secondary-soft)] mb-8 text-lg leading-relaxed">
              You navigated away from the exam window. This is warning <strong className="text-rose-500">{warnings} of 3</strong>.
              Further violations will result in automatic submission.
            </p>
            <button
              onClick={() => setShowWarningModal(false)}
              className="btn w-full bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white border-none py-4 text-lg shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 transition-all duration-300"
            >
              I Understand, Return to Exam
            </button>
          </GlassCard>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden max-w-[1600px] w-full mx-auto p-4 lg:p-6 gap-4 lg:gap-6">

        {/* LEFT: QUESTION AREA */}
        <div className="flex-1 flex flex-col bg-[var(--surface)]/60 backdrop-blur-sm relative shadow-xl rounded-3xl border border-[var(--border)] overflow-hidden">
          {/* Question Header with Metadata */}
          <div className="p-4 lg:p-6 border-b border-[var(--border)] bg-[var(--surface)]/80">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-[var(--heading)] font-heading">
                  Question {currentIndex + 1}
                </h2>
                <div className="flex gap-2">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getDifficultyColor(currentQ.difficulty)}`}>
                    {currentQ.difficulty?.toUpperCase()}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[var(--surface-hover)] text-[var(--secondary-soft)] text-xs font-bold border border-[var(--border)]">
                    {currentQ.category}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-sm font-bold shadow-sm flex items-center gap-1">
                  <CheckCircle size={14} /> +4
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-sm font-bold shadow-sm flex items-center gap-1">
                  <X size={14} /> -1
                </span>
              </div>
            </div>
          </div>

          {/* Question Content with Animation */}
          <div className={`flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-thin`}>
            <div className="max-w-4xl mx-auto">
              <div className="text-xl lg:text-2xl text-[var(--heading)] mb-8 leading-relaxed font-medium">
                {currentQ.text}
              </div>

              <div className="flex flex-col gap-4">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentIndex] === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleOptionSelect(opt.id)}
                      className={`group relative overflow-hidden p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform ${isSelected
                        ? 'border-[var(--primary)] bg-[var(--primary-light)] shadow-lg shadow-blue-500/20'
                        : 'border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--primary-light)] shadow-sm hover:shadow-md'
                        }`}
                    >
                      <div className="flex items-center gap-5 relative z-10">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isSelected
                          ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30'
                          : 'bg-[var(--surface-hover)] text-[var(--secondary-soft)] border-2 border-[var(--border)] font-bold group-hover:text-[var(--heading)] group-hover:border-blue-300 dark:group-hover:border-blue-700'
                          }`}>
                          {opt.id}
                        </div>
                        <span className={`text-[17px] md:text-[19px] font-medium leading-relaxed ${isSelected ? 'text-[var(--primary)] dark:text-blue-400 font-semibold' : 'text-[var(--heading)]'}`}>
                          {opt.text}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-transparent pointer-events-none" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ACTION BAR - Enhanced */}
          <div className="h-[88px] shrink-0 bg-[var(--surface)]/90 backdrop-blur-xl border-t border-[var(--border)] flex items-center justify-between px-6 lg:px-12">
            <div className="flex gap-4">
              <button
                onClick={handleMarkForReview}
                className="btn secondary hidden sm:flex border-[var(--border)] hover:border-violet-500 hover:text-violet-500 hover:shadow-lg transition-all duration-300"
              >
                <Bookmark size={18} /> Mark for Review
              </button>
              <button
                onClick={handleClearResponse}
                className="btn ghost text-[var(--secondary-soft)] hover:text-rose-500 hover:bg-rose-500/10 transition-all duration-300 hidden sm:flex"
              >
                <X size={18} /> Clear Response
              </button>

            </div>

            <div className="flex gap-4">
              <button
                onClick={goToPrev}
                disabled={currentIndex === 0}
                className="btn secondary disabled:opacity-40 disabled:hover:border-[var(--border)] disabled:hover:text-[var(--primary)] transition-all duration-300 hover:shadow-lg"
              >
                <ChevronLeft size={20} /> <span className="hidden sm:inline">Previous</span>
              </button>
              <GradientButton
                onClick={handleSaveAndNext}
                className="min-w-[140px] px-8 py-3 text-[16px] shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              >
                Save & Next <ChevronRight size={20} />
              </GradientButton>
            </div>
          </div>
        </div>

        {/* RIGHT: QUESTION PALETTE - Enhanced */}
        <div className="w-full lg:w-[380px] shrink-0 bg-[var(--surface)]/60 backdrop-blur-sm flex flex-col h-[340px] lg:h-auto rounded-3xl border border-[var(--border)] shadow-xl overflow-hidden">

          <div className="p-5 border-b border-[var(--border)] bg-[var(--surface)]/80">
            <div className="grid grid-cols-2 gap-y-3! gap-x-3 text-[13px] font-semibold text-[var(--secondary-soft)]">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${getStatusInfo('answered').color}`}>
                  ✓
                </div>
                Answered
              </div>
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${getStatusInfo('not_answered').color}`}>
                  ✗
                </div>
                Not Ans
              </div>
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${getStatusInfo('not_visited').color}`}>
                  —
                </div>
                Not Visit
              </div>
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${getStatusInfo('marked').color}`}>
                  ⚑
                </div>
                Marked
              </div>
              <div className="flex items-center gap-2.5 col-span-2">
                <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${getStatusInfo('answered_marked').color}`}>
                  ⚑✓
                </div>
                Ans & Marked
              </div>
            </div>
          </div>

          {/* <div className="p-4 font-bold text-[var(--heading)] border-b border-[var(--border)] bg-[var(--surface)] flex items-center justify-between">
            <span className="text-lg font-heading">Question Palette</span>
            <button
              onClick={() => setShowStatistics(!showStatistics)}
              className="text-[11px] font-bold text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1.5 rounded-full uppercase tracking-wider hover:shadow-lg transition-all duration-300 flex items-center gap-1"
            >
              <BarChart2 size={14} /> Stats
            </button>
          </div> */}

          {/* Statistics Overlay */}
          {showStatistics && (
            <div className="px-4 pb-2 bg-[var(--surface-hover)] border-b border-[var(--border)] animate-in slide-in-from-top duration-300 flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[var(--surface)] shadow-sm">
                  <div className="text-2xl font-bold text-emerald-500">{stats.ans + stats.ansMarked}</div>
                  <div className="text-xs text-[var(--secondary-soft)]">Done</div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface)] shadow-sm">
                  <div className="text-2xl font-bold text-rose-500">{stats.notAns}</div>
                  <div className="text-xs text-[var(--secondary-soft)]">Pending</div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface)] shadow-sm">
                  <div className="text-2xl font-bold text-violet-500">{stats.marked + stats.ansMarked}</div>
                  <div className="text-xs text-[var(--secondary-soft)]">Review</div>
                </div>
              </div>

              <div className="px-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[var(--secondary-soft)] uppercase tracking-wider">Exam Progress</span>
                  <span className="text-xs font-bold text-emerald-500">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[var(--surface)] overflow-hidden border border-[var(--border)]">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">
            <div className="grid grid-cols-5 gap-5!">
              {mockQuestions.map((q, idx) => {
                const status = statuses[idx];
                const isActive = currentIndex === idx;
                const statusInfo = getStatusInfo(status);

                return (
                  <button
                    key={q.id}
                    onClick={() => jumpToQuestion(idx)}
                    className={`w-full aspect-square rounded-xl cursor-pointer border-2 font-bold text-[14px] flex items-center justify-center transition-all duration-200
                      ${isActive ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/40 scale-110 z-10' : statusInfo.color + ' hover:shadow-md'}
                    `}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t border-[var(--border)] bg-[var(--surface)]/80 mt-auto">
            <button onClick={() => {
              if (confirm("Are you sure you want to submit the exam?")) handleSubmit();
            }} className="btn danger w-full shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-lg font-bold">
              Submit Exam
            </button>
          </div>

        </div>

      </div>

      {/* Floating Timer for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 bg-[var(--surface)]/90 backdrop-blur-xl border border-[var(--border)] rounded-full px-5 py-3 shadow-xl flex items-center gap-3">
        <Timer size={18} className="text-[var(--primary)]" />
        <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
}
