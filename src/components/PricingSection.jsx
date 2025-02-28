import React from 'react'
import { Link } from 'react-router-dom'

export default function PricingSection() {
  return (
    <section className="py-16 luxury-gradient-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl soft-gradient-overlay">
            <img 
              src="https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Medical Director Services"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-2 text-primary-dark">
              Hire a <span className="text-secondary">Medical Director</span> Now
            </h2>
            <h3 className="text-2xl font-semibold mb-8 text-secondary">
              For Just $799/Month
            </h3>
            
            <div className="space-y-4">
              {[
                { label: "Monthly Rates", value: "Starting at $799/month", highlight: true },
                { label: "Medical Director fees", value: "Included", highlight: false },
                { label: "Physician Malpractice Insurance", value: "Included", highlight: false },
                { label: "Legal Fees", value: "$0", highlight: false },
                { label: "Fee to start", value: "$0", highlight: false }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center bg-accent-sage/50 rounded-lg px-4 py-3 hover:bg-accent-sage/70 transition-colors"
                >
                  <span className="text-primary-dark font-medium">{item.label}</span>
                  <span className={`font-bold ${item.highlight ? 'text-secondary' : 'text-primary-dark'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg inline-block transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
