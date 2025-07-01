import { useState, useEffect, useRef } from "react";
import { BadgeCheck, FileCheck, Award, GraduationCap, ExternalLink } from "lucide-react";

const Certifications = () => {
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

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: <BadgeCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1AWwKycAKEgyLyYC6RukhuX_AjvdRkV8X/view?usp=drive_link", 
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "RedHat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      icon: <FileCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1miFXWSKWqlhVxiqJPaKTJI3NYMxi4g7P/view?usp=drive_link", 
      color: "from-red-400 to-red-600",
    },
    {
      title: "GCP Associate Cloud Engineer",
      issuer: "GCP",
      icon: <Award className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1rpDlDvfzSFvVJmFAqfIv62hDVWSdnH3M/view?usp=drive_link", 
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      icon: <Award className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1GjT0FgzmVGFa2CP6tYKw3nl1f5zW9bcA/view?usp=drive_link", 
      color: "from-indigo-400 to-purple-600",
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl -z-10 opacity-60"></div>

      <div className="section-container">
        <div className="mb-16 text-center">
        
          <h2 className="section-title">My Certifications</h2>
          <p className="section-subtitle">
            Professional certifications that validate my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`certification-card glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden relative group`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 100}ms`
              }}
            >
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-br ${cert.color} text-white`}>
                  {cert.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white/60 group-hover:text-white/90 transition-colors">
                    View Certificate <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;