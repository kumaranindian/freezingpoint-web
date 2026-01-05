'use client'

import { Award, Users, Clock, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 professional-gradient">
      <div className="container mx-auto px-4 relative">
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 float-animation opacity-10">
          <div className="text-4xl">🔧</div>
        </div>
        <div className="absolute bottom-10 left-10 float-animation opacity-10" style={{animationDelay: '3s'}}>
          <div className="text-3xl">⚡</div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Freezing Point
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Located in the heart of Pallikaranai, Chennai, Freezing Point has been serving 
              the community with reliable AC repair and home appliance services for over 5 years. 
              Our expert technicians are trained to handle all major brands and provide 
              quick, efficient solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With a 4.4-star rating from over 315 satisfied customers, we pride ourselves 
              on delivering quality service, using genuine spare parts, and ensuring 
              customer satisfaction with every repair.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start float-animation" style={{animationDelay: '0.5s'}}>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-xl mr-4 cooling-effect">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Certified Technicians</h4>
                  <p className="text-gray-600 text-sm">Expert professionals with years of experience</p>
                  <div className="trust-badge text-xs mt-2">✓ Licensed</div>
                </div>
              </div>

              <div className="flex items-start float-animation" style={{animationDelay: '1s'}}>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl mr-4 cooling-effect">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">315+ Happy Customers</h4>
                  <p className="text-gray-600 text-sm">Trusted by families across Chennai</p>
                  <div className="trust-badge text-xs mt-2">4.4★ Rated</div>
                </div>
              </div>

              <div className="flex items-start float-animation" style={{animationDelay: '1.5s'}}>
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 rounded-xl mr-4 cooling-effect">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Same Day Service</h4>
                  <p className="text-gray-600 text-sm">Quick response and efficient repairs</p>
                  <div className="trust-badge text-xs mt-2">🚀 Fast</div>
                </div>
              </div>

              <div className="flex items-start float-animation" style={{animationDelay: '2s'}}>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-xl mr-4 cooling-effect">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Local Experts</h4>
                  <p className="text-gray-600 text-sm">Serving Pallikaranai and surrounding areas</p>
                  <div className="trust-badge text-xs mt-2">📍 Local</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium">Pallikaranai</span>
                <span className="text-primary-600 font-bold">Primary Area</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium">Medavakkam</span>
                <span className="text-gray-500">5 km radius</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium">Sholinganallur</span>
                <span className="text-gray-500">7 km radius</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium">Velachery</span>
                <span className="text-gray-500">8 km radius</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <span className="font-medium">Tambaram</span>
                <span className="text-gray-500">10 km radius</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <h4 className="font-bold text-primary-800 mb-2">Service Guarantee</h4>
              <p className="text-primary-700 text-sm">
                We provide 30-day warranty on all repairs and use only genuine spare parts 
                for lasting solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
