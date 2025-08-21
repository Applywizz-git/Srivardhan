import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      image: "images/citizen.jpg",
      title: "Citizen Service Portal ",
      description:
        "Developed MERN stack portal deployed on AWS EC2, improving service request completion time by 35% and ensuring 99.99% uptime through microservices migration.",
      tags: ["MERN Stack", "AWS EC2", "Microservices"],
      tagColors: ["text-green-400", "text-blue-400", "text-purple-400"]
    },
    {
      image: "images/legacy.jpg",
      title: "Legacy System Modernization",
      description:
        "Migrated LAMP-based citizen service applications to containerized microservices, reducing infrastructure costs by 20% and boosting uptime.",
      tags: ["Docker", "Kubernetes", "CI/CD"],
      tagColors: ["text-yellow-400", "text-indigo-400", "text-blue-400"]
    },
    {
      image: "images/hr.png",
      title: "Enterprise HR Portal ",
      description:
        "Built Angular + Node.js application integrated with PostgreSQL for HR management, optimizing query performance and reducing heavy-report load time by 40%.",
      tags: ["Angular", "Node.js", "PostgreSQL"],
      tagColors: ["text-red-400", "text-blue-400", "text-green-400"]
    },
    {
      image: "images/component-library.jpg",
      title: "Reusable UI Component Library",
      description:
        "Created a reusable UI library with shared Angular components, reducing development time and accelerating feature delivery by 20%.",
      tags: ["Angular", "UI Library", "Reusable Components"],
      tagColors: ["text-green-400", "text-purple-400", "text-yellow-400"]
    },
    {
      image: "images/cloud ci cd.png",
      title: "Cloud CI/CD Pipeline",
      description:
        "Implemented CI/CD pipelines using GitHub Actions and Jenkins for automated testing and deployments on AWS and Azure environments.",
      tags: ["GitHub Actions", "Jenkins", "AWS / Azure"],
      tagColors: ["text-indigo-400", "text-blue-400", "text-red-400"]
    },
    {
      image: "images/api.jpg",
      title: "API Integration for Citizen Services",
      description:
        "Integrated RESTful APIs between multiple government systems, enabling secure data exchange and improving service delivery speed.",
      tags: ["REST API", "Integration", "Security"],
      tagColors: ["text-blue-400", "text-green-400", "text-yellow-400"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My <span className="gradient-text">Portfolio</span></h2>
          <div className="section-divider mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my real-world projects in full stack development, system modernization, API integration, and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item rounded-2xl overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 bg-opacity-20 ${project.tagColors[tagIndex]} rounded-full text-sm`}
                      style={{
                        backgroundColor: `rgba(${project.tagColors[tagIndex] === 'text-green-400'
                          ? '0, 255, 136'
                          : project.tagColors[tagIndex] === 'text-blue-400'
                          ? '0, 212, 255'
                          : project.tagColors[tagIndex] === 'text-purple-400'
                          ? '168, 85, 247'
                          : project.tagColors[tagIndex] === 'text-yellow-400'
                          ? '250, 204, 21'
                          : project.tagColors[tagIndex] === 'text-indigo-400'
                          ? '129, 140, 248'
                          : project.tagColors[tagIndex] === 'text-red-400'
                          ? '248, 113, 113'
                          : '255, 255, 255'}, 0.2)`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-red-400 to-blue-500 px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300"
          >
            Ready to Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

