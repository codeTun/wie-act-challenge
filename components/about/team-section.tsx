'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Define the types for the team members
interface SocialLinks {
  linkedin: string;
  github: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "Iheb Elazheri",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Alex is a visionary leader with over 15 years of experience in tech innovation. She founded our club with the mission to empower the next generation of tech enthusiasts.",
    social: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson"
    }
  },
  {
    name: "Hamza Haj Mtir",
    role: "CTO",
    image: "/hamza.jpg?height=400&width=400",
    bio: "Sam is a brilliant technologist with a passion for cutting-edge development. He leads our technical initiatives and mentors members in advanced programming concepts.",
    social: {
      linkedin: "https://linkedin.com/in/samlee",
      github: "https://github.com/samlee"
    }
  },
  {
    name: "Taieb Ben Slama",
    role: "Head of Education",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily is an experienced educator with a knack for making complex topics accessible. She designs our learning programs and workshops.",
    social: {
      linkedin: "https://linkedin.com/in/emilychen",
      github: "https://github.com/emilychen"
    }
  },
  {
    name: "Hamis Maaroufi",
    role: "Community Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael is the heart of our community. He organizes events, facilitates member interactions, and ensures everyone feels welcome and engaged.",
    social: {
      linkedin: "https://linkedin.com/in/michaelbrown",
      github: "https://github.com/michaelbrown"
    }
  },
  {
    name: "Yassine",
    role: "UX/UI Lead",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah brings creativity and user-centric design to all our projects. She leads workshops on design thinking and user experience.",
    social: {
      linkedin: "https://linkedin.com/in/sarahkim",
      github: "https://github.com/sarahkim"
    }
  },
  {
    name: "Omar branci",
    role: "Data Science Expert",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David is our go-to person for all things data. He leads our machine learning projects and teaches data analysis techniques.",
    social: {
      linkedin: "https://linkedin.com/in/davidpatel",
      github: "https://github.com/davidpatel"
    }
  },
  {
    name: "Aziz Ferchichi",
    role: "AR/VR Specialist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Lisa is passionate about immersive technologies. She guides our AR/VR initiatives and helps members explore the world of extended reality.",
    social: {
      linkedin: "https://linkedin.com/in/lisawong",
      github: "https://github.com/lisawong"
    }
  },
  {
    name: "Youssef Bessioud",
    role: "Cybersecurity Lead",
    image: "/placeholder.svg?height=400&width=400",
    bio: "James ensures that security is at the forefront of all our projects. He educates members on best practices in cybersecurity and ethical hacking.",
    social: {
      linkedin: "https://linkedin.com/in/jamestaylor",
      github: "https://github.com/jamestaylor"
    }
  }
]

export function TeamSectionComponent() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

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
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The brilliant minds behind our innovative tech community. Each member brings unique expertise and passion to our club.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1 text-white">{member.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{member.role}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => setSelectedMember(member)}
                        >
                          View Bio
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="bg-gray-800 text-white">
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedMember.name}</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    {selectedMember.role}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-gray-300">{selectedMember.bio}</p>
                  <div className="flex mt-4 space-x-4">
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}