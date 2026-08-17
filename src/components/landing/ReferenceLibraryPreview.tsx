import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Library } from "lucide-react";

export function ReferenceLibraryPreview() {
  const books = [
    { title: "Differential Equations", author: "K. Sankara Rao", ready: true },
    { title: "Engineering Mathematics", author: "K.A. Stroud", ready: true },
    { title: "University Physics", author: "Young & Freedman", ready: false },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <div>
            <SectionHeading 
              align="left"
              title="Grounded in your actual curriculum."
              description="Books are processed once and stored in the reference library. Every solution NotesCroft generates is strictly grounded in the specific textbook you select, ensuring the methodology matches what your professor expects."
            />
          </div>
          
          <div className="bg-background border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-border bg-surface flex items-center gap-3">
              <Library className="w-5 h-5 text-muted" />
              <h3 className="font-medium text-foreground">Reference Library</h3>
            </div>
            <div className="divide-y divide-border">
              {books.map((book, i) => (
                <div key={i} className="px-6 py-5 flex items-center justify-between hover:bg-surface/50 transition-colors">
                  <div>
                    <h4 className="font-medium text-foreground">{book.title}</h4>
                    <p className="text-sm text-muted">{book.author}</p>
                  </div>
                  {book.ready ? (
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-500">
                      <CheckCircle2 className="w-4 h-4" />
                      Ready
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-medium text-muted">
                      Processing...
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
