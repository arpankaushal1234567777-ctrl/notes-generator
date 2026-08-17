import { SectionHeading } from "@/components/ui/SectionHeading";

export function NotesPreview() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-surface z-10"></div>
            <div className="bg-background border border-border rounded-xl shadow-sm p-8 space-y-6 max-h-[500px] overflow-hidden opacity-90">
              <div className="border-b border-border pb-4 mb-6">
                <h3 className="text-xl font-semibold text-foreground">My Engineering Notes</h3>
                <p className="text-sm text-muted">Generated from K. Sankara Rao</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Question 1</h4>
                <div className="space-y-2">
                  <div className="h-4 bg-muted/10 rounded w-3/4"></div>
                  <div className="h-4 bg-muted/10 rounded w-full"></div>
                  <div className="h-4 bg-muted/10 rounded w-5/6"></div>
                </div>
              </div>
              
              <hr className="border-border/60" />
              
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Question 2</h4>
                <div className="space-y-2">
                  <div className="h-4 bg-muted/10 rounded w-full"></div>
                  <div className="h-4 bg-muted/10 rounded w-4/5"></div>
                  <div className="h-4 bg-muted/10 rounded w-full"></div>
                  <div className="h-4 bg-muted/10 rounded w-2/3"></div>
                </div>
              </div>
              
              <hr className="border-border/60" />
              
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Question 3</h4>
                <div className="space-y-2">
                  <div className="h-4 bg-muted/10 rounded w-5/6"></div>
                  <div className="h-4 bg-muted/10 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <SectionHeading 
              align="left"
              title={
                <>
                  One growing set of notes. <br />
                  <span className="text-muted-foreground">One final PDF.</span>
                </>
              }
              description="Stop managing dozens of individual chat sessions. NotesCroft appends each new solution to a single, beautifully formatted master document. When you're ready to study, export the complete set as a clean PDF."
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
