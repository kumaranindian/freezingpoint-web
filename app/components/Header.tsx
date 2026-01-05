'use client'

import { Phone, MapPin, Clock, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>Call: +91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Open: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Pallikaranai, Chennai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">
              Freezing Point
            </h1>
            <div className="ml-4 hidden md:block">
              <div className="flex items-center text-yellow-500">
                <span className="text-lg">★★★★★</span>
                <span className="ml-2 text-gray-600">4.4/5 (315 reviews)</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
              <div className="flex items-center text-yellow-500 md:hidden">
                <span className="text-lg">★★★★★</span>
                <span className="ml-2 text-gray-600">4.4/5 (315 reviews)</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
