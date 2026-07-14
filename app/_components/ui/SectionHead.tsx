import React from "react";

export function SectionHead({
  eyebrow,
  title,
  description,
  copy,
  action,
  ai = false,
}: {
  eyebrow?: string;
  description?: string;
  title: string;
  copy?: string;
  action?: React.ReactNode;
  ai?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7">
      <div>
        {eyebrow ? (
          <span
            className={`inline-flex items-center gap-2 min-h-8 px-3 py-1 border rounded-full font-utility text-sm font-bold shadow-sm w-fit ${
              ai
                ? "border-ai/20 bg-ai-light text-ai"
                : "border-border bg-surface text-secondary-soft"
            }`}
          >
            {eyebrow}
          </span>
        ) : null}
        <h2
          className={`text-[clamp(30px,5vw,36px)] font-[750] leading-[1.2] text-heading -tracking-[0.02em] ${
            eyebrow ? "mt-4" : ""
          }`}
        >
          {title}
        </h2>
        {copy ? (
          <p className="max-w-[62ch] mt-2.5 text-body text-lg leading-[1.7]">
            {copy}
          </p>
        ) : null}
        {description ? (
          <p className="max-w-[62ch] mt-2.5 text-body text-lg leading-[1.7]">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
