
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="animate-fade-up">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>abumahilkerim@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+251918982161</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-fade-up [animation-delay:200ms]">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[120px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
