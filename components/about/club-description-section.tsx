'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Code, Lightbulb, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

const clubFeatures = [
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Collaborative Community",
    description: "Join a vibrant network of tech enthusiasts, developers, and innovators."
  },
  {
    icon: <Code className="w-6 h-6 text-pink-400" />,
    title: "Hands-on Workshops",
    description: "Participate in regular coding sessions and practical tech workshops."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Innovative Projects",
    description: "Work on cutting-edge projects that push the boundaries of technology."
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "Skill Acceleration",
    description: "Rapidly improve your skills through challenges and peer learning."
  }
]

export function ClubDescriptionSectionComponent() {
  const [activeTab, setActiveTab] = useState("overview")

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
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our IEEE WIE ISIMM Student Affinity group </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          SparkHer Mind : Where Women Ignite the Flames of STEM Brilliance
          IEEE WIE is one of the world s leaders in changing the face of engineering.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-600">About Our IEEE WIE ISIMM Student Affinity group </h3>
                <p className="text-gray-300 mb-4">
                Step into a world of empowerment with IEEE WIE Affinity Group! We re on a mission to ignite possibilities for women in engineering and technology. Explore our vibrant initiative, WIEmpower Her, designed to uplift girls in rural areas, nurturing their journey into STEM education.
                </p>
                <p className="text-gray-300 mb-4">
                Dive into our digital magazine, your gateway to a realm of tech updates, opportunities, and educational treasures. Let s unite in creating an inclusive and boundless STEM community, together shaping a brighter future.
                </p>
                <Link href="https://www.facebook.com/IEEEWIEISIMMSA" passHref >
                  <Button  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clubFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{feature.title}</h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}