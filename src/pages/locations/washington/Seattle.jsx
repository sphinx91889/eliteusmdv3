import React from 'react'

export default function Seattle() {
  return (
    <div className="py-16 bg-accent-sage">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
          Medical Director Services in Seattle, Washington
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Seattle Medical Director Services</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD provides comprehensive medical director services for aesthetic practices in Seattle. 
              Our experienced physicians ensure compliance with local regulations while supporting your practice's growth.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Local compliance expertise for King County</li>
              <li>• Specialized support for Seattle's luxury medical spas</li>
              <li>• Regular on-site medical oversight</li>
              <li>• Customized protocols for Seattle's diverse clientele</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2519072/pexels-photo-2519072.jpeg"
              alt="Seattle Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
