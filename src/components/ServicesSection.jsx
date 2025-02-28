import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: "Professional Medical Supervision",
    description: "Comprehensive oversight and guidance for aesthetic practices",
    imageUrl: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: "/services/medical-supervision"
  },
  {
    title: "Medical Director",
    description: "Expert medical leadership and compliance management",
    imageUrl: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: "/services/medical-director"
  },
  {
    title: "Chart Review And Patient Assessment",
    description: "Thorough review of patient documentation and treatment protocols",
    imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    path: "/services/chart-review"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-24 luxury-gradient-bg subtle-pattern">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 card-title text-primary-dark">
          Our <span className="text-secondary">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                imageUrl={service.imageUrl}
                path={service.path}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
