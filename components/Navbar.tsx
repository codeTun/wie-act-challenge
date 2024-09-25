import Link from "next/link";
import { Home, Contact, Wrench, Users, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-pink-100 p-4 text-gray-800 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold text-purple-700"
        >
          <span className="sr-only">Women in Engineering Logo</span>
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <span>place for logo</span>
        </Link>
        <p className="hidden md:block text-sm italic text-purple-600">
          Empowering women in engineering
        </p>
        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open main menu</span>
        </button>
        <div className="hidden w-full md:flex md:w-auto md:items-center">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8">
            <li>
              <Link
                href="/"
                className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
              >
                <Wrench className="h-4 w-4" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
              >
                <Contact className="h-4 w-4" />
                <span>Contacts</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
              >
                <Users className="h-4 w-4" />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
