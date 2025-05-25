import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = '';
      
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `opacity 0.3s ease, transform 0.3s ease`;
        span.style.transitionDelay = `${i * 0.05}s`;
        
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, 100);
        
        titleRef.current?.appendChild(span);
      });
    }
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Software Engineer with a Passion for Scalable Systems
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
         I'm a passionate Software Engineer specializing in backend development, system design, and algorithmic problem solving. With strong proficiency in Node.js, JavaScript, TypeScript, and MongoDB, I build scalable, efficient, and maintainable systems. I’ve solved over 1500+ DSA problems, published an NPM package, and contributed to impactful products in e-commerce and ed-tech. I’m deeply driven by clean architecture, performance, and continuous learning.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-colors duration-300"
          >
            View My Work
          </button>
          
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 border-2 border-gray-800 dark:border-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 font-medium rounded-full transition-colors duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-300/20 dark:bg-teal-700/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/20 dark:bg-orange-700/10 rounded-full filter blur-3xl transform translate-x-1/3 translate-y-1/4"></div>
      </div>
    </section>
  );
};