import { BookOpen, Award, Code, Database, Server, Mail } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Deloitte Data Analysis Job Simulation",
      issuer: "Forage",
      date: "Jul 2025",
      icon: <Database className="text-blue-400" size={20} />,
      skills: ["Tableau", "Microsoft Excel"],
      verificationLink: "https://github.com/Anitha-Chava/Delloite-Data-Analysis-Job-Simulation"
    },
    {
      title: "Aspire Leaders Program",
      issuer: "Aspire Institute",
      date: "Aug 2024",
      icon: <Award className="text-pink-400" size={20} />,
      skills: ["Leadership", "Communication"]
    },
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL",
      date: "May 2024",
      icon: <Code className="text-green-400" size={20} />,
      skills: ["Python", "Seaborn", "Anaconda", "Problem Solving", "Collaborative Problem Solving", "Problem Analysis", "Analytical Skills"]
    },
    {
      title: "Effective Email Communication - Mastering the Basics",
      issuer: "Udemy",
      date: "Mar 2024",
      icon: <Mail className="text-yellow-400" size={20} />,
      skills: ["Email Etiquette"],
      verificationLink: "https://www.udemy.com/certificate/UC-38989951-b31f-4ee4-b974-b9fc0fe93049/"
    },
    {
      title: "Machine Learning with Python: A Practical Introduction",
      issuer: "edX",
      date: "Mar 2024",
      icon: <Database className="text-purple-400" size={20} />,
      skills: ["Machine Learning", "Python", "Analytical Skills"],
    },
    {
      title: "Python Basics for Data Science",
      issuer: "edX",
      date: "Mar 2024",
      icon: <Code className="text-orange-400" size={20} />,
      skills: ["Python (Programming Language)"]
    },
    {
      title: "Visualizing Data with Python",
      issuer: "edX",
      date: "Mar 2024",
      icon: <Database className="text-indigo-400" size={20} />,
      skills: ["Pyplot", "Pandas", "Folium", "Data Visualization"]
    },
    {
      title: "Problem Solving Through Programming in C",
      issuer: "NPTEL",
      date: "Oct 2023",
      icon: <Code className="text-red-400" size={20} />,
      skills: ["C (Programming Language)"]
    },
    {
      title: "Python for Beginners",
      issuer: "Infosys Springboard",
      date: "Sep 2023",
      icon: <BookOpen className="text-green-400" size={20} />,
      skills: ["Python (Programming Language)"]
    },
    {
      title: "Microsoft Excel - Excel from Beginner to Advanced",
      issuer: "Udemy",
      date: "Aug 2023",
      icon: <Database className="text-blue-500" size={20} />,
      skills: ["Microsoft Excel"],
      verificationLink: "https://www.udemy.com/certificate/UC-fd2d57d3-81fa-4fa8-89e8-458587a6fea6/"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "Aug 2023",
      icon: <Award className="text-cyan-400" size={20} />,
      skills: ["Communication"]
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and courses that validate my technical skills and knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-gray-700 rounded-lg mr-4">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Award className="mr-1" size={14} />
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.verificationLink && (
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 mt-3"
                  >
                    View Certification
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
