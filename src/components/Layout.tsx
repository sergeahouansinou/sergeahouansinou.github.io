import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEOHead from "./SEOHead";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({ children, title, description, keywords }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title={title} description={description} keywords={keywords} />
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;