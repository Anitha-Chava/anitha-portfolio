import { Github, Linkedin, Twitter, Codepen, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/Anitha-Chava",
      name: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/anitha-chava",
      name: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:anithachava4407@gmail.com",
      name: "Email",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Anitha Chava. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`text-gray-500 transition-colors ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            Built with React, Tailwind CSS, and ❤️ By Anitha Chava
          </p>
        </div>
      </div>
    </footer>
  );
}