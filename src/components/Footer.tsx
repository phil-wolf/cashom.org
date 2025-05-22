
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-primary transform rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-white transform -rotate-45"></div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary">CashoM</h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2024 CashoM. All rights reserved. Cannabis education for mindful consumption.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
