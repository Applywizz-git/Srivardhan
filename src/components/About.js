import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const certificationSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,            // Auto slide enabled
  autoplaySpeed: 2000,       // Slide every 2 seconds
  pauseOnHover: true,        // Pause when hovering
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

 

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full Stack Java Developer passionate about building scalable, high-performance applications 
            with expertise in cloud technologies, DevOps, and modern frontend frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-700">
              <img src="images/ideas.jpeg" alt="About Me" className="w-full h-full object-fill" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Turning Ideas into Scalable Solutions</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm <strong>SRI VARDHAN MAVOORI</strong>,a Full Stack Developer with 4+ years’ experience in Java, Spring Boot, React, Node.js, AWS, and Azure, specializing in modernizing systems, boosting uptime, and delivering secure, scalable, user-focused solutions via CI/CD and containerization.
            </p>
           
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">3</h4>
                <p className="text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">4+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">10+</h4>
                <p className="text-gray-400">Technologies Mastered</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold gradient-text mb-2">99.99%</h4>
                <p className="text-gray-400">Uptime Achieved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
  

         <div className="mb-16 mt-20">
          <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            Edu<span className="gradient-text">cation</span>
          </h3>
          
              <div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-white mb-1 text-center">
  Master of Science in Electrical Engineering
</h4>

       
              <p className="text-gray-400 text-center">university of Colorado Denver</p>
              <p className="text-gray-500 text-sm mt-1 text-center">Aug 2021 - May 2022</p>
            </div>
          
           </div>
        </div> 

        {/* Certifications */}
       
<div className="mb-16 mt-20">
  <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8">
    Certifi<span className="gradient-text">cations</span>
  </h3>
  <Slider {...certificationSettings}>
    {[
      {
        title: "AWS Certified Solutions Architect – Associate",
        provider: "Amazon Web Services",
      },
      {
        title: "Docker Certified Associate",
        provider: "Docker",
      },
      {
        title: "BM AI Practitioner",
        provider: "Coursera",
      },
      {
        title: "Google Data Analytics Professional Certificate",
        provider: "Coursera",
      },
      {
        title: "Full-Stack Web Development with React Specialization",
        provider: "Coursera",
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        provider: "CodeCamp",
      },
      {
        title: "Agile Development Specialization",
        provider: "Coursera",
      }
    ].map((cert, index) => (
      <div className="px-1" key={index}>
        <div
          className="w-72 h-72 mx-auto bg-gray-800 p-6 flex flex-col justify-center items-center text-center rounded-full border border-transparent bg-clip-padding hover:shadow-lg transition duration-300"
          style={{
            borderImage: "linear-gradient(135deg, #ff5100ff, #009dffff) 1",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full mb-2">Certified</span>
          <h4 className="text-xl font-semibold text-white mb-2">{cert.title}</h4>
          <p className="text-gray-400">{cert.provider}</p>
        </div>
      </div>
    ))}
  </Slider>
</div>

      

        {/* Experience */}
        <div className="mb-16 mt-20">
          <h3 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            Ex<span className="gradient-text">perience</span>
          </h3>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="px-4">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition text-center">
                <h4 className="text-xl font-semibold text-white mb-1">Senior Full Stack Developer</h4>
                <p className="text-gray-400">State of Michigan</p>
                <p className="text-gray-500 text-sm mt-1">May 2022 - Present </p>
                <p className="text-gray-400 mt-4">
                  Led development of citizen service portals using MERN stack deployed on AWS EC2, achieving 35% faster service request completion. 
                  Modernized legacy LAMP applications into microservices, ensuring 99.99% uptime and reducing infrastructure costs by 20%.
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition text-center">
                <h4 className="text-xl font-semibold text-white mb-1">Full Stack Developer</h4>
                <p className="text-gray-400">Tech Mahindra, India</p>
                <p className="text-gray-500 text-sm mt-1">May 2019 - Aug 2021</p>
                <p className="text-gray-400 mt-4">
                  Built enterprise applications with Angular, Node.js, and PostgreSQL, optimizing queries and reducing heavy-report load times by 40%. 
                  Created reusable UI component libraries, accelerating feature delivery by ~20%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
