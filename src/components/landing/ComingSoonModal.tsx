"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent scrolling when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div 
        className="relative z-10 w-full max-w-md bg-background border border-border rounded-2xl shadow-xl overflow-hidden p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:bg-surface hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-12 bg-surface rounded-2xl border border-border flex items-center justify-center">
            <div className="w-4 h-4 bg-accent rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-background rounded-full" />
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-foreground tracking-tight">
            We&apos;re building something useful.
          </h2>
          <p className="text-muted leading-relaxed">
            Built for students who are tired of turning the same AI workflow into a dozen manual steps. A simpler way to turn textbook questions into finished study notes is coming soon.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button onClick={onClose} className="w-full">
            Keep exploring
          </Button>
        </div>
      </div>
    </div>
  );
}
