import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* ✅ Background grid using CSS gradients (no grid.svg needed) */}
      <div
        className="absolute inset-0 bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Anitha Chava
              </span>
            </motion.h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              College Graduate | Full Stack Developer Intern
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate developer specializing in creating web applications and
              data solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right profile image */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                  <img
                    src="/profile.jpg" // replace with actual path
                    alt="Your Name"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAyYzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4LTgtMy41ODItOC04IDMuNTgyLTggOC04eiIgZmlsbD0iI2U1ZTVlNSIvPjwvc3ZnPg==';
                      e.target.className =
                        'w-full h-full flex items-center justify-center bg-gray-700';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
