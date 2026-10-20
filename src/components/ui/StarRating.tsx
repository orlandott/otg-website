import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  /** Accessible label, e.g. "5 out of 5 stars". Omit when nearby text already says it. */
  label?: string;
  size?: number;
}

export function StarRating({ rating, label, size = 16 }: StarRatingProps) {
  return (
    <span
      className="inline-flex gap-0.5"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          aria-hidden
          className={i < rating ? "fill-accent text-accent" : "text-border"}
        />
      ))}
    </span>
  );
}
