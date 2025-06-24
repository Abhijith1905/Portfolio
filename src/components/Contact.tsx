import { useState } from "react";
import { Mail, Phone, User, FileText, Linkedin, Github, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


    const serviceId = "service_8af88cq";
    const templateId = "template_c0jms0p";
    const userId = "VBi4WWpDS-H_K9bML";


    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
          variant: "default",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, (error) => {
        console.log("FAILED...", error);
        setIsSubmitting(false);
        toast({
          title: "Error sending message",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl -z-10 opacity-60"></div>

      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4">
            Get In Touch
          </div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Interested in working together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="glass-panel p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Send Me A Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white transition-all duration-200"
                  placeholder="your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white transition-all duration-200"
                  placeholder="your email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white transition-all duration-200"
                  placeholder="subject"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800/50 text-white transition-all duration-200 resize-none"
                  placeholder="your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 rounded-lg focus:shadow-outline focus:outline-none ${
                  isSubmitting 
                    ? "bg-blue-600/50 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="glass-panel p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/20 text-blue-400 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Email
                  </h4>
                  <a 
                    href="mailto:abhijithkora1905@gmail.com" 
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    abhijithkora1905@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/20 text-blue-400 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Phone
                  </h4>
                  <a 
                    href="tel:+919059640008" 
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    +91 93925 30625
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/20 text-blue-400 p-3 rounded-full">
                  <User className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Age
                  </h4>
                  <p className="text-lg">
                    20 Years
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-blue-500/20 text-blue-400 p-3 rounded-full">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Full Address
                  </h4>
                  <p className="text-lg">
                    Tadepalligudem, West Godavari District, 534101, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-bold mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abhijithkora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-blue-400 hover:bg-gray-700 transition-colors hover:-translate-y-1 transform duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Abhijith1905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-blue-400 hover:bg-gray-700 transition-colors hover:-translate-y-1 transform duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;