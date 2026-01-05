'use client'

import { Snowflake, Wrench, Settings, Zap, Shield, Clock } from 'lucide-react'

const services = [
  {
    icon: Snowflake,
    title: 'AC Repair & Maintenance',
    description: 'Expert repair services for all AC brands including LG, Samsung, Daikin, and more. Quick diagnosis and reliable fixes.',
    features: ['Gas refilling', 'Compressor repair', 'Cooling issues', 'Electrical problems']
  },
  {
    icon: Settings,
    title: 'AC Installation',
    description: 'Professional AC installation services with proper positioning and electrical connections for optimal performance.',
    features: ['Split AC installation', 'Window AC setup', 'Ductwork', 'Electrical wiring']
  },
  {
    icon: Wrench,
    title: 'Refrigerator Repair',
    description: 'Complete refrigerator repair services for all brands. From cooling issues to compressor problems.',
    features: ['Temperature control', 'Compressor repair', 'Door seal replacement', 'Thermostat issues']
  },
  {
    icon: Zap,
    title: 'Washing Machine Repair',
    description: 'Expert washing machine repair for all brands including Whirlpool, LG, Samsung, and IFB.',
    features: ['Motor repair', 'Drum issues', 'Water drainage', 'Control panel problems']
  },
  {
    icon: Shield,
    title: 'Home Appliance Service',
    description: 'Comprehensive repair services for all home appliances with genuine spare parts and warranty.',
    features: ['Microwave repair', 'Water purifier service', 'Geyser repair', 'Inverter service']
  },
  {
    icon: Clock,
    title: 'Emergency Service',
    description: 'Same-day emergency repair services available. Quick response time for urgent AC and appliance issues.',
    features: ['24/7 availability', 'Same day service', 'Emergency repairs', 'Quick response']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive repair and maintenance services for all your home appliances 
            with expert technicians and genuine spare parts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Freezing Point?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4.4★</div>
                <p className="text-gray-600">Customer Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">315+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
