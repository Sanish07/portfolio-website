import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Movie Booking System",
    description:
      "A microservices-based movie ticket booking platform. Integrated with RabbitMQ, API Gateway, Docker for Infrastructure and Notification services.",
    techStack: ["Microservices","Spring Cloud","Spring Boot","RabbitMQ","Docker","Mailhog","PostgreSQL"],
    github: "https://github.com/Sanish07/movie-booking-backend",
    liveDemo: "",
    image: "/images/projects/movie-booking.jpg",
  },
  {
    title: "URL Shortener Service",
    description:
      "A full-stack web application to shorten URLs with analytics tracking. Built using Spring Boot, React, and PostgreSQL.",
    techStack: ["Spring Boot","Spring Security","PostgreSQL","React","Tailwind CSS","Cloud Deployment"],
    github: "https://github.com/Sanish07/linkspark-backend",
    liveDemo: "https://linkspark.netlify.app/",
    image: "/images/projects/url-shortener.png",
  },
  {
    title: "E-commerce Application",
    description:
      "Developed the frontend of an e-commerce web application using React, Redux, and Material UI, integrating it with a pre-built backend.",
    techStack: ["Spring Boot","MySQL","React","Redux","Material UI"],
    github: "https://github.com/Sanish07/upgrad-eshop-application",
    liveDemo: "",
    image: "/images/projects/ecommerce.jpg",
  },
  {
    title: "AI Utilities Platform",
    description:
      "An AI & Data Science Tools Suite platform developed with various NPM libraries for tools, organized into a cohesive and user-friendly interface.",
    techStack: ["React","Third-Party Library Integration","SASS","Bootstrap","HTML","CSS"],
    github: "https://github.com/Sanish07/handy-tools",
    liveDemo: "https://sanish07.github.io/handy-tools",
    image: "/images/projects/ai-utilities.jpg",
  },
  {
    title: "Photo Search Platform",
    description:
      "A dynamic photo search application that allows users to search and explore high-quality images using the Unsplash API.",
    techStack: ["React","Third-Party API Integration","Deployment"],
    github: "https://github.com/Sanish07/Unsplash_Photo_Search_CipherSchools",
    liveDemo: "https://photosearchreact.netlify.app",
    image: "/images/projects/photo-search.jpg",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#1f1e1e] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">🏗️ Projects</h2>
        <p className="text-center text-gray-400 mb-15">
          A few projects that showcase my skills, creativity, and approach to development.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02] hover:shadow-[0_0_15px_#07DA63] duration-300"
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
                <div className="flex items-center gap-6 text-[#07DA63]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FaGithub /> Code
                  </a>
                  {
                  (project.liveDemo.length !== 0) ? 
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                    : 
                      <a
                      className="flex items-center gap-2 hover:underline text-[#4b4e53]"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    }
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
