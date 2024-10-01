import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Label from "@/components/ui/label";
import { Phone, MapPin, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-700  shadow-xl rounded-lg overflow-hidden">
          <div className="lg:flex">
            {/* Left side - Contact Information */}
            <div className="lg:w-1/2 bg-gradient-to-t from-indigo-900 via-indigo-800 to-indigo-700 p-8 lg:p-12">
              <h1 className="text-3xl font-bold text-white mb-6">Get in touch</h1>
              <p className="text-white mb-8">
                Our pursuit of excellence extends to building strong relationships and meaningful
                interactions with our users and business partners. Have a question or need assistance? 
                We're here to help—reach out to us!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="w-6 h-6" />
                  <span>123 Main St, Anytown, USA 12345</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6" />
                  <span>contact@example.com</span>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-white">First Name</Label>
                    <Input id="firstName" name="firstName" type="text" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-white">Last Name</Label>
                    <Input id="lastName" name="lastName" type="text" required className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-white">Email</Label>
                  <Input id="email" name="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-white">Message</Label>
                  <Textarea id="message" name="message" rows={4} required className="mt-1" />
                </div>
                <div>
                  <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400" >Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}