// src/components/layout/mobile-nav.tsx
"use client";
import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Sticky Bottom Bar for main navigation icons */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-around max-w-screen-2xl px-2">
          {portfolioData.navLinks.slice(0, 4).map((link) => ( // Show first 4 prominent links
            <Link key={link.label} href={link.href} passHref legacyBehavior>
              <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto p-1" aria-label={link.label}>
                <link.icon className="h-5 w-5 mb-0.5" />
                <span className="text-xs">{link.label}</span>
              </Button>
            </Link>
          ))}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto p-1" aria-label="More options">
                <Menu className="h-5 w-5 mb-0.5" />
                <span className="text-xs">More</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto p-4 rounded-t-lg">
              <div className="grid gap-4">
                <nav className="grid gap-2">
                  {portfolioData.navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      passHref
                      legacyBehavior
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="ghost" className="w-full justify-start">
                        <link.icon className="mr-2 h-4 w-4" />
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </nav>
                <Button asChild className="w-full">
                  <a href="/resume.pdf" download="Kian_Arnold_Resume.pdf" onClick={() => setIsOpen(false)}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Résumé
                  </a>
                </Button>
                <Button variant="outline" className="w-full" onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setIsOpen(false);
                }}>
                  {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                  Toggle Theme
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
