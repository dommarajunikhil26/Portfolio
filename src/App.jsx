import NavBar from './components/Header_Footer/NavBar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/contact';
import './Resources/styles/styles.css';
import Footer from './components/Header_Footer/footer';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='bg-gray-900'>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;