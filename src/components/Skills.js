
import React from 'react';
// Skills Component (Skills.js)

const Skills = () => {
            const skillsData = [
                {
                    icon: "fas fa-code",
                    color: "text-green-400",
                    title: "Frontend Development",
                    description: "Building interactive interfaces with React.js, Bootstrap, and JSP for dynamic web apps.",
                    skills: [
                        { name: "React.js", percentage: 90 },
                        { name: "Bootstrap", percentage: 85 },
                        { name: "JSP", percentage: 80 }
                    ]
                },
                {
                    icon: "fas fa-server",
                    color: "text-blue-400",
                    title: "Backend Development",
                    description: "Developing scalable APIs and backend logic using Java, Spring Boot, and MySQL/PostgreSQL.",
                    skills: [
                        { name: "Java", percentage: 95 },
                        { name: "Spring Boot", percentage: 90 },
                        { name: "MySQL/PostgreSQL", percentage: 85 }
                    ]
                },
                {
                    icon: "fas fa-paint-brush",
                    color: "text-purple-400",
                    title: "UI/UX Design",
                    description: "Designing responsive layouts and wireframes to enhance user interaction and interface clarity.",
                    skills: [
                        { name: "Figma", percentage: 80 },
                        { name: "Adobe XD", percentage: 75 },
                        { name: "Wireframing", percentage: 78 }
                    ]
                },
                {
                    icon: "fas fa-cloud",
                    color: "text-yellow-400",
                    title: "Cloud & DevOps",
                    description: "Deploying microservices using Docker and CI/CD pipelines on AWS with Jenkins and GitHub Actions.",
                    skills: [
                        { name: "AWS (EC2, S3, Lambda)", percentage: 85 },
                        { name: "Docker", percentage: 82 },
                        { name: "CI/CD (Jenkins/GitHub Actions)", percentage: 80 }
                    ]
                },
                {
                    icon: "fas fa-mobile-alt",
                    color: "text-indigo-400",
                    title: "Mobile Development",
                    description: "Developing mobile-first web apps; exploring React Native and PWA implementations for responsiveness.",
                    skills: [
                        { name: "PWA", percentage: 80 },
                        { name: "React Native (Learning)", percentage: 60 },
                        { name: "Responsive UI", percentage: 85 }
                    ]
                },
                {
                    icon: "fas fa-chart-bar",
                    color: "text-red-400",
                    title: "Data & Analytics",
                    description: "Implementing ML workflows, data preprocessing with Pandas, and visualization using Matplotlib tools.",
                    skills: [
                        { name: "Python & Pandas", percentage: 80 },
                        { name: "Scikit-learn/Random Forest", percentage: 75 },
                        { name: "Matplotlib", percentage: 78 }
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
                                Tools and technologies I've mastered through hands-on projects and internships
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
                                                    <span className="text-green-400">{item.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-2">
                                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: `${item.percentage}%`}}></div>
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