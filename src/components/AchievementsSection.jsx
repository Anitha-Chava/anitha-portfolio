import { Trophy, Award, Star, Users } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Open Source Contributor - 2025",
      description: "Currently contributing to various open source projects, enhancing skills and community engagement at GirlScript Summer of Code.",
      year: "2025"  
    },
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "Academic Topper of the Year - 2023",
      description: "Received for maintaining top grades throughout the academic program",
      year: "2023"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "5 Star Rating on Python Programming in HackerRank",
      description: "For achieving the highest level in Python challenges,",
      year: "2024"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Certified in Leadership Organization Course from Aspire Institute",
      description: "For organizing successful completing course and workshops",
      year: "2024"
    }
  ];

  const stats = [
    { value: "5+", label: "Projects Completed" },
    { value: "8.9", label: "CGPA" },
    { value: "10+", label: "Certifications" },
    { value: "2", label: "Awards Won" }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700 transition-colors hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-600/50 rounded-full mr-4">
                  {achievement.icon}
                </div>
                <span className="text-sm font-medium text-gray-400">{achievement.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-700/30 p-6 rounded-lg text-center border border-gray-600/50"
            >
              <div className={`text-4xl font-bold mb-2 ${
                index % 4 === 0 ? "text-blue-400" : 
                index % 4 === 1 ? "text-purple-400" : 
                index % 4 === 2 ? "text-yellow-400" : "text-green-400"
              }`}>
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}