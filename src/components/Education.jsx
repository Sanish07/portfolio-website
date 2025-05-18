// components/EducationTimeline.jsx
import React from "react";

const educationData = [
  {
    year: "2022",
    title: "Master's Degree",
    subtitle: "Your University Name",
    description: "Specialized in Software Engineering, focused on distributed systems, cloud computing, and security.",
  },
  {
    year: "2019",
    title: "Bachelor's Degree",
    subtitle: "Your College Name",
    description: "Studied Computer Science with core subjects like Data Structures, Web Development, and Databases.",
  },
  {
    year: "2017",
    title: "Higher Secondary Education",
    subtitle: "Your School Name",
    description: "Completed 12th Grade in Science stream with focus on Mathematics and Computer Science.",
  },
];

const EducationTimeline = () => {
  return (
    <section className="bg-[#0e0e0e] py-16 px-4 md:px-20 text-white" id="education">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">🎓 Education</h2>
        <p className="text-center text-gray-400 mb-20">
          My academic journey, highlighting the foundations that shaped my skills and career in technology.
        </p>
      <div className="relative border-l-2 border-purple-500 ml-4 md:ml-8">
        {educationData.map((item, index) => (
          <div key={index} className="mb-10 ml-6 group">
            <span className="absolute -left-3 top-1 w-6 h-6 bg-purple-600 rounded-full border-4 border-[#0f0f0f] group-hover:scale-125 transition-transform"></span>
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md group-hover:shadow-purple-500/50 transition-shadow duration-300">
              <p className="text-sm text-purple-400 font-semibold">{item.year}</p>
              <h3 className="text-lg font-bold mt-1">{item.title}</h3>
              <h4 className="text-md text-gray-300">{item.subtitle}</h4>
              <p className="text-sm mt-2 text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
