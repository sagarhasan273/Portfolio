import { useEffect, useRef } from 'react';
import { SkillBar } from './SkillBar';
import { SkillCard } from './SkillCard';

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (node) {
      observer.observe(node);
    }
    
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const technicalSkills = [
    { name: 'DSA 1200+ LeetCode', percentage: 70 },
    { name: 'JavaScript / TypeScript', percentage: 80 },
    { name: 'Node.js', percentage: 70 },
    { name: 'React JS', percentage: 75 },
    { name: 'HTML & CSS', percentage: 80 },
    { name: 'SQL & NoSQL', percentage: 75 },
    { name: 'AI/ML', percentage: 50 },
    // { name: 'AWS / Azure', percentage: 60 },
  ];

  const otherSkills = [
    { name: 'JavaScript', icon: 'JavaScriptIcon' },
    { name: 'Python', icon: 'PythonIcon' },
    { name: 'Node.js', icon: 'NodeIcon' },
    { name: 'React', icon: 'ReactIcon' },
    { name: 'AI/ML', icon: 'MlIcon' },
    { name: 'DSA', icon: 'DSAIcon' },
    { name: 'TypeScript', icon: 'TypeScriptIcon' },
    { name: 'MongoDB', icon: 'MongoDBIcon' },
    { name: 'Express.js', icon: 'ExpressIcon' },
    { name: 'Material UI', icon: 'MaterialUIIcon' },
    { name: 'Figma', icon: 'FigmaIcon' },
    { name: 'Docker', icon: 'DockerIcon' },
    { name: 'Git', icon: 'GitIcon' },
    { name: 'Redux', icon: 'ReduxIcon' },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800/50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack.
            Here's an overview of my technical expertise and professional skills.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl font-semibold mb-8">Technical Proficiency</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                percentage={skill.percentage} 
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {otherSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};