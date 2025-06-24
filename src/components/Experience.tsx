
import { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "AWS Java Full Stack Developer Virtual Internship",
      company: "APSCHE",
      period: "July 2024 - September 2024",
      description: "Focused on Java Full Stack development using AWS services. Developed applications with React frontend and Spring Boot backend. Implemented secure authentication and managed cloud infrastructure.",
      skills: ["Java", "React", "Spring Boot", "AWS", "Cloud"],
      link: "https://drive.google.com/file/d/1irEIRu9hF3jfySi8D5jLacBJdC3VQuiH/view?usp=sharing"
    },
    {
      title: "AWS Data Engineering Virtual Internship",
      company: "APSCHE",
      period: "April 2024 - June 2024",
      description: "Worked on data engineering projects using AWS services. Processed large datasets and built data pipelines. Gained experience with AWS data analytics services.",
      skills: ["AWS", "Data Engineering", "Analytics", "Big Data"],
      link: "https://drive.google.com/file/d/1kJRWP8HnFffQsSw1luN73YbKcYwgAFkD/view?usp=sharing"
    },
    {
      title: "AWS Cloud Virtual Internship",
      company: "APSCHE",
      period: "January 2024 - March 2024",
      description: "Learned cloud computing fundamentals on AWS. Worked with core AWS services including EC2, S3, and RDS. Implemented cloud-based solutions and gained practical experience.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "RDS"],
      link: "https://drive.google.com/file/d/1TK4nXSjTikjOQx-dCK5ZUmg50NVC7Dxe/view?usp=sharing"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl -z-10 opacity-30"></div>
      
      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4">
            My Journey
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional path and internship highlights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-gray-700/60"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative pl-12 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                  </div>
                  
                  <div className="glass-panel p-6 rounded-xl">
                    <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center text-sm text-blue-300">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-blue-100 mb-3">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm"
                      >
                        View details <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
