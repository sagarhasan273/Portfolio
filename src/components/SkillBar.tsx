import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

export const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
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