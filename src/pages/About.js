import React from "react";

function About() {
  const experiences = [
    {
      company: "ZeCloud",
      role: "Web Developer",
      period: "2024",
      responsibilities: [
        "Developed dynamic web applications using modern web technologies",
        "Collaborated with cross-functional development teams",
        "Implemented responsive and performant front-end solutions",
        "Contributed to project architecture and code quality",
      ],
    },
    {
      company: "Digitale",
      role: "Plugin Developer",
      period: "2024",
      responsibilities: [
        "Created an AI-powered WordPress plugin",
        "Designed intuitive user interfaces",
        "Managed version control and documentation",
        "Integrated complex front-end and back-end functionalities",
      ],
    },
    {
      company: "Art Division",
      role: "Web Development Intern",
      period: "2021 - 2022",
      responsibilities: [
        "Maintained and optimized company websites",
        "Implemented UI improvements and performance enhancements",
        "Conducted technical bug fixes and troubleshooting",
        "Applied basic SEO best practices",
      ],
    },
    {
      company: "Sapir College",
      role: "IT Specialist",
      period: "2018 - 2021",
      responsibilities: [
        "Provided technical support to teachers, students, and staff",
        "Implemented exam management system training",
        "Resolved technical issues across departments",
      ],
    },
  ];

  const education = [
    {
      institution: "Sapir College",
      degree: "Bachelor of Science in Computer Science",
      period: "2019 - 2023",
      highlights: [
        "Comprehensive curriculum covering software development, algorithms, and system design",
        "Developed strong foundation in programming and problem-solving",
        "Participated in multiple collaborative software projects",
        "Maintained high academic performance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Professional Journey
          </h1>

          {/* Professional Experience Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
              Professional Experience
            </h2>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-8 p-6 bg-gray-100 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {exp.company}
                  </h2>
                  <span className="text-blue-600 font-semibold">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl text-blue-600 mb-4">{exp.role}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
              Education
            </h2>
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {edu.institution}
                  </h2>
                  <span className="text-blue-600 font-semibold">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-xl text-blue-600 mb-4">{edu.degree}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
