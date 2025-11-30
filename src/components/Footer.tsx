import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Twitter, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <BookOpen className="h-10 w-10 text-primary-400" />
                <div className="absolute -inset-1 bg-primary-400/20 rounded-lg blur-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold">{siteConfig.title}</span>
                <span className="text-sm text-secondary-400 font-medium">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.twitter}
                className="p-3 bg-secondary-800 hover:bg-primary-600 text-secondary-400 hover:text-white rounded-lg transition-all duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="p-3 bg-secondary-800 hover:bg-primary-600 text-secondary-400 hover:text-white rounded-lg transition-all duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="p-3 bg-secondary-800 hover:bg-primary-600 text-secondary-400 hover:text-white rounded-lg transition-all duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-400 hover:text-primary-400 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-secondary-400 hover:text-primary-400 transition-colors font-medium">
                  All Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-400 hover:text-primary-400 transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-400 hover:text-primary-400 transition-colors font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-secondary-400 hover:text-primary-400 transition-colors font-medium">
                  Search Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-secondary-400 hover:text-primary-400 transition-colors flex items-center space-x-2 font-medium group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>Get in Touch</span>
                </a>
              </li>
              <li>
                <span className="text-secondary-400 font-medium">
                  Editorial Team
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.title}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-secondary-500 text-sm">
                Built with precision and care
              </span>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;