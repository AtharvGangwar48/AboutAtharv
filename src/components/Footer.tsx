import { Github, Instagram, Linkedin, Mail, Twitter, Unlink } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://linktr.ee/AtharvGangwar48"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Unlink size={24} />
            </a>
            <a
              href="https://github.com/AtharvGangwar48"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvgangwar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://unstop.com/u/athargan40228" // Replace with your actual Unstop link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Unlink size={24} />
            </a>
            <a
              href="mailto:atharvgangwar8@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://x.com/Atharv_48" // Assuming this is your Twitter handle
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/neonnirvana.9_11/"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Atharv Gangwar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
