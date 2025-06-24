
import { useState, useEffect } from "react";
import { FileDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full filter blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[40%] bg-blue-400/5 rounded-full filter blur-3xl animate-float opacity-60" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 animate-fade-in">
              Welcome to my portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-400">Abhijith Kora</span>
              <br />
              <span className="text-gradient">
                Web Developer
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
              Always focused on elegant design and robust functionality.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-300 bg-blue-600 hover:bg-blue-700 rounded-lg focus:shadow-outline focus:outline-none"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1EmFK4kiN6EoKjKEKbj2Ix7991FQzO44t/view?usp=drive_link"
                target="_blank"
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide transition duration-300 bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-900/20 rounded-lg focus:shadow-outline focus:outline-none"
              >
                <FileDown className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>
          </div>
        </div>

        <div className={`flex justify-center transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse-subtle"></div>
            
            {/* Image container with blur effect for loading */}
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-gray-800/50 shadow-xl">
              <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
              <img
                src="/images/Abhi.jpg "
                alt="Abhijith Kora Portrait"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                style={{ opacity: 0 }}
              />
            </div>
            
            {/* Decorative circle */}
            <div className="absolute top-0 -right-4 w-20 h-20 border-4 border-blue-500/20 rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-500/20 rounded-full opacity-30 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
