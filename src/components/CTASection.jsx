import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-16 svg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-secondary/10 rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-dark">
            Ready to <span className="text-secondary">Elevate</span> Your Practice?
          </h2>
          <p className="text-xl text-primary-dark mb-8">
            Discover how EliteUSMD can transform your medical practice with expert medical director services.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
