import { portfolioData, Skill } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-xl text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1 flex items-center gap-2 rounded-md bg-muted hover:bg-accent/20">
            <skill.icon className="h-4 w-4 text-primary" />
            {skill.name}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Skills & <span className="text-primary">Technologies</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="Frameworks & Languages" skills={portfolioData.skills.frameworksLanguages} />
          <SkillCategory title="Tools & Services" skills={portfolioData.skills.toolsServices} />
          <SkillCategory title="UI & Architecture" skills={portfolioData.skills.uiArchitecture} />
          <SkillCategory title="Payment & Notifications" skills={portfolioData.skills.paymentNotifications} />
        </div>
      </div>
    </section>
  );
}
