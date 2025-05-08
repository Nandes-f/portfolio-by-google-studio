import { portfolioData, Experience } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative mb-10 pl-8 group">
              <div className="absolute left-[-23px] top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-primary shadow-md">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform group-hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{exp.role}</CardTitle>
                  <CardDescription className="text-lg text-foreground">
                    {exp.company}
                  </CardDescription>
                  <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                    <span>{exp.duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> {exp.location}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
