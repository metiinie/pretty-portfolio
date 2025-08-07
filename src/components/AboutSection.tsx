
import { Card, CardContent } from "@/components/ui/card";
import { Book, Code, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="animate-fade-up [animation-delay:200ms]">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">
                Passionate about building excellent software that improves lives of those around me.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-up [animation-delay:400ms]">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">
                Over X years of experience in developing web applications and solving complex problems.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-fade-up [animation-delay:600ms]">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Constantly learning and keeping up with the latest technologies and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
