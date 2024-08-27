import React from 'react';
import ProfileImage from "../../../assets/images/dp.jpg";

const About = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <section className="w-full max-w-5xl p-8">
        {/* Section Title */}
        <div className="container flex flex-col relative text-center mb-10">
          <span className="absolute top-7 text-[#eef0f2] left-0 right-0 z-[1] font-bold text-5xl leading-[0]">ABOUT ME</span>
          <h2 className="text-3xl font-bold mb-5 pb-0 pt-3 relative z-[2]">About Me</h2>
        </div>
        {/* End Section Title */}

        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start" data-aos="fade-up" data-aos-delay="100">
          <div className="flex-1 mb-8 lg:mb-0 lg:w-1/3 flex justify-center">
            <img src={ProfileImage} className="img-fluid rounded-lg shadow-lg" alt="Profile" />
          </div>
          <div className="flex-1 lg:w-2/3 lg:pl-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-center lg:text-left">Frontend Web Developer</h2>
            <p className="py-3 text-lg text-center lg:text-left">
              I am a frontend web developer with a knack for building user-intuitive web pages and apps. With expertise in HTML, CSS, React JS, JavaScript, and TypeScript, I focus on creating a pleasant experience for web users.
            </p>
            <div className="flex flex-col items-center lg:items-start">
              <ul className="list-none space-y-4">
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>050 326 5500</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Accra</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jehued@outlook.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
