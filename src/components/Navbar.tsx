// Componente Navbar - Barra de navegación

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { NAV_LINKS } from '@utils/constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo solo visible cuando NO está en scroll */}
          {!isScrolled && (
            <div className="navbar-logo">
              <Logo variant="light" size="small" />
            </div>
          )}

          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="navbar-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="navbar-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-index-fixed);
          background-color: transparent;
          transition: all var(--transition-normal);
        }

        /* NAVBAR CON SCROLL - OSCURO Y SIN LOGO */
        .navbar-scrolled {
          background-color: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          max-width: var(--max-width-xl);
          margin: 0 auto;
          padding: var(--spacing-md) var(--spacing-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all var(--transition-normal);
        }

        /* Cuando está en scroll, centrar el menú */
        .navbar-scrolled .navbar-container {
          justify-content: center;
          padding: var(--spacing-sm) var(--spacing-lg);
        }

        .navbar-logo {
          max-width: 150px;
          transition: opacity var(--transition-fast);
        }

        .navbar-links {
          display: flex;
          list-style: none;
          gap: var(--spacing-2xl);
          margin: 0;
          padding: 0;
        }

        .navbar-link {
          color: white;
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-base);
          transition: all var(--transition-fast);
          padding: var(--spacing-sm) 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-accent);
          transition: width var(--transition-normal);
        }

        .navbar-link:hover {
          color: var(--color-accent);
        }

        .navbar-link:hover::after {
          width: 100%;
        }

        .navbar-mobile-toggle {
          display: none;
          font-size: var(--font-size-2xl);
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: var(--spacing-sm);
        }

        .navbar-mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }

          .navbar-mobile-toggle {
            display: block;
          }

          .navbar-container {
            justify-content: space-between;
          }

          .navbar-scrolled .navbar-container {
            justify-content: flex-end;
          }

          .navbar-mobile-menu {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: rgba(26, 26, 26, 0.98);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            padding: var(--spacing-lg);
            backdrop-filter: blur(10px);
          }

          .navbar-mobile-menu ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-md);
            margin: 0;
            padding: 0;
          }

          .navbar-mobile-menu a {
            display: block;
            padding: var(--spacing-md);
            color: white;
            font-weight: var(--font-weight-medium);
            border-radius: var(--radius-md);
            transition: all var(--transition-fast);
            text-transform: uppercase;
            letter-spacing: 1px;
            text-align: center;
          }

          .navbar-mobile-menu a:hover {
            background-color: rgba(255, 215, 0, 0.1);
            color: var(--color-accent);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
