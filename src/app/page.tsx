import HeroSection from '@/components/sections/hero-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import EducationSection from '@/components/sections/education-section';
import DynamicSummarySection from '@/components/sections/dynamic-summary-section';
import ContactSection from '@/components/sections/contact-section'; // Import ContactSection
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <Separator />
      <SkillsSection />
      <Separator />
      <ExperienceSection />
      <Separator />
      <ProjectsSection />
      <Separator />
      <EducationSection />
      <Separator />
      <DynamicSummarySection />
      <Separator /> {/* Add separator */}
      <ContactSection /> {/* Add ContactSection */}
    </div>
  );
}
