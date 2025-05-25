import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl">
              <span className="text-teal-400">Sagar</span>Portfolio
            </div>
            <p className="mt-2 text-gray-400">
              Creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 p-3 bg-teal-700 hover:bg-teal-600 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date('2024').getFullYear()} Portfolio. Thanks for visiting.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};