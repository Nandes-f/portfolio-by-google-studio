import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, User } from 'lucide-react'; // Import User icon
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 text-center">
      <div className="container mx-auto">
        <Image 
          src="https://picsum.photos/seed/kianarnold/128/128" 
          alt="Kian Arnold" 
          width={128} 
          height={128} 
          className="rounded-full mx-auto mb-6 shadow-lg border-4 border-primary"
          data-ai-hint="professional portrait"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          {portfolioData.name}
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-4">
          {portfolioData.title}
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Based in {portfolioData.location}. {portfolioData.summary}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <Button size="lg" asChild>
            <a href="/resume.pdf" download="Kian_Arnold_Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Résumé
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact"> {/* Point to contact section */}
              <Mail className="mr-2 h-5 w-5" /> {/* Use Mail icon */}
              Contact Me
            </a>
          </Button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="mailto:kian.arnold@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email Kian" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-7 w-7" />
          </a>
          <a href="https://github.com/kianarnold" target="_blank" rel="noopener noreferrer" aria-label="Kian's GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-7 w-7" />
          </a>
          <a href="https://linkedin.com/in/kianarnold" target="_blank" rel="noopener noreferrer" aria-label="Kian's LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
