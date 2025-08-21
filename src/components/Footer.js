


import React from 'react';


const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="footer">
            <footer className="bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* About */}
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-2xl font-bold gradient-text mb-4">SRI VARDHAN MAVOORI</h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Full Stack Developer with 4+ years of experience in Java, Spring Boot, React, Node.js, AWS, and Azure. 
                                Specializing in modernizing legacy systems, boosting uptime, and delivering secure, scalable, user-focused solutions.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/sri-m-665226260"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                             
                            </div>
                        </div>

                        <div></div>

                        {/* Skills */}
                        <div>
                            <h4 className="font-semibold mb-4">Skills</h4>
                            <ul className="space-y-2">
                                <li><span className="text-gray-400 hover:text-green-400 transition-colors">Full Stack Development</span></li>
                                <li><span className="text-gray-400 hover:text-green-400 transition-colors">Cloud & DevOps (AWS, Azure, CI/CD)</span></li>
                                <li><span className="text-gray-400 hover:text-green-400 transition-colors">API & Microservices</span></li>
                                <li><span className="text-gray-400 hover:text-green-400 transition-colors">Database Design & Optimization</span></li>
                                <li><span className="text-gray-400 hover:text-green-400 transition-colors">System Modernization & Performance Tuning</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            &copy; 2025 SRI VARDHAN MAVOORI. All rights reserved. Built with passion for clean code & problem-solving.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
