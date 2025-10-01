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
  title = "Mobile Developer & Web Developer | Expert Freelance | Laravel, Flutter, React",
  description = "Professional mobile developer and web developer freelance. Expert in iOS, Android, and web applications. Laravel, Flutter, React. Custom solutions for businesses and startups.",
  keywords = "mobile developer, web developer, mobile app developer, web application developer, freelance developer, iOS developer, Android developer, Flutter developer, React developer, Laravel developer, custom app development, application development",
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
      "name": "Serge AHOUANSINOU - DevFreelance.pro",
      "jobTitle": "Développeur d'Applications Numériques Freelance",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/devfreelance",
        "https://linkedin.com/in/devfreelance"
      ],
      "knowsAbout": [
        "Mobile Development",
        "Web Development",
        "Mobile App Developer",
        "Web Application Developer",
        "iOS Development",
        "Android Development",
        "Laravel",
        "Flutter",
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Full Stack Development"
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