"use client";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-indigo-900 via-indigo-800 to-gray-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-indigo-200">
              Dedicated to empowering women with cybersecurity knowledge and
              protection.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services/extension"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Your Feedback</h3>
            <p className="text-indigo-200">
              Feel free to share your feedback, your input is always
              appreciated!
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-300 text-sm">
              © 2024 WIE Cybersecurity Initiative. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="https://www.facebook.com/IEEEWIEISIMMSA"
                className="text-indigo-300 hover:text-white transition-colors"
                target="_blank"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>

              <Link
                href="https://www.instagram.com/ieee_wie_isimm_sag?igsh=MTQ0MzV2bWJrYXl2ZQ=="
                className="text-indigo-300 hover:text-white transition-colors"
                target="_blank"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-indigo-300 hover:text-white transition-colors"
                target="_blank"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="sba-isimm-wie@ieee.org"
                className="text-indigo-300 hover:text-white transition-colors"
                target="_blank"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
