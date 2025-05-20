// Footer.jsx
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaBasketballBall,
  FaTelegram
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0a0a0a] to-[#161616] text-white px-6 md:px-20 pt-16 pb-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left: Bio */}
        <div>
          <h3 className="text-xl font-bold mb-2">Sanish Nirwan</h3>
          <p className="text-gray-400 leading-relaxed">
            A passionate Full Stack Java Developer building modern web applications and systems
            that solve real-world problems and elevate digital experiences.
          </p>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col md:items-end space-y-4">
          <h4 className="text-lg font-semibold">Social</h4>
          <div className="flex space-x-4 text-gray-400">
            <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-[#0072b1] transition-colors" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-100 transition-colors" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://t.me/sanishp1" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-xl hover:text-[#24A1DE] transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © Copyright {new Date().getFullYear()} · Made by{" "}
        <a href="#home" className="underline hover:text-white font-medium">
          Sanish Nirwan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
