
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">
              All Courses
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary transform rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-white transform -rotate-45"></div>
            </div>
            <h1 className="text-2xl font-serif font-bold text-primary">CashoM</h1>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
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
      </div>
    </header>
  );
};

export default Header;
