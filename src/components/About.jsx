import React from "react";
import { FaArrowRight } from "react-icons/fa";

const categorizedSkills = {
  Backend: [
    { name: "Java", icon: "/icons/java-icon.png" },
    { name: "Spring Framework", icon: "/icons/spring-icon.png" },
    { name: "Spring Boot", icon: "/icons/spring-boot-icon.png" },
    { name: "REST APIs", icon: "/icons/rest-api-icon.png" },
    { name: "Unit Testing", icon: "/icons/junit5-icon.png" },
    { name: "RabbitMQ", icon: "/icons/rabbitmq-icon.png" },
  ],
  Frontend: [
    { name: "React & Redux", icon: "/icons/react-icon.png" },
    { name: "Material UI", icon: "/icons/materialui.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "HTML", icon: "/icons/html5-icon.png" },
    { name: "CSS", icon: "/icons/css3.png" },
  ],
  Databases: [
    { name: "MySQL", icon: "/icons/mysql.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
  ],
  Tools: [
    { name: "Git", icon: "/icons/git.png" },
    { name: "GitHub", icon: "/icons/github.png" },
    { name: "Postman", icon: "/icons/postman.png" },
    { name: "Maven", icon: "/icons/maven.png" },
    { name: "Docker", icon: "/icons/docker.png" },
    { name: "Linux", icon: "/icons/linux.png" },
  ],
};



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
              All of my applications source code is publicly available on <a href="https://github.com/Sanish07" target="_blank" rel="noopener noreferrer" className="text-[#FFC947] font-bold hover:underline">GitHub</a>. 
              If you are seeking further learning materials or or code snippets, please do not hesitate to contact me via{" "}
              <a href="https://t.me/sanishp1" target="_blank" rel="noopener noreferrer" className="text-[#FFC947] font-bold hover:underline">Telegram</a> or{" "}
              <a href="https://www.linkedin.com/in/sanish-nirwan" target="_blank" rel="noopener noreferrer" className="text-[#FFC947] font-bold hover:underline">LinkedIn</a>. 
              I welcome the opportunity to collaborate with fellow developers.
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
            {Object.entries(categorizedSkills).map(([category, skills]) => (
              <div key={category} className="mb-6">
                <h4 className="text-white text-lg font-semibold mb-2">{category}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="w-full min-w-[150px] h-12 bg-[#1a1a1a] rounded-md flex items-center justify-center gap-2 hover:bg-[#2a2a2a] transition text-white px-2 text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-5 h-5 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
