// Portfolio Component (Portfolio.js)

import React from 'react';


const Portfolio = () => {
            const projects = [
                {
                    image: "images/library2.jpeg",
                    title: "Library Management System",
                    description: "A desktop-based system with CRUD, fine tracking, and role-based access, improving librarian operations by 40%.",
                    tags: ["Java", "JDBC", "Swing"],
                    tagColors: ["text-green-400", "text-blue-400", "text-purple-400"]
                },
                {
                    image: "images/image recognition.jpeg",
                    title: "Image Classification - CIFAR10",
                    description: "Trained a CNN to classify CIFAR-10 images with 69.64% accuracy and suggested ResNet for future improvements.",
                    tags: ["Python", "TensorFlow", "Matplotlib"],
                    tagColors: ["text-yellow-400", "text-indigo-400", "text-blue-400"]
                },
                {
                    image: "images/fake profile.jpeg",
                    title: "Fake Profile Detection",
                    description: "ML model using TF-IDF and Random Forest to flag fake social profiles with high precision and strong F1 scores.",
                    tags: ["Scikit-learn", "TF-IDF", "Random Forest"],
                    tagColors: ["text-green-400", "text-red-400", "text-yellow-400"]
                },
                {
                    image: "images/cloud dedup.jpeg",
                    title: "Cloud Storage Deduplication",
                    description: "MapReduce-based deduplication system with MD5 hashing and metadata tracking, boosting storage efficiency by 35%.",
                    tags: ["Java", "Hadoop", "MySQL"],
                    tagColors: ["text-blue-400", "text-purple-400", "text-green-400"]
                },
                {
                    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
                    title: "REST API for A/B Testing",
                    description: "Spring Boot APIs for A/B testing workflows, enabling behavior tracking and experiment automation at Inovic.",
                    tags: ["Java", "Spring Boot", "REST API"],
                    tagColors: ["text-green-400", "text-indigo-400", "text-yellow-400"]
                },
                {
                    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6",
                    title: "IoT Automation System",
                    description: "Arduino-based smart automation with real-time sensors and UART communication for APSSDC smart city use cases.",
                    tags: ["Arduino", "Embedded C", "IoT"],
                    tagColors: ["text-red-400", "text-blue-400", "text-green-400"]
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
                                A showcase of impactful backend systems, machine learning applications, and full stack engineering projects
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="portfolio-item rounded-2xl overflow-hidden">
                                    <div className="relative overflow-hidden">
                                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className={`px-3 py-1 bg-opacity-20 ${project.tagColors[tagIndex]} rounded-full text-sm`} style={{backgroundColor: `rgba(${project.tagColors[tagIndex] === 'text-green-400' ? '0, 255, 136' : project.tagColors[tagIndex] === 'text-blue-400' ? '0, 212, 255' : project.tagColors[tagIndex] === 'text-purple-400' ? '168, 85, 247' : project.tagColors[tagIndex] === 'text-yellow-400' ? '250, 204, 21' : project.tagColors[tagIndex] === 'text-indigo-400' ? '129, 140, 248' : '248, 113, 113'}, 0.2)`}}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button onClick={scrollToContact} className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
                                Ready to Collaborate
                            </button>
                        </div>
                    </div>
                </section>
            );
        };

export default Portfolio;