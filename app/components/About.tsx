'use client'

import { Award, Users, Clock, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Certified Technicians</h4>
                  <p className="text-gray-600 text-sm">Expert professionals with years of experience</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">315+ Happy Customers</h4>
                  <p className="text-gray-600 text-sm">Trusted by families across Chennai</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Same Day Service</h4>
                  <p className="text-gray-600 text-sm">Quick response and efficient repairs</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Local Experts</h4>
                  <p className="text-gray-600 text-sm">Serving Pallikaranai and surrounding areas</p>
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
