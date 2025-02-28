import React from 'react'

export default function LosAngeles() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Los Angeles, California
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Los Angeles Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides comprehensive medical director services for aesthetic practices in Los Angeles. 
              Our experienced physicians ensure compliance with local regulations while supporting your practice's growth.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Local compliance expertise for Los Angeles county</li>
              <li>• Specialized support for Beverly Hills medical spas</li>
              <li>• Regular on-site medical oversight</li>
              <li>• Customized protocols for LA's diverse patient base</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg"
              alt="Los Angeles Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
