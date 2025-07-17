import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-primary-foreground text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:859-341-7453" className="flex items-center space-x-2 hover:text-primary-glow transition-colors">
                <Phone size={14} />
                <span>(859) 341-7453</span>
              </a>
              <a href="mailto:contact@arnoldshapiromd.com" className="flex items-center space-x-2 hover:text-primary-glow transition-colors">
                <Mail size={14} />
                <span>contact@arnoldshapiromd.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <MapPin size={14} />
              <span>Cincinnati, OH & Fort Wright, KY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Arnold G. Shapiro, MD</h1>
              <p className="text-sm text-muted-foreground">Psychiatric Practice</p>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About Dr. Shapiro
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </a>
            <a 
              href="#approach" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Our Approach
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              size="lg"
              className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                About Dr. Shapiro
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Services
              </a>
              <a 
                href="#approach" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Our Approach
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
              <Button 
                variant="default" 
                size="lg"
                className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium mt-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;