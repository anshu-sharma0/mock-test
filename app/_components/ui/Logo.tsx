import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link className="inline-flex items-center gap-2.5 text-heading font-heading text-lg font-extrabold" href={href}>
      <span className="grid place-items-center w-9 h-9 rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-md">
        <Sparkles size={18} />
      </span>
      <span>MockTestZone</span>
    </Link>
  );
}
