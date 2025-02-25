import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSoftSkillsOpen, setIsSoftSkillsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const weeks = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Atharv Gangwar</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
              } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive('/projects') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
              } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={`${
                isActive('/skills') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
              } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Skills
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsSoftSkillsOpen(!isSoftSkillsOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Soft Skills
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isSoftSkillsOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/softskills/overview"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      onClick={() => setIsSoftSkillsOpen(false)}
                    >
                      Overview
                    </Link>
                    {weeks.map((week) => (
                      <Link
                        key={week}
                        to={`/softskills/week${week}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        onClick={() => setIsSoftSkillsOpen(false)}
                      >
                        Week {week}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
              } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive('/projects') ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={`${
                isActive('/skills') ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsSoftSkillsOpen(!isSoftSkillsOpen)}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-md"
              >
                Soft Skills
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isSoftSkillsOpen && (
                <div className="pl-4">
                  <Link
                    to="/softskills/overview"
                    className="block px-3 py-2 text-base text-gray-700 hover:bg-indigo-50 rounded-md"
                    onClick={() => {
                      setIsOpen(false);
                      setIsSoftSkillsOpen(false);
                    }}
                  >
                    Overview
                  </Link>
                  {weeks.map((week) => (
                    <Link
                      key={week}
                      to={`/softskills/week${week}`}
                      className="block px-3 py-2 text-base text-gray-700 hover:bg-indigo-50 rounded-md"
                      onClick={() => {
                        setIsOpen(false);
                        setIsSoftSkillsOpen(false);
                      }}
                    >
                      Week {week}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
