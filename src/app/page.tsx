"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { NotesPreview } from "@/components/landing/NotesPreview";
import { ReferenceLibraryPreview } from "@/components/landing/ReferenceLibraryPreview";
import { ComingSoonModal } from "@/components/landing/ComingSoonModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComingSoon = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar onComingSoon={handleComingSoon} />
      
      <main className="flex-grow">
        <HeroSection onGetStarted={handleComingSoon} />
        <WorkflowSection />
        <ProductPreview />
        <NotesPreview />
        <ReferenceLibraryPreview />
        
        <section className="py-24 md:py-32 bg-surface border-t border-border/50 text-center">
          <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
              Ready to upgrade your study workflow?
            </h2>
            <p className="text-lg text-muted mb-10">
              Join the waitlist to be notified when NotesCroft is ready for early access.
            </p>
            <button 
              onClick={handleComingSoon}
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-medium text-accent-foreground shadow-sm hover:bg-accent-hover transition-colors"
            >
              Get Early Access
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
