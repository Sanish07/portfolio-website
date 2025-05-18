import React from "react";
import { FaArrowRight } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: "/icons/html5-icon.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "WordPress", icon: "/icons/wordpress.png" },
  { name: "PHP", icon: "/icons/php.png" },
  { name: "SASS", icon: "/icons/sass.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "Responsive Design", icon: "/icons/responsive.png" },
  { name: "SEO", icon: "/icons/seo.png" },
  { name: "Terminal", icon: "/icons/terminal.png" },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-gray-400 mb-10">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Left Side */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-bold text-white">Get to know me!</h3>
            <p className="text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-white">Full Stack Web Developer</span> passionate about building complete web solutions — from intuitive UIs to robust backend systems.
                I enjoy creating dynamic applications that are both functional and visually appealing.
            </p>
            <p className="text-gray-300 leading-relaxed">
                Though I’m a <span className="font-semibold text-white">fresher</span>, I’ve built several projects using technologies like React, Spring Boot, MySQL, and REST APIs.
                I constantly strive to improve my skills and explore new technologies that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
                I love learning in public and sharing resources and code snippets on platforms like{" "}
                <a href="https://t.me/yourtelegram" className="text-[#FFC947] font-bold hover:underline">Telegram</a> and{" "}
                <a href="https://linkedin.com/in/yourusername" className="text-[#FFC947] font-bold hover:underline">LinkedIn</a>. 
                I’m always up for collaborating with like-minded developers and learning from the community.
            </p>
            <p className="text-gray-300 leading-relaxed">
                I'm open to <span className="font-semibold text-white">entry-level roles</span> where I can contribute, grow, and add value to real-world projects. If you’re looking for a motivated and curious developer to join your team, feel free to <span className="font-semibold text-white">contact</span> me.
            </p>

            <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-[#FFC947] text-[#0A1931] font-bold rounded-full hover:shadow-[0_0_12px_#FFC947] transition"
            >
                Contact <FaArrowRight className="ml-1" />
            </a>
        </div>


          {/* Right Side - Skills Section */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4 text-white">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-md hover:bg-[#2a2a2a] transition"
                >
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
