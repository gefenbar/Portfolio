import React, { useState } from 'react';
import SkillModal from '../components/SkillModal';
function Home() {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const skills = ['JavaScript', 'HTML5', 'CSS3', 'React', 'Python', 'Git', 'SQL', 'C#', 'Linux', 'PHP'];
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 tracking-tight">
          GEFEN BAR
        </h1>
        <h2 className="text-2xl text-blue-600 mb-6 font-semibold">
          FRONTEND DEVELOPER
        </h2>
        
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <p className="text-gray-600 leading-relaxed">
            Front-end developer with experience building responsive web applications 
            using JavaScript, jQuery, HTML, and CSS. Hold a BSc in Computer Science, 
            with a strong technical foundation and problem-solving skills, 
            committed to delivering clean, efficient, and user-focused solutions.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="/Gefen_Bar_Resume.pdf" 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Download CV
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex justify-center space-x-4 text-gray-600">
          <div>
            <strong>Phone:</strong><br></br><a href="tel:+972502001376" className='hover:text-blue-500'>+972-50-200-1376</a>
          </div>
          <div>
            <strong>Email:</strong><br></br><a href="mailto:gefenbar23@gmail.com" className='hover:text-blue-500'>gefenbar23@gmail.com</a>
          </div>
          <div>
            <strong>Location:</strong><br></br>Ramat Gan, Israel
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
            onClick={() => setSelectedSkill(skill)}
          >
            {skill}
          </span>
        ))}
      </div>

      {selectedSkill && (
        <SkillModal 
          skill={selectedSkill} 
          onClose={() => setSelectedSkill(null)} 
        />
      )}
        </div>
      </div>
    </div>
  );
}

export default Home;