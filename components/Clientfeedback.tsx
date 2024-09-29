'use client'

import React from 'react'
import { Star, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
interface FeedbackCardProps {
  name: string
  role: string
  company: string
  feedback: string
  rating: number
  
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, role, company, feedback, rating, likes }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
    <div className="p-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-base">{name}</h3>
          <p className="text-xs text-gray-600">{role} at {company}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{feedback}</p>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center text-gray-600 text-xs">
          <ThumbsUp className="w-4 h-4 mr-1" />
          <span>{likes}</span>
        </div>
      </div>
    </div>
    
  </div>
)

export function ClientFeedbackComponent() {
  return (
    <section className="bg-gray-900 from-purple-700 to-indigo-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-white text-center mb-12">Client Feedback</h2> */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/feedbacks.jpg" 
                alt="Animated feedback GIF" 
                className="w-full h-full object-cover"
                width={256}
                height={256}
              />
            </div> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <FeedbackCard
              name="Alex Johnson"
              role="Product Manager"
              company="TechCorp"
              feedback="This app has transformed our workflow. Highly recommended!"
              rating={5}
              
            />
            <FeedbackCard
              name="Alex Johnson"
              role="Product Manager"
              company="TechCorp"
              feedback="The user experience is top-notch! It’s made my job so much easier and more efficient."
              rating={5}
              
            />
            <FeedbackCard
              name="Alex Johnson"
              role="Product Manager"
              company="TechCorp"
              feedback="This app has transformed our workflow. Highly recommended!"
              rating={5}
              
            />
            
            <div className="hidden lg:block"></div>
            <FeedbackCard
              name="Sarah Lee"
              role="CTO at FutureTech"
              company="CreativeCo"
              feedback="This application has exceeded our expectations. The integration capabilities are fantastic!"
              rating={5}
              
            />
            <div className="hidden sm:block lg:hidden"></div>
            <FeedbackCard
              name="Michael Chen"
              role="CTO"
              company="InnovateTech"
              feedback="Exceptional support and constant improvements. Love it!"
              rating={5}
             
            />
            <FeedbackCard
              name="Emily Davis"
              role="UX Designer"
              company="DesignHub"
              feedback="The user-centric approach is evident. Great job!"
              rating={5}
            />
            <div className="hidden lg:block"></div>
            <FeedbackCard
              name="David Wilson"
              role="Startup Founder"
              company="NextGen Solutions"
              feedback="This tool has been crucial for our rapid growth. Thank you!"
              rating={5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}