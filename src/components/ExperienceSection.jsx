import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      position: "Full Stack Developer Intern",
      company: "SmartBridge Educational Services Pvt Ltd",
      period: "May 2025 - July 2025",
      description: [
        "Developed web applications using MERN stack",
        "Implemented responsive UIs with React",
        "Built RESTful APIs with Node.js",
        "Collaborated in agile development teams"
      ],
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      position: "Technology Apprentice",
      company: "TCS iON Carrer Edge Platform",
      period: "2023",
      description: [
        "Enhances employability and workplace readiness.",
        "Builds confidence in interviews and professional communication.",
        "GProvides TCS-certified recognition, which is valued by recruiters.",
        "Business etiquette and career guidance"
      ],
      skills: ["JavaScript", "Git", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 relative pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-500/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800"></div>
              
              <div className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">{exp.position}</h3>
                    <div className="flex items-center text-gray-300 mb-2">
                      <Briefcase size={16} className="mr-2 text-yellow-400" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}