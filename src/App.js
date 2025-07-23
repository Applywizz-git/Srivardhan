// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;




// // Main App Component (App.js)
//         const App = () => {
//             React.useEffect(() => {
//                 // Navbar background change on scroll
//                 const handleScroll = () => {
//                     const nav = document.querySelector('nav');
//                     if (window.scrollY > 100) {
//                         nav.classList.add('bg-opacity-95');
//                     } else {
//                         nav.classList.remove('bg-opacity-95');
//                     }
//                 };

//                 window.addEventListener('scroll', handleScroll);

//                 // Intersection Observer for animations
//                 const observerOptions = {
//                     threshold: 0.1,
//                     rootMargin: '0px 0px -50px 0px'
//                 };

//                 const observer = new IntersectionObserver((entries) => {
//                     entries.forEach(entry => {
//                         if (entry.isIntersecting) {
//                             entry.target.style.opacity = '1';
//                             entry.target.style.transform = 'translateY(0)';
//                         }
//                     });
//                 }, observerOptions);

//                 // Observe elements for animation
//                 setTimeout(() => {
//                     document.querySelectorAll('.skill-card, .portfolio-item').forEach(el => {
//                         el.style.opacity = '0';
//                         el.style.transform = 'translateY(30px)';
//                         el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//                         observer.observe(el);
//                     });
//                 }, 100);

//                 return () => {
//                     window.removeEventListener('scroll', handleScroll);
//                 };
//             }, []);

//             return (
//                 <div>
//                     <Header />
//                     <Hero />
//                     <About />
//                     <Skills />
//                     <Portfolio />
//                     <Contact />
//                     <Footer />
//                 </div>
//             );
//         };

//         // Render the App
//         ReactDOM.render(<App />, document.getElementById('root'));
    

// Main App Component (App.js)
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // or your global CSS file that has the dark theme styles


const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
        nav?.classList.add('bg-opacity-95');
      } else {
        nav?.classList.remove('bg-opacity-95');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    setTimeout(() => {
      document.querySelectorAll('.skill-card, .portfolio-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
