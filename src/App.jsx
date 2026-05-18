import './App.css'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'

function App() {
  const name = 'John' 
  const year = new Date().getFullYear()

  return (
    <div className="App">
      <Navbar myName='Destiny' />
      <main style={{ marginTop: '80px' }}>
        <Hero />
        <section id="Home"><h1>Welcome</h1></section>
      </main>
    </div>
  )
}

export default App