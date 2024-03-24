import { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/contact';
import Footer from './components/Header_Footer/footer';
import Projects from './components/Projects';
import HamsterWheelAnimation from './components/Animation/IntroAnimation';
import '../public/Resources/styles/styles.css';

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
    <>
      {showAnimation ? (
        <div style={{ opacity: animationOpacity, transition: 'opacity 0.5s ease-out' }} className="bg-[url('../public/Resources/Images/banner-bg.png')]">
          <HamsterWheelAnimation />
        </div>
      ) : (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
