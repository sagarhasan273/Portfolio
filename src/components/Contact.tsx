import { useState, useEffect, useRef, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "sagarhasan273@gmail.com",
      link: "mailto:sagarhasan273@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+880 194 171 7226",
      link: "tel:+8801941717226",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Gulshan 1, Dhaka, Bangladesh",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800/50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/40 rounded-full flex items-center justify-center mr-4 text-teal-600 dark:text-teal-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.label}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>

              <div className="flex space-x-4">
                <a
                  href="https://leetcode.com/u/sagarhasan273/"
                  target="_blank"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 hover:text-white transition-colors rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">LeetCode</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="leetcode"
                    width="18"
                    height="18"
                    fill="currentColor"
                    // stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.1,16.007h-9.187c-1.047,0-1.899-0.897-1.899-2s0.853-2,1.899-2H20.1c1.048,0,1.9,0.897,1.9,2S21.147,16.007,20.1,16.007z M10.913,13.507c-0.217,0-0.399,0.229-0.399,0.5s0.183,0.5,0.399,0.5H20.1c0.217,0,0.4-0.229,0.4-0.5s-0.184-0.5-0.4-0.5H10.913z"></path>
                    <path d="M10.538,24c-1.621,0-3.011-0.55-4.021-1.589l-3.949-4.09C1.557,17.278,1,15.803,1,14.167c0-1.61,0.557-3.072,1.568-4.117l9.174-9.47C12.104,0.206,12.592,0,13.113,0c0,0,0,0,0.001,0c0.54,0,1.049,0.218,1.434,0.614c0.766,0.792,0.78,2.061,0.032,2.828l-1.443,1.511C13.549,5.18,13.985,5.5,14.511,5.95l2.361,1.963c0.804,0.824,0.788,2.093,0.024,2.882c-0.386,0.397-0.895,0.615-1.435,0.615c-0.001,0-0.001,0-0.002,0c-0.521,0-1.007-0.207-1.367-0.581l-2.377-1.876c-0.668-0.497-0.783-0.534-1.19-0.534c-0.422,0-0.803,0.159-1.164,0.486l-3.886,4.069c-0.282,0.291-0.43,0.702-0.43,1.191c0,0.498,0.155,0.945,0.427,1.226l3.937,4.091c0.251,0.26,0.627,0.392,1.116,0.392c0.49,0,0.866-0.132,1.116-0.392l2.461-2.454c0.351-0.363,0.836-0.569,1.357-0.57c0,0,0.001,0,0.002,0c0.539,0,1.049,0.219,1.434,0.616c0.765,0.79,0.78,2.058,0.034,2.825l-2.365,2.469C13.542,23.422,12.113,24,10.538,24z M13.113,1.5c-0.079,0-0.194,0.021-0.294,0.124l-9.173,9.469C2.907,11.856,2.5,12.948,2.5,14.167c0,1.244,0.407,2.349,1.146,3.11c0.001,0.001,0.001,0.001,0.001,0.002l3.948,4.089c0.72,0.74,1.737,1.132,2.943,1.132c1.183,0,2.202-0.405,2.946-1.173l2.365-2.469c0.188-0.193,0.172-0.531-0.032-0.741c-0.1-0.103-0.226-0.159-0.356-0.159l0,0c-0.078,0-0.192,0.021-0.29,0.122l-2.46,2.454c-0.526,0.546-1.285,0.84-2.186,0.84c-0.898,0-1.658-0.294-2.195-0.85l-3.937-4.091c-0.546-0.565-0.848-1.371-0.848-2.268c0-0.874,0.302-1.667,0.849-2.231l3.921-4.104c0.67-0.609,1.421-0.912,2.21-0.912c0.878,0,1.315,0.258,2.104,0.845l2.468,1.957c0.172,0.168,0.285,0.189,0.364,0.189l0,0c0.131,0,0.258-0.057,0.357-0.159c0.202-0.21,0.219-0.549,0.034-0.739l-2.311-1.915c-1.026-0.881-1.474-1.02-1.844-1.086c-0.271-0.05-0.51-0.247-0.595-0.51c-0.086-0.263-0.036-0.554,0.155-0.753l2.241-2.347c0.189-0.195,0.173-0.533-0.03-0.743C13.372,1.557,13.245,1.5,13.113,1.5z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sagar-hasan-677b5b1ba/"
                  target="_blank"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 hover:text-white transition-colors rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                <a
                  href="https://github.com/sagarhasan273"
                  target="_blank"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 hover:text-white transition-colors rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>

                <a
                  href="https://x.com/sagarhasan273"
                  target="_blank"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 hover:text-white transition-colors rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Ex. Sagar hasan"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Ex. sagar@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="How can I help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg mt-4">
                    Your message has been sent successfully. I'll get back to
                    you soon!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
