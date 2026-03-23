import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  flip?: boolean;
}

export function SectionDivider({ className, flip = false }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "w-full h-16 md:h-24 bg-secondary",
        flip ? "rotate-180" : "",
        className
      )}
      style={{
        clipPath: flip
          ? "polygon(0 0, 100% 20%, 100% 100%, 0 100%)"
          : "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
      }}
      aria-hidden
    />
  );
}
