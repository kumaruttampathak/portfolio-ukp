import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCanvas from './AnimatedCanvas';

const HeroSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Web Developer', 'Frontend Engineer', 'React Specialist', 'UI/UX Enthusiast'];

  useEffect(() => {
    const currentWord = roles[currentRole];
    const speed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/kumaruttampathak',
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/uttamkumarpathak',
      color: 'hover:text-secondary'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:kumaruttampathak10@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      <AnimatedCanvas />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-muted-foreground">Hello, I'm</span>
            <span className="block animate-gradient-text">Uttam Kumar Pathak</span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="text-primary">I'm a </span>
            <span className="ml-2 text-foreground border-r-2 border-primary animate-pulse min-w-[200px] text-left">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web applications 
            with modern technologies and best practices.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            className="hero-gradient hover:scale-105 transition-transform glow-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
{/*           <Button
            size="lg" 
            variant="outline" 
            className="glass hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4 mr-2"/>
          </Button> */}
          <a
            href="/Uttam_Kumar_Pathak_CV.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-medium rounded-md glass hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4 mr-2" />
                Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 glass rounded-full hover-lift ${social.color} transition-all group`}
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
