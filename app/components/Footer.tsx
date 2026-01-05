'use client'

import { Phone, MapPin, Clock, Mail, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Freezing Point</h3>
            <p className="text-gray-300 mb-4">
              Professional AC repair and home appliance services in Pallikaranai, Chennai. 
              Trusted by 315+ customers with expert technicians.
            </p>
            <div className="flex items-center text-yellow-400 mb-2">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-2 text-white">4.4/5 (315 reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">AC Repair & Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AC Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Refrigerator Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Washing Machine Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Home Appliance Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1 text-primary-400" />
                <div>
                  <p>+91-XXXXXXXXXX</p>
                  <p className="text-sm">Call for immediate service</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-primary-400" />
                <div>
                  <p>No 3, Near Church,</p>
                  <p>Kannabiran Koil Street,</p>
                  <p>Pallikaranai, Chennai - 600100</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 text-primary-400" />
                <div>
                  <p>Mon - Sun: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm">Emergency service available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Pallikaranai</li>
              <li>Medavakkam</li>
              <li>Sholinganallur</li>
              <li>Velachery</li>
              <li>Tambaram</li>
              <li>OMR Corridor</li>
            </ul>
            <div className="mt-4 p-3 bg-primary-600 rounded-lg">
              <p className="text-sm font-medium">Same Day Service Available</p>
              <p className="text-xs text-primary-100">Call now for quick repairs</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Freezing Point. All rights reserved. Professional AC repair services in Chennai.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
