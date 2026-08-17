import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Image as ImageIcon, BookOpen, Settings } from "lucide-react";

export function WorkflowSection() {
  const steps = [
    {
      id: "01",
      title: "Question",
      description: "Type your question or upload a picture.",
      icon: <ImageIcon className="w-5 h-5 text-accent-foreground" />
    },
    {
      id: "02",
      title: "Reference",
      description: "Choose the textbook you want the solution grounded in.",
      icon: <BookOpen className="w-5 h-5 text-accent-foreground" />
    },
    {
      id: "03",
      title: "Specifications",
      description: "Tell NoteCraft how you want the solution presented.",
      icon: <Settings className="w-5 h-5 text-accent-foreground" />
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          eyebrow="Workflow"
          title="Three simple steps."
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-start group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-semibold text-muted/50 group-hover:text-muted transition-colors">
                  {step.id}
                </span>
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-muted uppercase tracking-wider">
            <span className="px-4 py-2 rounded-full border border-border bg-background">Generate</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="px-4 py-2 rounded-full border border-border bg-background">Review</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="px-4 py-2 rounded-full border border-border bg-background">Add to Notes</span>
            <ArrowRight className="w-4 h-4 opacity-50" />
            <span className="px-4 py-2 rounded-full border border-border bg-accent text-accent-foreground">Download</span>
          </div>
        </div>
      </div>
    </section>
  );
}
