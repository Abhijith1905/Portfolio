
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white p-4">
      <div className="glass-panel p-8 rounded-2xl shadow-lg max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold mb-6 text-gradient">404</h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        
        <p className="text-xl text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-lg focus:shadow-outline focus:outline-none hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
