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
            Hey, I’m <span className="text-[#2E0249]">Sanish!</span>
          </h1>
          <p className="text-md md:text-lg md:px-35 text-white/80 mb-6">
            A Full Stack Java Developer specializing in scalable backend systems and modern frontend interfaces.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <a
              href="#projects"
              className="inline-block px-6 py-3 text-white font-semibold rounded-full border-2 border-[#129990] hover:bg-[#129990] hover:shadow-[0_0_15px_#7AE2CF] transition duration-300">
              View Projects
            </a>
            <a
              href="https://drive.google.com/drive/folders/1dSlTGbxfz3Fw79_gcYvSVuGemgb0mEpu?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white font-semibold rounded-full border-2 border-[#F3C623] hover:text-[#222831] hover:bg-[#F3C623] hover:shadow-[0_0_15px_#F7AD45] transition duration-300 cursor-pointer">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Social Icons */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <div className="flex flex-row lg:flex-col items-center gap-6 text-3xl">
            <a href="https://github.com/Sanish07" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#000000] transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sanish-nirwan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#0072b1] transition-colors duration-300" />
            </a>
            <a href="mailto:sanishnirwan07@gmail.com">
              <FaEnvelope className="hover:text-[#5409DA] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      <ScrollIndicator/>
    </section>
  );
};

export default HeroSection;
