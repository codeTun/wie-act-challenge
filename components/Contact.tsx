import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Label from "@/components/ui/label";
import { Phone, MapPin, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-t from-purple-700 to-pink-600 shadow-lg rounded-xl overflow-hidden">
          <div className="lg:flex">
            {/* Left side - Contact Information */}
            <div className="lg:w-1/2 bg-gradient-to-t from-purple-800 to-pink-700 p-10 lg:p-14 space-y-8">
              <h1 className="text-4xl font-extrabold text-white mb-6">Get in touch</h1>
              <p className="text-lg text-white mb-8">
                We are here to build strong relationships and meaningful interactions. 
                Have a question or need help? Feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">(+216) 50 192 856</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">Av. de la Corniche, Monastir 5000, Tunisia</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">sag-wie-isimm@ieee.org</span>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="lg:w-1/2 bg-white p-10 lg:p-14 space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</Label>
                    <Input id="firstName" name="firstName" type="text" required className="mt-2 focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</Label>
                    <Input id="lastName" name="lastName" type="text" required className="mt-2 focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</Label>
                  <Input id="email" name="email" type="email" required className="mt-2 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-2 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</Label>
                  <Textarea id="message" name="message" rows={4} required className="mt-2 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-300">Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
