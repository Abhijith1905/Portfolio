
import { useState, useEffect, useRef } from "react";
import { Github, Star } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
        {
      title: "StreamLytics : Serverless Audio Streaming Platform with Realtime Analytics",
      description: "A full-stack web application built with Serverless Services of AWS.",
      image: "/images/Streamlytics.png",
      tags: ["React", "Lambda", "Dynamo DB" ,"S3", "Cloudfront" , "Cognito"],
      codeLink: "https://github.com/Abhijith1905/ServerlessApplicationStreamlytics.git",
      period: "Dec 2024 - Apr 2025",
    },
    {
      title: "EduSupport : Portfolio And Project Management System",
      description: "A full-stack web application built with React and SpringBoot.",
      image: "/images/edusupport.png",
      tags: ["React", "SpringBoot", "MySQL"],
      codeLink: "https://github.com/Abhijith1905/SDP19Backend.git",
      period: "Aug 2024 - Nov 2024",
    },
    {
      title: "Stock Management System",
      description: "A full-stack web application built with Java EE",
      image: "/images/StockManagementSystem.png",
      tags: ["JSF", "EJB", "JPA", "MySQL"],
      codeLink: "https://github.com/Abhijith1905/StockManagementSystemEP.git",
      period: "Jun 2024 - Jul 2024",
    },
    {
      title: "Personal Portfolio Website",
      description: "An online portfolio application showcasing my skills and projects.",
      image: "/images/portfolio.jpeg",
      tags: ["React"],
      codeLink: "https://github.com/Abhijith1905/portfolio.git",
      period: "Aug 2023 - Nov 2023",
    },
    {
      title: "Acadamex : Student Course Management System",
      description: "A full-stack web application built with React and Node.js.",
      image: "/images/acadamex.png",
      tags: ["React", "Express", "MongoDB"],
      codeLink: "https://github.com/Abhijith1905/MERNSDPBackend.git",
      period: "Aug 2023 - Nov 2023",
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4 animate-fade-in">
            My Work
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "150ms" }}>
            Featured Projects
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "300ms" }}>
            A showcase of my best work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-panel rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                {/* Blurry placeholder */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-0"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                />
               
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                  {project.period}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-2 py-1 rounded-full bg-blue-500/10 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  <a
                    href={project.codeLink}
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-300 transition-all duration-300 hover:translate-x-1"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
