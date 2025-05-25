import { useEffect, useRef } from "react";
import { Code, Briefcase, Coffee, BookOpen } from "lucide-react";

import sagarhasan from "../assets/images/sagarhasan.jpg";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Hello, I'm{" "}
                <span className="text-teal-600 dark:text-teal-400">Sagar</span>
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                I'm a passionate full-stack developer with 1.5+ years of
                experience creating intuitive and dynamic web applications. My
                journey in tech began with a curiosity about how digital
                products shape our daily experiences.
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img
                  src={sagarhasan}
                  alt="Sagar Hasan"
                  className="rounded-lg shadow-lg object-cover flex-none"
                  loading="lazy"
                  width={200}
                  height="auto"
                />
                <p className="text-gray-600 dark:text-gray-400 flex-1">
                  Also Aspiring Software Engineer with a strong foundation in
                  system design, backend development, and problem solving.
                  Proficient in JavaScript, with hands-on experience in Node.js,
                  MongoDB, and RESTful APIs. Passionate about building scalable,
                  distributed systems and eager to contribute to cloud platforms
                  like Microsoft Azure.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="/Sagar_Hasan_Exp_02.pdf"
                  download="Sagar_Hasan_Exp_02.pdf"
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-colors duration-300 inline-block"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-blue-500" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  1200+ DSA problems on Codeforces & Leetcode.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mb-4">
                  <Coffee className="text-purple-500" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">System Design</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Crafting Reliable Systems with Code & Logic. Problem Solver
                  Behind the Server.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-orange-500" size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Backend</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Building robust APIs and database architectures to power
                  applications.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-full flex items-center justify-center mb-4">
                  <Code
                    className="text-teal-600 dark:text-teal-400"
                    size={24}
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2">Frontend</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating responsive, accessible, and beautiful interfaces
                  using modern frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
