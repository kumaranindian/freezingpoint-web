'use client'

import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch for quick AC repair services in Pallikaranai. 
            We're here to help with all your home appliance needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-2">For immediate assistance</p>
                  <a href="tel:+91XXXXXXXXXX" className="text-primary-600 font-bold text-lg hover:text-primary-700">
                    +91-XXXXXXXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">Quick chat support</p>
                  <a href="https://wa.me/91XXXXXXXXXX" className="text-primary-600 font-bold hover:text-primary-700">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    No 3, Near Church,<br />
                    Kannabiran Koil Street,<br />
                    Pallikaranai, Chennai - 600100,<br />
                    Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Sunday<br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-bold text-primary-800 mb-3">Emergency Service Available</h4>
              <p className="text-primary-700 mb-4">
                Need urgent AC repair? We provide same-day emergency services 
                for critical cooling issues.
              </p>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Call for Emergency Service
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ac-repair">AC Repair & Maintenance</option>
                  <option value="ac-installation">AC Installation</option>
                  <option value="refrigerator-repair">Refrigerator Repair</option>
                  <option value="washing-machine-repair">Washing Machine Repair</option>
                  <option value="home-appliance-service">Home Appliance Service</option>
                  <option value="emergency-service">Emergency Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your address"
                ></textarea>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe the Issue
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Describe the problem with your appliance"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
