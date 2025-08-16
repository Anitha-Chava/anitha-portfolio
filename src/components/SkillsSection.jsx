export default function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "C++", level: 65 }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Bootstrap / Tailwind CSS", level: 90 }
      ]
    },
    {
      category: "Database & Tools",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", level: 75 },
        { name: "Azure", level: 70 },
        { name: "CI/CD (GitHub Actions, Jenkins)", level: 70 },
        { name: "Linux / Shell Scripting", level: 80 }
      ]
    },
    {
      category: "Data Science & AI",
      items: [
        { name: "Machine Learning (Scikit-learn, TensorFlow)", level: 70 },
        { name: "Pandas / NumPy", level: 85 },
        { name: "Data Visualization (Matplotlib, Seaborn, Power BI)", level: 75 },
        { name: "NLP (NLTK, SpaCy)", level: 70 }
      ]
    },
    {
      category: "Other Essential Skills",
      items: [
        { name: "Problem Solving & DSA", level: 85 },
        { name: "System Design Basics", level: 65 },
        { name: "Agile / Scrum", level: 70 },
        { name: "Communication & Collaboration", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
