import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Movie Booking System",
    description:
      "A microservices-based movie ticket booking platform. Integrated with RabbitMQ, Gateway, and Notification services.",
    techStack: ["Microservices", "Spring Cloud", "React"],
    github: "https://github.com/your-username/movie-booking",
    liveDemo: "https://bookmyshow-lite.netlify.app",
    image: "/images/projects/movie-booking.png",
  },
  {
    title: "URL Shortener Service",
    description:
      "A full-stack web application to shorten URLs with analytics tracking. Built using Spring Boot, React, and PostgreSQL.",
    techStack: ["Spring Boot", "React", "PostgreSQL"],
    github: "https://github.com/your-username/url-shortener",
    liveDemo: "https://shortify.app",
    image: "/images/projects/url-shortener.png",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#1f1e1e] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-400 mb-15">
          A few projects that showcase my skills, creativity, and approach to development.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#2a2a2a] text-sm px-3 py-1 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-[#38fdc9]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
