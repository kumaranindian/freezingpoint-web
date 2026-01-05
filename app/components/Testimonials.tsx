'use client'

import { Star, Quote, User } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Pallikaranai",
    rating: 5,
    date: "2 weeks ago",
    review: "Excellent service! My AC was not cooling properly for days. The technician from Freezing Point diagnosed the issue quickly and fixed it the same day. Very professional and reasonably priced. Highly recommended!",
    service: "AC Repair"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Medavakkam",
    rating: 5,
    date: "1 month ago",
    review: "Outstanding work on my LG refrigerator. It stopped cooling suddenly and I was worried about food spoilage. They came within 2 hours of my call and fixed the compressor issue. Great customer service!",
    service: "Refrigerator Repair"
  },
  {
    id: 3,
    name: "Arun Krishnan",
    location: "Sholinganallur",
    rating: 4,
    date: "3 weeks ago",
    review: "Professional AC installation service. They installed my new split AC perfectly with proper wiring and positioning. Clean work and explained everything clearly. Will definitely call them again for maintenance.",
    service: "AC Installation"
  },
  {
    id: 4,
    name: "Meera Nair",
    location: "Velachery",
    rating: 5,
    date: "1 week ago",
    review: "My washing machine was making loud noises and not spinning properly. The technician was very knowledgeable and fixed the drum issue efficiently. Fair pricing and genuine parts used. Very satisfied!",
    service: "Washing Machine Repair"
  },
  {
    id: 5,
    name: "Suresh Babu",
    location: "Pallikaranai",
    rating: 4,
    date: "2 months ago",
    review: "Good service for AC maintenance. They cleaned the filters, checked gas levels, and serviced the outdoor unit thoroughly. AC is now cooling much better. Prompt service and reasonable rates.",
    service: "AC Maintenance"
  },
  {
    id: 6,
    name: "Lakshmi Devi",
    location: "Tambaram",
    rating: 5,
    date: "3 days ago",
    review: "Emergency service on Sunday for my Samsung refrigerator. They responded quickly and fixed the thermostat issue. Very reliable and trustworthy technicians. Thank you for the quick help!",
    service: "Emergency Service"
  }
]

const stats = [
  { label: "Happy Customers", value: "315+" },
  { label: "Average Rating", value: "4.4★" },
  { label: "Years Experience", value: "19+" },
  { label: "Same Day Service", value: "95%" }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our AC repair and home appliance services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card rounded-xl p-6 relative float-animation`} style={{animationDelay: `${index * 0.3}s`}}>
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-primary-200 opacity-50" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-300 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current transform scale-110'
                          : 'text-gray-300'
                      }`}
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{testimonial.date}</span>
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-3 rounded-full mr-3 cooling-effect">
                    <User className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 flex items-center">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.service.includes('AC') 
                      ? 'bg-cyan-100 text-cyan-700 trust-badge' 
                      : testimonial.service.includes('Emergency')
                      ? 'bg-red-100 text-red-700 trust-badge'
                      : 'bg-primary-100 text-primary-700'
                  }`}>
                    {testimonial.service.includes('AC') && '❄️ '}
                    {testimonial.service.includes('Emergency') && '🚨 '}
                    {testimonial.service}
                  </span>
                </div>
              </div>

              {/* Service-specific visual elements */}
              {testimonial.service.includes('AC') && (
                <div className="absolute bottom-4 left-4 opacity-10">
                  <div className="ac-blow text-lg">❄️</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* JustDial & Google Reviews CTA */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            See More Reviews
          </h3>
          <p className="text-gray-600 mb-6">
            Check out our complete reviews and ratings on popular platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.justdial.com/Chennai/Freezing-Point-Near-Church-Pallikaranai/044PXX44-XX44-101001200743-F7R3_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📱</span>
              View on JustDial (315+ Reviews)
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">🌟</span>
              Google Reviews
            </a>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">4.4★</div>
                <div className="text-sm text-gray-600">JustDial Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">315+</div>
                <div className="text-sm text-gray-600">Total Reviews</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">2005</div>
                <div className="text-sm text-gray-600">Since</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Our Service?
          </h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of satisfied customers who trust us with their AC and appliance repairs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91XXXXXXXXXX"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors"
            >
              Call Now: +91-XXXXXXXXXX
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 hover:text-white transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
