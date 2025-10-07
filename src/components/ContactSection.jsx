import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lwqslb7",     // Replace with your EmailJS Service ID
        "template_iwpmzq3",    // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "qppCCN0JMO27ODxBN"      // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-blue-400">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-yellow-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-gray-200 font-medium">Email</h4>
                  <p className="text-gray-400">anithachava4407@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-yellow-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-gray-200 font-medium">Phone</h4>
                  <p className="text-gray-400">+91 8121463159</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-yellow-400 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-gray-200 font-medium">Location</h4>
                  <p className="text-gray-400">Ongole, India</p>
                </div>
              </div>
            </div>

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

          {/* Right side: Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
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

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
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

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
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

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium 
                           transition-colors w-full disabled:opacity-50"
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
