"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Info,
  Phone,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-t from-indigo-900 via-indigo-800 to-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/defendher_2.svg"
            width={60}
            height={60}
            alt="Logo of our project defend her."
            loading="lazy"
            quality={100}
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavItem href="/" icon={<Home size={18} />}>
            Home
          </NavItem>
          <ServicesDropdown />
          <NavItem href="/about" icon={<Info size={18} />}>
            About
          </NavItem>
          <Link href="/contact" className="w-full">
            <Button
              variant="secondary"
              className="w-full hover:border-2 hover:border-secondary transition-all duration-300"
            >
              <Phone size={18} className="mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <NavItem href="/" icon={<Home size={18} />} mobile>
            Home
          </NavItem>
          <MobileServicesDropdown />
          <NavItem href="/about" icon={<Info size={18} />} mobile>
            About
          </NavItem>
          <div className="mt-2">
            <Button
              variant="secondary"
              className="w-full hover:border-2 hover:border-secondary transition-all duration-300"
            >
              <Phone size={18} className="mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  href,
  children,
  icon,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  mobile?: boolean;
}) {
  const baseClasses =
    "text-primary-foreground hover:text-secondary transition-colors duration-300 flex items-center";
  const mobileClasses =
    "block py-2 hover:border-l-4 hover:border-secondary pl-2";
  const desktopClasses =
    "inline-flex hover:border-b-2 hover:border-secondary pb-1";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {icon}
      <span className={mobile ? "ml-2" : "ml-1"}>{children}</span>
    </Link>
  );
}

function ServicesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-primary-foreground hover:text-secondary transition-colors duration-300 flex items-center hover:border-b-2 hover:border-secondary pb-1">
        <Briefcase size={18} />
        <span className="ml-1">Services</span>
        <ChevronDown size={16} className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/working" className="flex items-center">
            Extension
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary-foreground hover:text-secondary transition-colors duration-300 flex items-center w-full py-2 hover:border-l-4 hover:border-secondary pl-2"
      >
        <Briefcase size={18} />
        <span className="ml-2">Services</span>
        <ChevronDown size={16} className="ml-auto" />
      </button>
      {isOpen && (
        <div className="pl-6 py-2 space-y-2">
          <Link
            href="/services/web-development"
            className="block text-primary-foreground hover:text-secondary"
          >
            Web Development
          </Link>
          <Link
            href="/services/mobile-apps"
            className="block text-primary-foreground hover:text-secondary"
          >
            Mobile Apps
          </Link>
          <Link
            href="/services/cloud-solutions"
            className="block text-primary-foreground hover:text-secondary"
          >
            Cloud Solutions
          </Link>
        </div>
      )}
    </div>
  );
}
