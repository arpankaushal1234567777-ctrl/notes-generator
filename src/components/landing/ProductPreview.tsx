import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ProductPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="The NotesCroft Interface"
          description="A preview of the simple, focused experience we are building."
          className="mb-16"
        />
        
        <div className="max-w-3xl mx-auto bg-background border border-border/60 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          {/* Fake Window Header */}
          <div className="h-12 border-b border-border/50 bg-surface flex items-center px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
            </div>
            <div className="mx-auto text-xs font-medium text-muted">New Question</div>
          </div>
          
          {/* Fake App Content */}
          <div className="p-8 md:p-12 space-y-8 pointer-events-none select-none">
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted uppercase tracking-wide">Question</label>
              <div className="w-full min-h-[120px] rounded-xl border border-border bg-surface p-4 flex items-start">
                <span className="text-muted/60">Type your question or drop an image...</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-muted uppercase tracking-wide">Reference</label>
                <div className="w-full rounded-xl border border-border bg-surface p-4 flex items-center justify-between">
                  <span className="text-foreground font-medium">K. Sankara Rao</span>
                  <div className="w-4 h-4 rounded-full border border-border flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-muted/30"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-medium text-muted uppercase tracking-wide">Specifications</label>
                <div className="flex flex-wrap gap-2">
                  <div className="px-4 py-2 rounded-lg border-2 border-accent bg-accent/5 text-foreground font-medium text-sm">
                    Detailed
                  </div>
                  <div className="px-4 py-2 rounded-lg border border-border bg-surface text-muted font-medium text-sm">
                    Summary
                  </div>
                  <div className="px-4 py-2 rounded-lg border-2 border-accent bg-accent/5 text-foreground font-medium text-sm">
                    Follow book
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button className="opacity-80">
                Generate Solution
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
