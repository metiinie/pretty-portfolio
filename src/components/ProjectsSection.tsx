
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "",
      description: "A brief description of your first project and its impact.",
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      title: "Project 2",
      description: "Description of your second project highlighting key features.",
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      title: "Project 3",
      description: "Overview of your third project and technologies used.",
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader className="p-0">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
