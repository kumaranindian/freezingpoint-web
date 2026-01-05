'use client'

import { Phone, Star, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert AC Repair Services in 
              <span className="text-yellow-300"> Pallikaranai</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Professional air conditioner repair, installation & maintenance services. 
              Trusted by 315+ customers with 4.4★ rating.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span>All Brands Supported</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span>Expert Technicians</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91-XXXXXXXXXX
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400 text-2xl">
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">4.4/5 Rating</h3>
              <p className="text-gray-200">Based on 315+ customer reviews</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-2xl font-bold">500+</h4>
                <p className="text-gray-200">ACs Repaired</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-2xl font-bold">5+ Years</h4>
                <p className="text-gray-200">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
