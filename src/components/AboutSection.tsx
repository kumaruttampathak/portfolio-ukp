import React from 'react';
import { Code, Coffee, Lightbulb, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Years learning journey', icon: Code },
    { number: '10+', label: 'Projects Completed', icon: Lightbulb },
    // { number: '20+', label: 'Happy Clients', icon: Heart },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee }
  ];

  const interests = [
    'Web Development',
    'UI/UX Design', 
    'Open Source',
    'Machine Learning',
    'Mobile Apps',
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="animate-gradient-text">About Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a passionate front-end developer creating digital solutions that make a difference. My journey in web 
                development started with a curiosity about how websites work, and it 
                has evolved into a career I truly love.
              </p>
              
              <p>
                I specialize in modern web technologies like React, Node.js, and cloud 
                platforms. I believe in writing clean, maintainable code and creating 
                user experiences that are both beautiful and functional.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while reading about the latest trends in tech.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Interests & Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 glass rounded-full text-sm hover-scale transition-all"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="animate-slide-right">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 hero-gradient rounded-full animate-pulse-glow"></div>
                <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-muted to-card rounded-full flex items-center justify-center">
                    <img 
                      src="/profile.jpg" 
                      alt="Uttam Kumar Pathak" 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass rounded-lg p-6 text-center hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 hero-gradient rounded-lg">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
