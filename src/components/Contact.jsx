// ContactSection.jsx
import { FaEnvelope, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0a0a0a] text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">🌐 Let's Connect</h2>
        <p className="text-gray-400 mb-12">
          Whether you have a question, a project idea, or just want to say hi - I'd love to hear from you.
        </p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left"
        >
          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-purple-500 text-2xl" />
            <a
              href="mailto:youremail@example.com"
              className="hover:text-purple-400 transition-colors"
            >
              youremail@example.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-500 text-2xl" />
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              linkedin.com/in/yourusername
            </a>
          </div>

          {/* Telegram */}
          <div className="flex items-center space-x-4">
            <FaTelegram className="text-sky-400 text-2xl" />
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              t.me/yourusername
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-4">
            <FaGithub className="text-gray-300 text-2xl" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              github.com/yourusername
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Optional Message Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500">
            I typically respond within 12-24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
