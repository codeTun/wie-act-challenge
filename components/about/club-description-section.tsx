"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Code, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const clubFeatures = [
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Inclusive Collaboration",
    description:
      "Build a diverse community where women develop innovative solutions to global challenges.",
  },
  {
    icon: <Code className="w-6 h-6 text-pink-400" />,
    title: "Empower Women in Tech",
    description:
      "Lead initiatives to enable women to excel in engineering and technology.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Address Digital Safety",
    description:
      "Tackle issues like online harassment, digital security, and privacy through technology.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "Skills for the Future",
    description:
      "Equip women with expertise in AI, IoT, and 4IR technologies for a safer, inclusive digital world.",
  },
];

export function ClubDescriptionSectionComponent() {
  const [activeTab, setActiveTab] = useState("overview");

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
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Our IEEE WIE ISIMM Student Affinity Group
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            SparkHer Mind: Where Women Ignite the Flames of STEM Brilliance.
            IEEE WIE is one of the world`&apos;`s leaders in changing the face of
            engineering.
          </p>
        </motion.div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-2 bg-gray-900 rounded-lg">
            <TabsTrigger
              value="overview"
              className="rounded-lg bg-gray-800 hover:bg-gray-700 p-4 transition-colors"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="rounded-lg bg-gray-800 hover:bg-gray-700 p-4 transition-colors"
            >
              Features
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-8">
            <Card className="bg-gray-800 border-gray-700 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  About Our IEEE WIE ISIMM Student Affinity Group
                </h3>
                <p className="text-gray-300 mb-6">
                  IEEE Women in Engineering (WIE) is a global network of IEEE
                  members and volunteers committed to promoting women engineers
                  and scientists while inspiring girls worldwide to pursue
                  careers in engineering and science. Our mission is to connect,
                  support, and inspire women and girls globally, facilitating
                  their recruitment and retention in STEM fields. Now, turning
                  to IEEE WIE ISIMM SAG, we are actively engaged in various
                  initiatives, with a core focus on advancing women in
                  engineering. Our efforts are geared towards enhancing the hard
                  skills of our members, providing opportunities for skill
                  development, leadership training, and promoting career growth
                  for all participants. We`&apos;`ve organized several impactful
                  events, including WIEMpower Her 1.0, AI Pulse 1.0, WIE Heal
                  3.0, WIE Guide 1.0, among many others, offering numerous
                  learning and development sessions.{" "}
                </p>
                <Link href="https://www.facebook.com/IEEEWIEISIMMSA" passHref>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features */}
          <TabsContent value="features" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clubFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                          {feature.title}
                        </h4>
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
  );
}
