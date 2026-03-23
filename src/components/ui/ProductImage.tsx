"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

export function ProductImage({
  src,
  alt,
  fill = true,
  className,
  sizes,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "bg-gray-200 dark:bg-dark-section flex items-center justify-center",
          fill ? "absolute inset-0" : "aspect-[4/3]",
          className
        )}
      >
        <span className="text-gray-500 dark:text-gray-400 text-sm font-body">Image</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      onError={() => setHasError(true)}
    />
  );
}
