import { APP_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border/50 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-semibold text-lg tracking-tight text-foreground">
            {APP_NAME}
          </span>
          <p className="text-sm text-muted">
            Turn questions into beautifully structured study notes.
          </p>
        </div>
        
        <div className="text-sm text-muted">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
