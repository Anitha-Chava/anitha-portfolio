import { Github, ExternalLink, Code, Database, Globe, Brain, Terminal, Monitor } from 'lucide-react';

export default function ProjectsSection() {
  // Helper: Pick an icon per project (based on tech stack or domain)
  const getProjectIcon = (name) => {
    if (name.toLowerCase().includes("image") || name.toLowerCase().includes("ai")) return <Brain size={48} className="text-purple-400" />;
    if (name.toLowerCase().includes("travel") || name.toLowerCase().includes("website")) return <Globe size={48} className="text-blue-400" />;
    if (name.toLowerCase().includes("learn")) return <Monitor size={48} className="text-green-400" />;
    if (name.toLowerCase().includes("assistant") || name.toLowerCase().includes("voice")) return <Terminal size={48} className="text-yellow-400" />;
    if (name.toLowerCase().includes("analysis") || name.toLowerCase().includes("data")) return <Database size={48} className="text-teal-400" />;
    return <Code size={48} className="text-gray-400" />;
  };

  // Categorized projects
  const projectCategories = [
    {
      title: "🌐 Full-Stack Projects",
      icon: <Code className="mr-2" />,
      projects: [
        {
          name: "Text-to-Image Generator SaaS",
          description: "AI-powered platform for generating images from text prompts",
          technologies: ["React", "Node.js", "AI/ML", "Stripe"],
          githubUrl: "https://github.com/Anitha-Chava/Full-Stack-Text-to-Image-Generator-SaaS-React-App",
          demoUrl: "https://text-to-image-generator-saas-reactapp.netlify.app/"
        },
        {
          name: "GenZ Travels Website",
          description: "Modern travel website with interactive UI and booking system",
          technologies: ["HTML5", "CSS3", "JavaScript"],
          githubUrl: "https://github.com/Anitha-Chava/Gen-Z-Travels-Website-Using-HTML-CSS",
          demoUrl: "https://genztravels.netlify.app/"
        },
        {
          name: "LearnHub Platform",
          description: "Comprehensive educational platform with course management and progress tracking",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          githubUrl: "https://github.com/Anitha-Chava/Learnhub-your-center-for-skill-enhancement",
        }
      ]
    },
    {
      title: "🐍 Python Projects",
      icon: <Terminal className="mr-2" />,
      projects: [
        {
          name: "Voice Activated Personal Assistant",
          description: "Handles tasks like web searches, PDF reading, and Arduino integration",
          technologies: ["Python", "Speech Recognition", "Arduino"],
          githubUrl: "https://github.com/Anitha-Chava/Voice-Activated-Personal-Assistant-with-Arduino-Integration",
        },
        {
          name: "Movie Sentiment Analysis",
          description: "Classifies movie reviews as positive or negative using NLP",
          technologies: ["Python", "NLTK", "Scikit-learn"],
          githubUrl: "https://github.com/Anitha-Chava/MovieSentimentAnalysis",
        },
        {
          name: "Ludo Game",
          description: "Python implementation of the classic board game",
          technologies: ["Python", "Pygame"],
          githubUrl: "https://github.com/Anitha-Chava/Ludo-Game-Using-Python",
        }
      ]
    },
    {
      title: "📊 Data Science Projects",
      icon: <Database className="mr-2" />,
      projects: [
        {
          name: "Deloitte Data Analysis Simulation",
          description: "Job simulation project analyzing business data",
          technologies: ["Python", "Pandas", "Data Analysis"],
          githubUrl: "https://github.com/Anitha-Chava/Delloite-Data-Analysis-Job-Simulation",
        },
        {
          name: "Voice Activated Weather Forecast",
          description: "Fetches real-time weather data using voice commands",
          technologies: ["Python", "API Integration", "Speech Recognition"],
          githubUrl: "https://github.com/Anitha-Chava/Voice-Activated-Weather-Forecast-in-Python",
        },
        {
          name: "Text-to-Speech Converter",
          description: "Converts text input into speech output",
          technologies: ["Python", "pyttsx3"],
          githubUrl: "https://github.com/Anitha-Chava/Text-to-Speech-in-Python",
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Organized by domain - full-stack web applications, Python programming, and data science projects
          </p>
        </div>

        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-200">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <div 
                    key={projectIndex}
                    className="bg-gray-700/50 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-600"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                      {getProjectIcon(project.name)}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.name}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a 
                          href={project.githubUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-white"
                        >
                          <Github size={16} className="mr-1" /> Code
                        </a>
                        {project.demoUrl && (
                          <a 
                            href={project.demoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-300 hover:text-white"
                          >
                            <ExternalLink size={16} className="mr-1" /> Live Demo
                          </a>
                        )}
                      </div>
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
