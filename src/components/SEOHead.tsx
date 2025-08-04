import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "Développeur Freelance | Applications Web & Mobile Sur Mesure | Laravel, Flutter, React",
  description = "Développeur freelance expert en création d'applications web et mobile. Laravel, Flutter, React. Devis gratuit pour votre projet sur mesure. PME, start-ups, indépendants.",
  keywords = "développeur freelance, application mobile, développement web, Laravel, Flutter, React, application sur mesure, développeur indépendant, création app, développement sur-mesure",
  image = "/og-image.jpg",
  url = "https://devfreelance.pro",
  type = "website"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'DevFreelance.pro');
    setMetaTag('robots', 'index, follow');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'DevFreelance.pro', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // JSON-LD structured data for developer/freelancer
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "DevFreelance.pro",
      "jobTitle": "Développeur d'Applications Numériques Freelance",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/devfreelance",
        "https://linkedin.com/in/devfreelance"
      ],
      "knowsAbout": [
        "Développement Web",
        "Applications Mobile",
        "Laravel",
        "Flutter",
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js"
      ],
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement d'Applications Web et Mobile",
          "description": "Création d'applications sur mesure pour entreprises"
        }
      }
    };

    // Remove existing JSON-LD script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new JSON-LD script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;