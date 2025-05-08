// This component is intended for desktop view.
// For this portfolio, a sticky top header might not be needed if using single-page scroll.
// We can simplify to a non-sticky header or integrate navigation into a hero section for desktop.
// For now, creating a basic header structure.
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Download, Menu, User } from 'lucide-react'; // Changed Bot to User icon
import { portfolioData } from '@/lib/data';
import { useTheme } from '@/hooks/use-theme'; // Assuming a useTheme hook

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="hidden md:flex sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Use a consistent icon, User seems appropriate for a portfolio */}
          <User className="h-6 w-6 text-primary" /> 
          <span className="font-bold sm:inline-block">{portfolioData.name}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {portfolioData.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild>
            <a href="/resume.pdf" download="Kian_Arnold_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Résumé
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
