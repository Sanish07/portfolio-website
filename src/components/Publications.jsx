// components/Publications.jsx
import { FaExternalLinkAlt } from "react-icons/fa";

const publications = [
  {
    title: "Context-Aware Session Security using IP & Device Fingerprints",
    description:
      "Published in IEEE Xplore – This paper proposes a multi-factor session validation framework using IP-based and device-signature checks to mitigate session hijacking threats.",
    link: "https://ieeexplore.ieee.org/document/your-paper-id", // Replace with actual link
    date: "May 2025",
  },
  {
    title: "Secure Multi-Device Authentication for Web Applications",
    description:
      "Thesis exploring multi-device access control models and adaptive authentication layers for improved trust in web-based sessions.",
    link: "/documents/thesis.pdf", // Local link or Google Drive/other
    date: "March 2025",
  },
];

const Publications = () => {
  return (
    <section className="bg-[#131212] text-white py-20 px-4 md:px-10" id="publications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">📑 Publications</h2>
        <p className="text-center text-gray-400 mb-20">
          A list of my research contributions, published or in progress, in peer-reviewed journals, conferences, and platforms like IEEE.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 hover:shadow-[0_0_15px_#00A8CC] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#00A8CC] mb-2">{pub.title}</h3>
              <p className="text-sm text-white/80 mb-4">{pub.description}</p>
              <div className="flex justify-between items-center text-sm text-white/60">
                <span>{pub.date}</span>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#00A8CC] hover:underline"
                >
                  View <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
