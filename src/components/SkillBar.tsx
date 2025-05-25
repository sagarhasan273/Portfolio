import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

export const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentBar = barRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(percentage);
          }, 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (currentBar) {
      observer.observe(currentBar);
    }
    
    return () => {
      if (currentBar) {
        observer.unobserve(currentBar);
      }
    };
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div 
        ref={barRef}
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
      >
        <div 
          className="bg-teal-600 dark:bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};