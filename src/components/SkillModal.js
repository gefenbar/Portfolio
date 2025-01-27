import React, { useState } from 'react';

function SkillModal({ skill, onClose }) {
  const skillDescriptions = {
    'JavaScript': {
      description: "A versatile programming language that enables interactive web experiences.",
      expertise: "Advanced",
      projects: ["Portfolio Website", "WordPress Plugin", "Interactive Web Applications"],
      icon: "💻"
    },
    'HTML5': {
      description: "The latest version of HTML, providing semantic structure to web content.",
      expertise: "Expert",
      projects: ["Responsive Websites", "Web Components"],
      icon: "🌐"
    },
    'CSS3': {
      description: "Styling language for creating beautiful, responsive web designs.",
      expertise: "Advanced",
      projects: ["Tailwind CSS Projects", "Custom Styling"],
      icon: "🎨"
    },
    'React': {
      description: "A powerful JavaScript library for building user interfaces.",
      expertise: "Advanced",
      projects: ["Personal Portfolio", "Dynamic Web Applications"],
      icon: "⚛️"
    },
    'Python': {
      description: "Versatile programming language used for web development, data science, and more.",
      expertise: "Intermediate",
      projects: ["Backend Services", "Data Analysis Scripts"],
      icon: "🐍"
    },
    'Git': {
      description: "Version control system for tracking and managing code changes.",
      expertise: "Advanced",
      projects: ["GitHub Repositories", "Collaborative Development"],
      icon: "🔀"
    },
    'SQL': {
      description: "Standard language for managing and querying relational databases.",
      expertise: "Intermediate",
      projects: ["Database Design", "Data Management"],
      icon: "📊"
    },
    'C#': {
      description: "Powerful programming language for Windows and game development.",
      expertise: "Beginner",
      projects: ["Learning Projects"],
      icon: "🎮"
    },
    'Linux': {
      description: "Open-source operating system known for its flexibility and power.",
      expertise: "Intermediate",
      projects: ["Server Management", "Development Environments"],
      icon: "🐧"
    },
    'PHP': {
      description: "Server-side scripting language for web development.",
      expertise: "Intermediate",
      projects: ["WordPress Development", "Backend Services"],
      icon: "🌟"
    }
  };

  const skillInfo = skillDescriptions[skill] || {
    description: "Skill details not available.",
    expertise: "N/A",
    projects: [],
    icon: "❓"
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative transform transition-all">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="text-6xl mb-4">{skillInfo.icon}</div>
          <h2 className="text-3xl font-bold text-blue-600 mb-2">{skill}</h2>
          <p className="text-gray-600 mb-4">{skillInfo.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="font-semibold text-gray-700">Expertise Level</h3>
              <div className="flex items-center mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      skillInfo.expertise === 'Advanced' ? 'bg-green-500 w-full' :
                      skillInfo.expertise === 'Intermediate' ? 'bg-yellow-500 w-3/4' :
                      'bg-red-500 w-1/2'
                    }`}
                  ></div>
                </div>
                <span className="ml-2 text-sm text-gray-600">{skillInfo.expertise}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Recent Projects</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                {skillInfo.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillModal;