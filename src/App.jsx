import { useState, useEffect } from 'react';
// import NavBar from './components/Header_Footer/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/contact';
import Footer from './components/Header_Footer/footer';
import Projects from './components/Projects';
import HamsterWheelAnimation from './components/Animation/IntroAnimation';
import './Resources/styles/styles.css';

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationOpacity, setAnimationOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setAnimationOpacity(0);
    }, 2500);

    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-gray-900'>
      {showAnimation ? (
        <div style={{ opacity: animationOpacity, transition: 'opacity 0.5s ease-out' }}>
          <HamsterWheelAnimation />
        </div>
      ) : (
        <>
          {/* <NavBar /> */}
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
