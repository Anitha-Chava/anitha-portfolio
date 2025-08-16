import { Github, Linkedin, Code, Award, FileDown } from 'lucide-react';

export default function ProfilesSection() {
  const profiles = [
    {
      platform: "GitHub",
      icon: <Github className="text-gray-800" size={24} />,
      url: "https://github.com/Anitha-Chava",
      stats: "10+ Projects",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="text-white" size={24} />,
      url: "https://linkedin.com/in/anitha-chava",
      stats: "500+ Connections",
      bgColor: "bg-blue-600",
      textColor: "text-white"
    },
    {
      platform: "LeetCode",
      icon: <Code className="text-yellow-500" size={24} />,
      url: "https://leetcode.com/anitha_chava",
      stats: "100+ Problems Solved",
      bgColor: "bg-gray-800",
      textColor: "text-yellow-500"
    },
    {
      platform: "HackerRank",
      icon: <Code className="text-green-500" size={24} />,
      url: "https://www.hackerrank.com/profile/anithachava4407",
      stats: "5+ Certificates",
      bgColor: "bg-gray-800",
      textColor: "text-green-500"
    },
    {
      platform: "Credly",
      icon: <Award className="text-orange-500" size={24} />,
      url: "https://www.credly.com/users/anitha-chava/badges",
      stats: "10+ Badges",
      bgColor: "bg-gray-100",
      textColor: "text-orange-500"
    }
  ];

  return (
    <section id="profiles" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Coding Profiles
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Connect with me on these platforms to see my coding activity and professional achievements
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${profile.bgColor} ${profile.textColor} p-6 rounded-lg flex flex-col items-center transition-all hover:scale-105 hover:shadow-lg`}
            >
              <div className="mb-4">{profile.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{profile.platform}</h3>
              <p className="text-sm opacity-80">{profile.stats}</p>
              <div className="mt-4 text-xs font-medium opacity-70 hover:opacity-100">
                Visit Profile →
              </div>
            </a>
          ))}
        </div>

        {/* Resume Download Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Looking for my resume?</p>
          <a
            href="/resume.pdf"
            download="Anitha_Chava_Resume.pdf"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
          >
            <FileDown className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
