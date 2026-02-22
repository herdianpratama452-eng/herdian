import { useEffect } from "react";
import { Linkedin, Github, Instagram, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/herdian-pratama-35625a364/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@herd1ann",
    icon: Instagram,
    url: "https://www.instagram.com/herd1ann?igsh=dWcwY3hqWs3OHgw",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Herdian",
    icon: Github,
    url: "https://github.com/herdianpratama452-eng",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({
      offset: 10,
      once: true, // Tambahkan ini agar animasi tidak berulang saat scroll
    });
  }, []);

  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const secondaryLinks = socialLinks.filter((link) => !link.isPrimary);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl border border-white/10">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Card */}
        {linkedIn && (
          <a
            href={linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${linkedIn.gradient}`}
            />

            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: linkedIn.color }}
                />
                <div className="relative p-2">
                  <linkedIn.icon
                    className="w-6 h-6 transition-all duration-500"
                    style={{ color: linkedIn.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {linkedIn.displayName}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300">
                  {linkedIn.subText}
                </span>
              </div>
            </div>

            <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
          </a>
        )}

        {/* Secondary Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                         bg-white/5 border border-white/10 overflow-hidden
                         hover:border-white/20 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg group-hover:scale-125 transition-all duration-500"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white truncate">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
