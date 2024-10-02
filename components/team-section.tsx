'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading with vision and passion for women in engineering.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Emma Davis",
    role: "Vice Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Driving innovation and fostering collaboration within the team.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Sophia Lee",
    role: "Secretary",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ensuring smooth operations and effective communication.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Olivia Brown",
    role: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Managing finances and budgeting for impactful initiatives.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Mia Wilson",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Organizing engaging events that inspire and educate.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Ava Taylor",
    role: "Outreach Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Building partnerships and expanding our community reach.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Isabella Martinez",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Spearheading technical projects and workshops.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com"
  },
  {
    name: "Zoe Anderson",
    role: "Marketing Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Crafting our brand story and amplifying our message.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
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
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-300 hover:text-purple-400 transition-colors">
                    <Twitter className="w-5 h-5" />
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