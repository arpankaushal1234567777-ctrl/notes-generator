import * as React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  className = "",
  align = "center"
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-medium tracking-wide text-muted uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted max-w-2xl mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
