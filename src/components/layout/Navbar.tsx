import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  onComingSoon: () => void;
}

export function Navbar({ onComingSoon }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Minimalist Logo */}
          <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-background rounded-full" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-foreground">
            {APP_NAME}
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={onComingSoon}
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            How it works
          </button>
          <button 
            onClick={onComingSoon}
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Sign in
          </button>
          <Button size="sm" onClick={onComingSoon}>
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={onComingSoon}>
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
