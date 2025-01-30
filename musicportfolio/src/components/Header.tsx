import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full top-0 z-50 bg-gray-100/80 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Title */}
        <Link to="/" className="group">
          <h1 className="text-2xl font-bold font-playfair text-gray-800">
            Mariah Hernandez
            <span className="block text-lg font-light italic font-montserrat text-gray-600">
              Music for film
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/work" 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
          >
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link 
            to="/gallery" 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-100/95 backdrop-blur-sm text-center py-4 space-y-4 border-b border-gray-200">
          <Link 
            to="/work" 
            className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link 
            to="/gallery" 
            className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;