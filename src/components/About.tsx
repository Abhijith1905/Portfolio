import { useState, useEffect, useRef } from "react";
import { GraduationCap, Calendar, School, Award, MapPin, Info, FileDown } from "lucide-react";

const About = () => {
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
      { threshold: 0.2 }
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

  const skills = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      url: "https://www.java.com/",
      category: "Programming Language"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      category: "Programming Language"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://reactjs.org/",
      category: "Frontend"
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      category: "Frontend"
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      category: "Frontend"
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      url: "https://getbootstrap.com/",
      category: "Frontend"
    },
    {
      name: "JSP",
      icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      url: "https://www.oracle.com/java/technologies/jspt.html",
      category: "Frontend"
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      url: "https://spring.io/projects/spring-boot",
      category: "Backend"
    },
    {
      name: "RESTful APIs",
      icon: "https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg",
      url: "https://restfulapi.net/",
      category: "Backend"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      url: "https://www.mysql.com/",
      category: "Database"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      url: "https://www.mongodb.com/",
      category: "Database"
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      url: "https://expressjs.com/",
      category: "Backend"
    }
  ];

  const education = [
    {
      degree: "B.Tech",
      institute: "Koneru Lakshmaiah Education Foundation",
      score: "CGPA: 9.69",
      year: "2022-2026",
      icon: <GraduationCap />,
      logo: "/images/ea9e0c4c-6039-4582-96b0-c8342595bbbd.png",
      description: "Computer Science and Engineering",
      location: "Vaddeswaram, Guntur District"
    },
    {
      degree: "Intermediate",
      institute: "Sri Chaitanya Junior College",
      score: "Marks: 975",
      year: "2020-2022",
      icon: <School />,
      logo: "/images/b5aaf7da-c35b-412a-9e83-6c75ae7535d1.png",
      description: "Mathematics, Physics, Chemistry (MPC)",
      location: "Vijayawada, Krishna District"
    },
    {
      degree: "Matriculation",
      institute: "Sri Chaitanya High School",
      score: "Marks: 568",
      year: "2019-2020",
      icon: <Award />,
      logo: "/images/b5aaf7da-c35b-412a-9e83-6c75ae7535d1.png",
      description: "State Syllabus",
      location: "Kavali, SPSR Nellore District"
    }
  ];

  const skillCategories = {
    "Programming Language": "bg-purple-500/15 border-purple-500/30 hover:bg-purple-500/25",
    "Frontend": "bg-blue-500/15 border-blue-500/30 hover:bg-blue-500/25",
    "Backend": "bg-green-500/15 border-green-500/30 hover:bg-green-500/25",
    "Database": "bg-orange-500/15 border-orange-500/30 hover:bg-orange-500/25",
    "Tool": "bg-pink-500/15 border-pink-500/30 hover:bg-pink-500/25"
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl -z-10 opacity-60"></div>

      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4">
            About Me
          </div>
          <h2 className="section-title">My Background</h2>
          <p className="section-subtitle">
            I'm passionate about building user-friendly applications with clean, efficient code
          </p>
        </div>

        {/* Who I Am & Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-panel p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  Currently pursuing a B.Tech in Computer Science and Engineering at KL University, Vijayawada, I am a passionate Full Stack Developer driven by the art of transforming ideas into intuitive, high-performing digital experiences.
                </p>
                <p>
                  With expertise in AWS technologies and Java Full Stack development, I thrive in dynamic, collaborative environments, solving complex challenges with innovative solutions.
                </p>
                <p>
                  Beyond coding, I'm on a constant quest to explore emerging technologies, contribute to open-source projects, and push the boundaries of cloud computing.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#certifications" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 animated-link">
                  View My Certifications
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <a href="https://drive.google.com/file/d/1EmFK4kiN6EoKjKEKbj2Ix7991FQzO44t/view?usp=drive_link" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 animated-link">
                  View Resume
                  <FileDown className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-panel p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>

              <div className="mb-6 flex flex-wrap gap-2">
                {Object.entries(skillCategories).map(([category, className]) => (
                  <div key={category} className={`px-3 py-1.5 rounded-full text-sm font-medium ${className}`}>
                    {category}
                  </div>
                ))}
              </div>

              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-card" style={{ animationDelay: `${index * 50}ms` }}>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://via.placeholder.com/48?text=" + skill.name[0];
                      }}
                    />
                    <span className="skill-name">{skill.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={`mt-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-panel p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="education-card glass-panel p-5 rounded-xl hover:bg-blue-500/5 transition-colors duration-300"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${index * 150}ms`
                  }}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
                        <img src={edu.logo} alt={edu.institute} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                        <h5 className="text-xl font-bold text-white">{edu.degree}</h5>
                        <div className="flex items-center gap-1 text-blue-400 text-sm mt-1 md:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-lg text-gray-300">{edu.institute}</p>
                        <p className="text-sm text-gray-400 mt-1">{edu.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        <div className="flex items-center gap-2 text-sm text-blue-300">
                          <div className="p-1.5 rounded-full bg-blue-500/10">
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-300">
                          <div className="p-1.5 rounded-full bg-green-500/10">
                            <Info className="w-3.5 h-3.5" />
                          </div>
                          <span>{edu.score}</span>
                        </div>
                      </div>
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

export default About;
