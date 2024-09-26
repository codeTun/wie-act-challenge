'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <Button variant="secondary">Contact Us</Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <NavItem href="/" mobile>Home</NavItem>
          <NavItem href="/about" mobile>About</NavItem>
          <div className="mt-2">
            <Button variant="secondary" className="w-full">Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavItem({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const baseClasses = "text-white hover:text-pink-200 transition-colors duration-300"
  const mobileClasses = "block py-2"
  const desktopClasses = "inline-block"

  return (
    <Link href={href} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  )
}