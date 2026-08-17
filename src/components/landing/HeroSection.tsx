import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-muted">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            AI-powered study notes
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-8">
            Turn questions into <br className="hidden md:block" />
            <span className="text-muted-foreground opacity-90">beautifully structured notes.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            Give NotesCroft your question, choose the reference material and tell it how you want the solution. Get clean, exam-ready notes without the repetitive work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" onClick={onGetStarted}>
              Coming Soon
            </Button>
            <Button variant="secondary" size="lg" onClick={onGetStarted}>
              See how it works
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
}
