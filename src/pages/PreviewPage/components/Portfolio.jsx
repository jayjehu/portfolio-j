import React from 'react';
import techBg from '../../../assets/img-port/f90.png';
import techBg1 from '../../../assets/img-port/rj.png';
import techBg2 from '../../../assets/img-port/event.png';
import techBg3 from '../../../assets/img-port/port.png';
import techBg4 from '../../../assets/img-port/dhp.png';
import techBg5 from '../../../assets/img-port/ghr.jpg';



// import other images as needed

const Portfolio = () => {
  const projects = [
    {
      title: 'Farm 90',
      description: 'Landing page for fresh vegetable farm website using CSS & HTML',
      imageUrl: techBg,
    },
    {
      title: 'Restaurant J',
      description: 'Restaurant Website using CSS, HTML & JavaScript',
      imageUrl: techBg1, 
    },
    
    {
      title: 'Event Management App',
      description: 'Web App for creating displaying and managing events',
      imageUrl: techBg2, 
    },
    {
      title: 'Portfolio App',
      description: 'Showcase your talent on ZCA portfolio app',
      imageUrl: techBg3,
      
    },
    {
      title: 'Tele-H',
      description: 'Telemedicine web app for booking appointment with health professionals',
      imageUrl: techBg4, 
    },
    {
      title: 'Ghana Hazard Reporter',
      description: 'Ghana Hazard Reporter open source project (DPG)',
      imageUrl: techBg5, 
    },
    
    // Add more projects as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="  rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"/>
              <div className="p-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
