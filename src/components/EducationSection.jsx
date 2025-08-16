import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      specialization: "Data Science",
      institution: "RISE Krishna Sai Gandhi Group of Institutions",
      period: "2022 - 2026",
      score: "8.9 CGPA",
      description: "Specialized in Data Science with coursework in machine learning, data structures, algorithms, and database systems."
    },
    {
      degree: "Intermediate (12th Grade)",
      specialization: "MPC",
      institution: "Sri Saraswathi Junior College",
      period: "2020 - 2022",
      score: "94.7%",
      description: "Focus on Mathematics, Physics, and Chemistry with strong foundation in analytical thinking."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 relative pl-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-500/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium mb-2">{edu.specialization}</p>
                    <div className="flex items-center text-gray-300 mb-2">
                      <GraduationCap size={16} className="mr-2 text-yellow-400" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span className="mr-3">{edu.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {edu.score}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}