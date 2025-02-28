import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 card-title text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Get in touch with us to learn more about our medical director services and how we can help your aesthetic practice.
          </p>
        </div>
      </section>
      
      <ContactForm />
    </div>
  )
}
