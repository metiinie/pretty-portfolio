
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Awol Ibrahim Ayalew</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A Full Stack Developer passionate about creating beautiful and functional web applications
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/metiinie" className="text-gray-600 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/metinie" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://mailto:abumahilkerim@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 animate-fade-down">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
