
import { useState, useEffect, useRef } from "react";
import { Award, Medal, Trophy, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  const handleViewCertifications = () => {
    const certificationsSection = document.getElementById("certifications");
    if (certificationsSection) {
      certificationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    {
      title: "AWS Cloud Certified",
      description: "Achieved AWS Cloud Practitioner certification validating cloud expertise",
      icon: <Crown className="w-10 h-10" />,
      color: "bg-blue-500/10 text-blue-400",
    },
    {
      title: "RedHat Certified",
      description: "Recognized as a RedHat Certified Enterprise Application Developer",
      icon: <Award className="w-10 h-10" />,
      color: "bg-red-500/10 text-red-400",
    },
    {
      title: "Certified AI Specialist",
      description: "Completed Salesforce AI certification showcasing AI expertise",
      icon: <Trophy className="w-10 h-10" />,
      color: "bg-purple-500/10 text-purple-400",
    },
    {
      title: "Full Stack Excellence",
      description: "Achieved excellence in full stack development through certifications",
      icon: <Medal className="w-10 h-10" />,
      color: "bg-amber-500/10 text-amber-400",
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-15%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4 animate-fade-in">
            Accomplishments
          </div>
          <h2 className="section-title">My Achievements</h2>
          <p className="section-subtitle">
            Highlights of my professional journey and accomplishments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-panel rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className={`p-3 rounded-full ${achievement.color} inline-flex mb-4`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleViewCertifications}
            className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-300 bg-blue-600 hover:bg-blue-700 rounded-lg focus:shadow-outline focus:outline-none hover:scale-105 transform-gpu"
          >
            View My Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
