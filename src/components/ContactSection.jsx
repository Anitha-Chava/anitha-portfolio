import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission (calls Vercel serverless function)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await resp.json();

      if (resp.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Server error:", data);
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-blue-400">Get In Touch</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <Mail className="text-yellow-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-gray-200 font-medium">Email</h4>
                  <p className="text-gray-400">anithachava4407@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="text-yellow-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-gray-200 font-medium">Phone</h4>
                  <p className="text-gray-400">+91 8121463159</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <MapPin className="text-yellow-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-gray-200 font-medium">Location</h4>
                  <p className="text-gray-400">Ongole, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-gray-200 font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/anitha-chava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Anitha-Chava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded-md font-medium w-full transition-colors ${
                  loading
                    ? "bg-blue-500 opacity-70 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
