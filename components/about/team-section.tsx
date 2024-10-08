"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Iheb Elazheri",
    role: "Leader & Dev Team Member",
    image: "/iheb.svg",
    linkedin: "https://www.linkedin.com/in/codetun/",
    github: "https://github.com/codeTun",
    portfolio: "https://digitaldreams.tn/",
  },
  {
    name: "Hamza Haj Mtir",
    role: "Assistant Leader & Dev Team Member",
    image: "/hamza.svg",
    linkedin: "https://www.linkedin.com/in/hamza-haj-mtir-3345a8220/",
    github: "https://github.com/HamzaHajMtir1",
    portfolio: "https://www.hamzahajmtir.tn/",
  },
  {
    name: "Taieb Ben Slama",
    role: "Dev Team Member",
    image: "/taieb.svg",
    linkedin: "https://www.linkedin.com/in/ben-slama-taieb-b4255b243/",
    github: "https://github.com/TaiebBS",
  },
  {
    name: "Hamis Maaroufi",
    role: "Dev Team Member",
    image: "/hamis.png",
    linkedin: "https://www.linkedin.com/in/hamis-maaroufi-314747307/",
    github: "https://github.com/Hamis1211",
  },
  {
    name: "Yassine Ahmed",
    role: "Dev Team Member",
    image: "/yassine.svg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Omar branci",
    role: "Dev Team Member",
    image: "/omar.svg",
    linkedin: "https://www.linkedin.com/in/mohamed-omar-branci-604765257",
    github: "https://github.com/OmarBranci",
  },
  {
    name: "Aziz Ferchichi",
    role: "Dev Team Member",
    image: "/aziz.svg",
    linkedin: "https://www.linkedin.com/in/aziz-ferchichi-499742218/",
    github: "https://github.com",
  },
  {
    name: "Youssef Bessioud",
    role: "Dev Team Member",
    image: "/youssef.svg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export function TeamSectionComponent() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Exceptional Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dedicated individuals working together to empower women in STEM and
            drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-cover object-cover"
                loading="lazy"
                quality={100}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
