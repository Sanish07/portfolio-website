import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full mt-10 flex flex-col items-center justify-center bg-cover bg-center px-4 py-20 text-white"
      style={{
        backgroundImage: `url(/images/hero-bg.jpg)`,
      }}
    >
      {/* Backdrop container for everything inside */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between 
      gap-12 bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-8 md:px-12 md:py-20 lg:py-45 rounded-3xl shadow-xl">
        
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Hey, I’m <span className="text-[#2A004E]">Sanish!</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            A Frontend Web Developer crafting immersive digital experiences.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <a
              href="#projects"
              className="inline-block px-6 py-3 text-white font-semibold rounded-full border-2 border-[#2A004E] hover:bg-[#2A004E] hover:shadow-[0_0_15px_#500073] transition duration-300">
              View Projects
            </a>
            <a
              className="inline-block px-6 py-3 text-white font-semibold rounded-full border-2 border-[#80C4E9] hover:bg-[#80C4E9] hover:shadow-[0_0_15px_#5ce2fa] transition duration-300 cursor-pointer">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Social Icons */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <div className="flex flex-row lg:flex-col items-center gap-6 text-3xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#2A004E] transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#2A004E] transition-colors duration-300" />
            </a>
            <a href="mailto:you@example.com">
              <FaEnvelope className="hover:text-[#2A004E] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      <ScrollIndicator/>
    </section>
  );
};

export default HeroSection;
