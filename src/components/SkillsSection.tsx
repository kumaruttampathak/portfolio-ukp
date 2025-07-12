import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Palette, Terminal, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ElementType;
  color: string;
}

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'HTML', level: 75, category: 'Frontend', icon: Code, color: 'hsl(14, 100%, 53%)' },
    { name: 'CSS', level: 60, category: 'Frontend', icon: Palette, color: 'hsl(228, 96%, 59%)' },
    { name: 'JavaScript', level: 80, category: 'Frontend', icon: Code, color: 'hsl(45, 100%, 51%)' },
    { name: 'React.js', level: 70, category: 'Frontend', icon: Code, color: 'hsl(193, 95%, 68%)' },
    { name: 'Node.js', level: 55, category: 'Backend', icon: Server, color: 'hsl(115, 100%, 40%)' },
    { name: 'Express.js', level: 60, category: 'Backend', icon: Server, color: 'hsl(0, 0%, 20%)' },
    { name: 'MongoDB', level: 55, category: 'Database', icon: Database, color: 'hsl(115, 61%, 47%)' },
    { name: 'MySQL', level: 70, category: 'Database', icon: Database, color: 'hsl(31, 100%, 50%)' },
    { name: 'Java', level: 60, category: 'Programming', icon: Cpu, color: 'hsl(16, 100%, 50%)' },
    { name: 'Python', level: 60, category: 'Programming', icon: Terminal, color: 'hsl(60, 73%, 50%)' },
    { name: 'C', level: 70, category: 'Programming', icon: Cpu, color: 'hsl(228, 45%, 35%)' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        filteredSkills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, skill.name]));
          }, index * 100);
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, filteredSkills]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="animate-gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? 'hero-gradient text-white glow-primary'
                  : 'glass hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isAnimated = animatedSkills.has(skill.name);
            
            return (
              <div
                key={skill.name}
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <IconComponent 
                      className="w-6 h-6" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isAnimated ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                      }}
                    />
                  </div>
                </div>

                {/* Skill Level Badge */}
                <div className="mt-4 flex justify-end">
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      skill.level >= 90 ? 'bg-green-500/20 text-green-400' :
                      skill.level >= 80 ? 'bg-blue-500/20 text-blue-400' :
                      skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {skill.level >= 90 ? 'Expert' :
                     skill.level >= 80 ? 'Advanced' :
                     skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">GitHub Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Followers</span>
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Repositories</span>
                <span className="text-2xl font-bold text-secondary">10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Stars Earned</span>
                <span className="text-2xl font-bold text-accent">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
