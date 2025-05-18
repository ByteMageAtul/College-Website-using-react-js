import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

<FontAwesomeIcon icon={faFacebookF} />

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10" >
        {/* Logo & Description */}
        
        <div>
          <h2 className="text-2xl font-bold mb-4">University of Cambridge</h2>
          <p className="text-gray-400 text-sm">
            A world-leading university committed to excellence in education, research, and innovation since 1209.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/professors" className="hover:underline">Professors</a></li>
            <li><a href="/research" className="hover:underline">Research</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK</li>
            <li>📞 +44 (0)1223 337733</li>
            <li>✉️ info@cam.ac.uk</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 mt-2">
  <a href="https://www.facebook.com/cambridge.university" className="hover:text-blue-400 transition-colors">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="#" className="hover:text-blue-300 transition-colors">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="#" className="hover:text-pink-400 transition-colors">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="#" className="hover:text-blue-500 transition-colors">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>

      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} University of Cambridge. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
