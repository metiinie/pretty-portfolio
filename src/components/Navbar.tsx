
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">Portfolio</span>
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
