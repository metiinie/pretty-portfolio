
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "AWS", "Firebase"]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <Card key={category} className="animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
