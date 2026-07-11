"use client";

import { X } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface ExamInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
  title?: string;
  durationMins?: number;
  totalQuestions?: number;
}

export function ExamInstructionsModal({
  isOpen,
  onClose,
  onStart,
  title = "Exam Instructions",
  durationMins = 60,
  totalQuestions = 30,
}: ExamInstructionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <GlassCard className="max-w-2xl w-full stack bg-[var(--bg)] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--surface-hover)] transition-colors text-[var(--secondary-soft)]"
        >
          <X size={20} />
        </button>

        <h2 className="h2 mb-4 text-[var(--heading)]">{title}</h2>

        <div className="text-[15px] text-[var(--body)] stack gap-2! mb-4 max-h-[40vh] overflow-y-auto lg:max-h-none lg:overflow-visible pr-2">          <p>1. The exam is of <strong>{durationMins} minutes</strong> duration.</p>
          <p>2. There are <strong>{totalQuestions} questions</strong> in total.</p>
          <p>3. <strong>Security Warning:</strong> Navigating away from the exam window, minimizing the browser, or opening new tabs will trigger a warning. 3 warnings will lead to auto-submission.</p>
          <p>4. Right-click and copy-paste are disabled.</p>

          <h4 className="font-bold text-[var(--heading)] mt-2">Marking Scheme Statuses:</h4>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-green-500 text-white border border-green-600 flex items-center justify-center text-xs font-bold shadow-sm">1</div>
              <span className="font-medium text-[var(--heading)]">Answered</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-red-500 text-white border border-red-600 flex items-center justify-center text-xs font-bold shadow-sm">2</div>
              <span className="font-medium text-[var(--heading)]">Not Answered</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-gray-200 text-gray-600 border border-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 flex items-center justify-center text-xs font-bold shadow-sm">3</div>
              <span className="font-medium text-[var(--heading)]">Not Visited</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-purple-500 text-white border border-purple-600 flex items-center justify-center text-xs font-bold shadow-sm">4</div>
              <span className="font-medium text-[var(--heading)]">Marked for Review</span>
            </div>
            <div className="flex items-center gap-3 col-span-2">
              <div className="w-7 h-7 rounded-md bg-purple-500 text-white border border-purple-600 flex items-center justify-center text-xs font-bold shadow-sm relative after:content-[''] after:absolute after:-bottom-1 after:-right-1 after:w-3 after:h-3 after:bg-green-400 after:rounded-full after:border-2 after:border-white dark:after:border-[#0B0C10]">5</div>
              <span className="font-medium text-[var(--heading)]">Answered & Marked</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4 border-t border-[var(--border)]">
          <button onClick={onClose} className="btn secondary flex-1">
            Cancel
          </button>
          <button onClick={onStart} className="btn primary flex-1">
            I am ready to begin
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
