import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      icon: "fas fa-code",
      color: "text-green-400",
      title: "Frontend Development",
      description: "Building responsive, user-friendly interfaces with modern JavaScript frameworks and libraries.",
      skills: [
        { name: "React / Next.js", percentage: 90 },
        { name: "Angular / Vue", percentage: 85 },
        { name: "Tailwind / Material UI", percentage: 88 }
      ]
    },
    {
      icon: "fas fa-server",
      color: "text-blue-400",
      title: "Backend Development",
      description: "Designing secure, scalable server-side applications and APIs using multiple programming frameworks.",
      skills: [
        { name: "Java / Spring Boot", percentage: 90 },
        { name: "Node.js / Express / NestJS", percentage: 88 },
        { name: "PHP / Laravel / Django", percentage: 80 }
      ]
    },
    {
      icon: "fas fa-cloud",
      color: "text-yellow-400",
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on cloud platforms with CI/CD automation.",
      skills: [
        { name: "AWS / Azure / GCP", percentage: 88 },
        { name: "Docker / Kubernetes", percentage: 85 },
        { name: "GitHub Actions / Jenkins", percentage: 82 }
      ]
    },
    {
      icon: "fas fa-database",
      color: "text-indigo-400",
      title: "Databases",
      description: "Designing schemas and optimizing queries for relational and NoSQL databases.",
      skills: [
        { name: "MySQL / PostgreSQL", percentage: 90 },
        { name: "MongoDB / DynamoDB", percentage: 85 },
        { name: "Redis / Firebase", percentage: 80 }
      ]
    },
    {
      icon: "fas fa-project-diagram",
      color: "text-purple-400",
      title: "Architecture & Integration",
      description: "Developing microservices, APIs, and integration layers for complex enterprise solutions.",
      skills: [
        { name: "REST / GraphQL", percentage: 88 },
        { name: "Microservices Architecture", percentage: 85 },
        { name: "API Gateway / Lambda", percentage: 80 }
      ]
    },
    {
      icon: "fas fa-tools",
      color: "text-red-400",
      title: "Testing & Tools",
      description: "Ensuring software quality and maintainability through testing and best practices.",
      skills: [
        { name: "Jest / Mocha / Cypress", percentage: 85 },
        { name: "Selenium / Playwright", percentage: 80 },
        { name: "Postman / Swagger", percentage: 88 }
      ]
    },
    {
      icon: "fas fa-vial",
      color: "text-pink-400",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing expertise for frontend, backend, and API automation.",
      skills: [
        { name: "Jest / Mocha / Chai", percentage: 85 },
        { name: "Cypress / Selenium / Playwright", percentage: 82 },
        { name: "Postman / Newman", percentage: 80 }
      ]
    },
    {
      icon: "fas fa-users-cog",
      color: "text-teal-400",
      title: "Version Control & Collaboration",
      description: "Managing codebases and collaborating effectively with distributed teams.",
      skills: [
        { name: "Git / GitHub / GitLab / Bitbucket", percentage: 90 },
        { name: "Jira / Confluence / Trello", percentage: 88 },
        { name: "Figma", percentage: 80 }
      ]
    },
    {
      icon: "fas fa-sitemap",
      color: "text-orange-400",
      title: "Architecture & Methodologies",
      description: "Designing efficient software systems and applying proven development practices.",
      skills: [
        { name: "Microservices / Serverless Architecture", percentage: 88 },
        { name: "Responsive Web Design / PWA", percentage: 85 },
        { name: "Performance Optimization / Agile-Scrum", percentage: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <div className="section-divider mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Core technical proficiencies that drive my full stack development, cloud deployment, and scalable software delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card p-8 rounded-2xl hover-glow">
              <div className={`text-4xl ${skill.color} mb-4`}>
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-gray-400 mb-6">{skill.description}</p>
              <div className="space-y-3">
                {skill.skills.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="text-blue-200">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-400 to-blue-500 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
