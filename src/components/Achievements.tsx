import { useState, useEffect, useRef } from "react";
import { Trophy } from "lucide-react";

const Achievements = () => {
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

  const achievements = [
    {
      title: "🏆 Winner – J.P. Morgan Code for Good 2025",
      description:
        "Built a full-stack platform in 24 hours for the Centre for Microfinance and Livelihood (CML), an initiative by Tata Trusts. Helped digitize tribal livelihood programs across Northeast India through dashboards, SMS alerts, donation flow, and real-time analytics. Recognized for technical excellence and social impact among 30+ teams.",
      icon: <Trophy className="w-14 h-14" />,
      color: "bg-green-500/10 text-green-500",
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
          <div className="inline-block px-4 py-2 text-base font-semibold rounded-full bg-green-500/10 text-green-500 mb-4 animate-fade-in">
            Hackathon Victory
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold">J.P. Morgan Code for Good 2025</h2>
          <p className="section-subtitle text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Highlighting my proudest professional milestone where technology met purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-panel rounded-2xl w-full max-w-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } hover:-translate-y-3`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className={`p-4 rounded-full ${achievement.color} inline-flex mb-6`}>{achievement.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;