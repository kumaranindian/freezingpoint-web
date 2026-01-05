'use client'

import { Snowflake, Wrench, Settings, Zap, Shield, Clock } from 'lucide-react'

const services = [
  {
    icon: Snowflake,
    title: 'AC Repair & Maintenance',
    description: 'Expert repair services for all AC brands including LG, Samsung, Daikin, and more. Quick diagnosis and reliable fixes.',
    features: ['Gas refilling', 'Compressor repair', 'Cooling issues', 'Electrical problems'],
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50',
    animation: 'cooling-effect'
  },
  {
    icon: Settings,
    title: 'AC Installation',
    description: 'Professional AC installation services with proper positioning and electrical connections for optimal performance.',
    features: ['Split AC installation', 'Window AC setup', 'Ductwork', 'Electrical wiring'],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    animation: 'float-animation'
  },
  {
    icon: Wrench,
    title: 'Refrigerator Repair',
    description: 'Complete refrigerator repair services for all brands. From cooling issues to compressor problems.',
    features: ['Temperature control', 'Compressor repair', 'Door seal replacement', 'Thermostat issues'],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    animation: 'cooling-effect'
  },
  {
    icon: Zap,
    title: 'Washing Machine Repair',
    description: 'Expert washing machine repair for all brands including Whirlpool, LG, Samsung, and IFB.',
    features: ['Motor repair', 'Drum issues', 'Water drainage', 'Control panel problems'],
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    animation: 'float-animation'
  },
  {
    icon: Shield,
    title: 'Home Appliance Service',
    description: 'Comprehensive repair services for all home appliances with genuine spare parts and warranty.',
    features: ['Microwave repair', 'Water purifier service', 'Geyser repair', 'Inverter service'],
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    animation: 'cooling-effect'
  },
  {
    icon: Clock,
    title: 'Emergency Service',
    description: 'Same-day emergency repair services available. Quick response time for urgent AC and appliance issues.',
    features: ['24/7 availability', 'Same day service', 'Emergency repairs', 'Quick response'],
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-red-50',
    animation: 'float-animation'
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
            <div key={index} className={`service-card bg-white rounded-xl p-8 shadow-lg border-t-4 border-transparent hover:border-gradient-to-r ${service.animation}`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex items-center mb-6">
                <div className={`${service.bgColor} p-4 rounded-xl mr-4 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>
                  <service.icon className={`h-10 w-10 bg-gradient-to-br ${service.color} bg-clip-text text-transparent relative z-10`} />
                  {service.title.includes('AC') && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  {service.title.includes('Emergency') && (
                    <div className="trust-badge text-xs">
                      🚨 24/7 Available
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <a 
                  href="#contact" 
                  className={`btn-professional inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105`}
                >
                  Get Quote
                </a>
              </div>

              {/* Service-specific animations */}
              {service.title.includes('AC Repair') && (
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="ac-blow">
                    <div className="text-2xl">❄️</div>
                  </div>
                </div>
              )}
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
