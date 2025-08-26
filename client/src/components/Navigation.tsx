import { Link, useLocation } from "wouter";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (href: string, sectionId?: string) => {
    setIsMenuOpen(false);
    if (sectionId && location === "/") {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    if (location === "/" && window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (
      path === "/blog" &&
      (location === "/blog" || location.startsWith("/blog/"))
    )
      return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              data-testid="logo-link"
              onClick={() => handleNavClick("/")}
            >
              Prayatna Bhattarai
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
              data-testid="nav-home"
              onClick={() => handleNavClick("/")}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <Link
              href="/blog"
              className={`transition-colors ${
                isActive("/blog")
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
              data-testid="nav-blog"
              onClick={() => handleNavClick("/blog")}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              data-testid="theme-toggle"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-400" />
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-slate-700 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                data-testid="mobile-nav-home"
                onClick={() => handleNavClick("/")}
              >
                Home
              </Link>
              <button
                onClick={() => {
                  handleNavClick("/", "about");
                  scrollToSection("about");
                }}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                data-testid="mobile-nav-blog"
                onClick={() => handleNavClick("/blog")}
              >
                Blog
              </Link>
              <button
                onClick={() => {
                  handleNavClick("/", "contact");
                  scrollToSection("contact");
                }}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
