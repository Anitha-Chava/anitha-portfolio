import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Centered Professional Summary */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-700/30 p-8 rounded-xl border border-gray-600/50"
          >
            <h3 className="text-2xl font-semibold text-center text-blue-400 mb-6">
              Professional Summary
            </h3>
            
            <div className="space-y-4 text-center">
              <p className="text-gray-300 leading-relaxed">
                Passionate Computer Science Engineering student specializing in Data Science with 
                expertise in full-stack development and machine learning. Currently maintaining an 
                8.8 CGPA while actively contributing to innovative projects and internships.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Skilled in React.js, Node.js, Python, and data analysis tools. Strong foundation in 
                algorithms, database systems, and software engineering principles. Committed to 
                continuous learning and applying cutting-edge technologies to solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Personal Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {[
              { 
                label: "Name", 
                value: "Anitha Chava",
                icon: "👩‍💻"
              },
              { 
                label: "Email", 
                value: "anithachava4407",
                icon: "✉️"
              },
              { 
                label: "Degree", 
                value: "B.Tech CSE (Data Science)",
                icon: "🎓"
              },
              { 
                label: "Location", 
                value: "Ongole, India",
                icon: "📍"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-medium text-blue-400">{item.label}</h4>
                <p className="text-gray-300 mt-1">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}