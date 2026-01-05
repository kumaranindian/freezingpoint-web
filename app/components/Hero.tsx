'use client'

import { Phone, Star, CheckCircle, Snowflake, Wind, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero-gradient text-white py-20 relative overflow-hidden">
      {/* Floating AC Elements */}
      <div className="absolute top-10 left-10 float-animation opacity-20">
        <Snowflake className="h-12 w-12 text-cyan-300" />
      </div>
      <div className="absolute top-20 right-20 float-animation opacity-20" style={{animationDelay: '2s'}}>
        <Wind className="h-10 w-10 text-blue-300" />
      </div>
      <div className="absolute bottom-20 left-20 float-animation opacity-20" style={{animationDelay: '4s'}}>
        <Snowflake className="h-8 w-8 text-cyan-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <div className="trust-badge inline-block mb-4">
                <Shield className="h-4 w-4 inline mr-2" />
                Trusted Since 2005
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Expert <span className="ac-blow cooling-effect text-cyan-200 drop-shadow-md">AC Repair</span> Services in 
              <span className="text-yellow-300 drop-shadow-md"> Pallikaranai</span>
            </h1>
            <p className="text-xl mb-8 text-white drop-shadow-md">
              Professional air conditioner repair, installation & maintenance services. 
              Trusted by 315+ customers with 4.4★ rating.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-white font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-white font-medium">All Brands Supported</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-white font-medium">Expert Technicians</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="btn-professional bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +91-XXXXXXXXXX
              </a>
              <a 
                href="#contact" 
                className="btn-professional border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors text-center shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          <div className="text-center">
            {/* AC Unit Visual */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="ac-unit bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                  <div className="text-6xl mb-4">🏠</div>
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  <div className="text-sm text-white font-semibold drop-shadow-md">Cooling in Progress</div>
                </div>
                {/* AC Blow Effect */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <div className="ac-blow">
                    <Wind className="h-8 w-8 text-cyan-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 mb-6 border border-gray-700/50">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400 text-2xl">
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                  <Star className="h-8 w-8 fill-current" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">4.4/5 Rating</h3>
              <p className="text-gray-200">Based on 315+ customer reviews</p>
              <div className="mt-4">
                <div className="trust-badge text-sm">
                  <Clock className="h-3 w-3 inline mr-1" />
                  19+ Years Experience
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-800/90 transition-all border border-gray-700/50">
                <div className="cooling-effect inline-block mb-2">
                  <Snowflake className="h-8 w-8 text-cyan-300 mx-auto" />
                </div>
                <h4 className="text-2xl font-bold text-white">500+</h4>
                <p className="text-gray-200">ACs Repaired</p>
              </div>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-800/90 transition-all border border-gray-700/50">
                <div className="cooling-effect inline-block mb-2">
                  <Shield className="h-8 w-8 text-green-300 mx-auto" />
                </div>
                <h4 className="text-2xl font-bold text-white">2005</h4>
                <p className="text-gray-200">Since</p>
              </div>
            </div>

            {/* Professional Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="trust-badge text-xs">
                ✓ Licensed & Insured
              </div>
              <div className="trust-badge text-xs">
                ✓ 24/7 Emergency Service
              </div>
              <div className="trust-badge text-xs">
                ✓ Genuine Parts Only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
