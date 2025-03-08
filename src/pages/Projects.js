import React from "react";

function Projects() {
  const projects = [
    {
      title: "AI WordPress Plugin",
      description:
        "Developed an innovative AI-powered WordPress plugin with an intuitive user interface, enhancing website functionality and user experience.",
      technologies: ["PHP", "JavaScript", "WordPress", "AI Integration"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive personal portfolio website built with React and Tailwind CSS, showcasing professional experience and projects.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
      ],
      githubLink: "https://github.com/gefenbar/react-portfolio",
      liveLink: "#",
    },
    {
      title: "Web Development Projects",
      description:
        "Collection of web development projects demonstrating skills in front-end and back-end technologies.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Responsive Design",
      ],
      githubLink: "https://github.com/gefenbar",
      liveLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl content-center"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:animate-pulse cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors structure1"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors structure1"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            More projects available on my GitHub profile
          </p>
          <a
            href="https://github.com/gefenbar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
