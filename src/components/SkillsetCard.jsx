import React from 'react';

export default function SkillsetCard({ icon, title, description }) {
  return (
    <div className="w-[200px] h-[200px] rounded overflow-hidden shadow-lg p-6 bg-white flex flex-col items-center justify-center transform transition duration-300 hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        <img src={icon} alt="" className="h-[100px] w-[100px] mt-2 shadow-lg shadow-[#3B82F6]" /> 
      </div>
      <div className="font-bold text-xl text-center">{title}</div>
    </div>
  );
};
