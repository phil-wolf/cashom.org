
import { Instagram, Facebook, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToCourses = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1">
            <button 
              onClick={handleHomeClick}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={scrollToCourses}
              className="text-foreground hover:text-primary transition-colors"
            >
              All Courses
            </button>
            <button 
              onClick={handleContactClick}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - Centered */}
          <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
            <img 
              src="/lovable-uploads/cdfc5b29-a363-40f3-a90f-3e4e147f1d88.png" 
              alt="CashoM Logo" 
              className="h-12 w-auto md:h-14" 
            />
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={handleHomeClick}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={scrollToCourses}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                All Courses
              </button>
              <button 
                onClick={handleContactClick}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 pt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
