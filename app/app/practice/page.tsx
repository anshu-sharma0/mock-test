import { BookOpen } from "lucide-react";
import { AppFrame } from "@/app/_components/layout/AppFrame";
import { studentNav } from "@/app/_lib/navigation";
import { GenericWorkspace } from "@/app/_components/sections/GenericWorkspace";

export default function PracticePage() {
  return (
    <AppFrame title="Practice" subtitle="Targeted drills from mistakes and weak chapters" nav={studentNav} active="/app/practice">
      <GenericWorkspace
        icon={BookOpen}
        title="Build a focused practice set"
        copy="Choose subject, chapter, difficulty, question type, and timing mode. Saved mistakes are ready for spaced repetition."
        actions={[["Start drill", "/app/attempts/live-jee-main"], ["Review mistakes", "/app/results/live-jee-main/review"]]}
      />
    </AppFrame>
  );
}
