import { portfolioData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <GraduationCap className="h-7 w-7 mr-3" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {portfolioData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/80">{edu.duration}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Award className="h-7 w-7 mr-3" /> Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
