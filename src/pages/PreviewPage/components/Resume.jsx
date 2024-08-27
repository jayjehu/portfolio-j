import React from 'react'

const Resume = () => {
  return (
    <div>
   <section id="resume" className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-4xl font-bold">Resume</h2>
          
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-[2px]"></div>
       
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-l-4 border-r-4 border-blue-500 px-4">
          <div className=" border-r-4 border-blue-500">
      
           
           
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Certificate in Web Development</h4>
              <p className="text-gray-600">2024 - 2024</p>
              <p className="text-gray-800">MEST Africa</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Bachelor of Business Administration</h4>
              <p className="text-gray-600">2013 - 2017</p>
              <p className="text-gray-800">University of Professional Studies, Accra</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Professional Experience</h3>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Frontend Developer</h4>
              <p className="text-gray-600">2024 - Present</p>
              <p className="text-gray-800">Freelance</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Designed intuitive web apps</li>
                <li>Contributed to the Ghana Hazard Reporter open source project</li>
                
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Surveyor</h4>
              <p className="text-gray-600">2016 - 2018</p>
              <p className="text-gray-800">ABC Creative Agency, New York, NY</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Undertook a geo-market survey of infrastructure relevant to the deployment of fiber-to-the-Home (FTTH) network</li>
                <li> Contributed to standardizing operating procedures and infrastructure
classifications
</li>
                <li>Conducted reviews after audits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Resume