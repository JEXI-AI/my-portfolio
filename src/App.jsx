import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVUpload from './components/CVUpload';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ✏️ CUSTOMIZED WITH YOUR INFORMATION
const portfolioData = {
  name:     'Anirah Destiny',                          // ← Your updated name
  title:    'Frontend Developer & UI Designer',       // ← Your job title
  bio:      'I build beautiful, responsive web experiences that make users smile.',
  email:    'anirahchibuzor1976@gmail.com',                    // ← Update with your email
  phone:    '+234 800 000 0000',                      // ← Update with your phone
  location: 'Lagos, Nigeria',                         // ← Update with your city
  github:   'github.com/anirah-destiny',              // ← Update with your GitHub handle
  linkedin: 'linkedin.com/in/anirah-destiny',         // ← Update with your LinkedIn profile
}

function App() {
  return (
    <div className="app">
      <Navbar ownerName={portfolioData.name} />
      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        bio={portfolioData.bio}
      />
      <About
        name={portfolioData.name}
        bio={portfolioData.bio}
        email={portfolioData.email}
        phone={portfolioData.phone}
        location={portfolioData.location}
        github={portfolioData.github}
        linkedin={portfolioData.linkedin}
      />
      <Skills />
      <Projects />
      <Education />
      <CVUpload />
      <Contact />
      <Footer ownerName={portfolioData.name} />
    </div>
  )
}

export default App;