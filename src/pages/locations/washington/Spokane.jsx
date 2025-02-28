import React from 'react'

export default function Spokane() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Spokane, Washington
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Spokane Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides comprehensive medical director services for Spokane's growing aesthetic market. 
              Our experienced physicians ensure compliance while supporting your practice's success.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Eastern Washington compliance expertise</li>
              <li>• Specialized aesthetic practice support</li>
              <li>• Regular medical oversight</li>
              <li>• Customized protocols for local needs</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
              alt="Spokane Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
