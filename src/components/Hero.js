
import React from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = React.useState('');
    const fullText = "Hi, I'm SRI VARDHAN MAVOORI";

    React.useEffect(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < fullText.length) {
                setDisplayText(fullText.slice(0, i + 1));
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 1000);
    }, []);

    const scrollToPortfolio = () => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Section  */}
                    <div className="section-driver order-2 lg:order-1">
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                            {displayText.split('SRI VARDHAN MAVOORI').map((part, index) => 
                                index === 0 ? part : (
                                  <div>  <span key={index}>
                                        <span className="gradient-text"> SRI VARDHAN MAVOORI </span>
                                        {/* <span> MAVOORI</span> */}
                                    </span>
                                    </div>
                                )
                            )}
                        </h2>
                        
                        <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6">
                           Senior Full Stack Java Developer | Cloud & DevOps | MERN/MEAN | AWS | SQL
                        </h2>

                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Full Stack Developer with 4+ years of experience building scalable web applications using 
                            Java, Spring Boot, React, Node.js, and cloud deployments on AWS & Azure. Proven in modernizing 
                            legacy systems, improving uptime, and optimizing performance through CI/CD automation and containerization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={scrollToPortfolio} 
                                className="bg-gradient-to-r from-red-400 to-blue-500 px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300"
                            >
                                View My Work
                            </button>
                            <a href="images/RESUME_SRI_VARDHAN_MAVOORI_FS.pdf" download>
                                <button className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:border-red-400 transition-all duration-300">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative group">
                            {/* Profile Image */}
                            <div className="w-80 h-[30rem] rounded-full overflow-hidden neon-border transition duration-300 transform hover:rotate-2">
                                <img src="images/hari.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
{/* "images/rishitha1.png" */}
                            {/* Floating circle with "Hi!" icon + message — only on hover */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center shadow-lg animate-float">
                                <div className="flex flex-col items-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-6 4h6m-2 4l4-4h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h4z" />
                                    </svg>
                                    <span className="text-sm font-semibold">Hi!</span>
                                </div>
                            </div>

                            {/* Decorative floating circles */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full animate-float opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
