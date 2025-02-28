import React from 'react'

export default function Bellevue() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Bellevue, Washington
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Bellevue Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD delivers expert medical director services for Bellevue's premier aesthetic practices. 
              Our board-certified physicians provide comprehensive oversight tailored to Bellevue's sophisticated market.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Eastside regulatory compliance expertise</li>
              <li>• High-end aesthetic practice support</li>
              <li>• Comprehensive medical oversight</li>
              <li>• Customized protocols for luxury clientele</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg"
              alt="Bellevue Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
