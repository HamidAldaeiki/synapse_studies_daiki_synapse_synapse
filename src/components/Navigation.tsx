import React, { useState } from "react";
import { Brain, FileText, BookOpen, Code, Award, Users } from "lucide-react";

type NavigationProps = {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
};

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "الرئيسية", icon: Brain },
    { id: "cv", label: "السيرة الذاتية", icon: FileText },
    { id: "publications", label: "الأبحاث", icon: BookOpen },
    { id: "projects", label: "المشاريع", icon: Code },
    { id: "studies", label: "الدراسات", icon: Award },
    { id: "services", label: "الخدمات", icon: Users },
    { id: "about", label: "من نحن", icon: Brain }
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage("home")}>
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Synapse Studies</span>
          </div>

          <div className="hidden md:flex gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-right px-4 py-3 text-sm ${
                currentPage === item.id ? "bg-blue-600 text-white" : "text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
