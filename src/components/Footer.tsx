import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Serge AHOUANSINOU</h3>
            <p className="text-xs text-muted-foreground mb-1">DevFreelance.pro</p>
            <p className="text-sm text-muted-foreground">
              Développeur freelance spécialisé dans la création d'applications web et mobile sur mesure.
              Laravel, Flutter, React - Solutions digitales innovantes pour votre entreprise.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Réalisations</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Développement Web Laravel</li>
              <li className="text-muted-foreground">Applications Mobile Flutter</li>
              <li className="text-muted-foreground">Applications React/Next.js</li>
              <li className="text-muted-foreground">Maintenance & Support</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground">contact@devfreelance.pro</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground">+33 6 12 34 56 78</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Serge AHOUANSINOU - DevFreelance.pro - Développeur d'applications numériques freelance. 
            Tous droits réservés. | <Link to="/legal" className="hover:text-primary transition-colors">Mentions légales</Link> | <Link to="/privacy" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;