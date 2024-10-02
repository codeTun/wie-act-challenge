'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Github } from 'lucide-react'

const teamMembers = [
{
    name: "Iheb Elazheri",
    role: "Founder & CEO",
    image: "/iheb.jpg",
    linkedin: "https://www.linkedin.com/in/codetun/",
    github: "https://github.com/codeTun"
  },
  {
    name: "Hamza Haj Mtir",
    role: "CTO",
    image: "/hamza.jpg",
    linkedin: "https://www.linkedin.com/in/hamza-haj-mtir-3345a8220/",
    github: "https://github.com/HamzaHajMtir1"
  },
  {
    name: "Taieb Ben Slama",
    role: "Head of Education",
    image: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Hamis Maaroufi",
    role: "Community Manager",
    image: "/hamis.png?height=400&width=400",
    linkedin: "https://linkedin.com",
    github: "https://github.com/Hamis1211"
  },
  {
    name: "Yassine",
    role: "UX/UI Lead",
    image: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Omar branci",
    role: "Data Science Expert",
    image: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Aziz Ferchichi",
    role: "AR/VR Specialist",
    image: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Youssef Bessioud",
    role: "Cybersecurity Lead",
    image: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
]

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
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Exceptional Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dedicated individuals working together to empower women in STEM and drive innovation.
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
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}