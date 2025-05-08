import type { ReactNode } from 'react';
import Header from './header';
import MobileNav from './mobile-nav';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
      <MobileNav />
      {/* Footer can be added here if needed, or as a section */}
    </div>
  );
}
