import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
              <a href="mailto:ashapiro@zoomtown.com" className="flex items-center space-x-2 hover:text-primary-glow transition-colors">
                <Mail size={14} />
                <span>ashapiro@zoomtown.com</span>
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
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Arnold G. Shapiro MD</h1>
              <p className="text-sm text-muted-foreground">Psychiatric Practice</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              About Dr. Shapiro
            </Link>
            <Link 
              to="/services" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/services' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/disorders" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/disorders' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Disorders
            </Link>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/contact' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/forms" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/forms' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Forms
            </Link>
            <Link 
              to="/patient-portal" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/patient-portal' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Patient Portal
            </Link>
            <Button 
              variant="default" 
              size="lg"
              className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium"
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
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
              <Link 
                to="/" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/' ? 'text-primary font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/about' ? 'text-primary font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Dr. Shapiro
              </Link>
              <Link 
                to="/services" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/services' ? 'text-primary font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/disorders" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/disorders' ? 'text-primary font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Disorders
              </Link>
              <Link 
                to="/contact" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/contact' ? 'text-primary font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/forms" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/forms' ? 'text-primary font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Forms
              </Link>
              <Link 
                to="/patient-portal" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${location.pathname === '/patient-portal' ? 'text-primary font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Patient Portal
              </Link>
              <Button 
                variant="default" 
                size="lg"
                className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium mt-4"
                asChild
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;