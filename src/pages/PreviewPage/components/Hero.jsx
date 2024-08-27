import React from 'react';
import "../../../App.css";
import HeroImage from "../../../assets/images/laptop-image.jpg";
import { GithubIcon, LinkedinIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="">
      <div className="hero-container py-20 flex items-center content-center relative min-h-screen">
        <img src={HeroImage} alt="Hero Background" className="absolute inset-0 block w-full h-full z-0" />
        <div className="container relative z-[3] px-3 -mx-28">
          <div className="flex justify-center">
            <div className=" text-center ml-[200px]">
              <h2 className=" text-black text-5xl font-bold -mt-12 font-serif ">Jehu Laryea</h2>
              <span className=" text-white font-serif block text-2xl font-semibold mt-4">Frontend Web Developer</span>
              <div className="flex justify-center mt-6 space-x-6">
                <a href="https://github.com/jayjehu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <GithubIcon className="w-10 h-10 text-white hover:text-[#4078c0] transition duration-200" />
                  <span className="text-lg text-white">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/jehu-laryea-37054a116
" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <LinkedinIcon className="w-10 h-10 text-white hover:text-[#005582] transition duration-200" />
                  <span className="text-lg text-white">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
