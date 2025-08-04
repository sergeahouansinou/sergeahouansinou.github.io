import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Réalisations", path: "/portfolio" },
    { name: "Témoignages", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            DevFreelance.pro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActivePath(item.path)
                    ? "text-primary"
                    : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-gradient-primary">
              <Link to="/contact">Devis gratuit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActivePath(item.path)
                      ? "text-primary"
                      : "text-foreground/60"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-gradient-primary w-fit">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Devis gratuit
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;