import { useState } from 'react'
import "./Navbar.css"

function Navbar({myName}) {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar_brand">
                <span className="logo"></span>
                <span className="navbar_name">{myName}</span>
            </div>
            <button className="navbar_hamburger" onClick={toggleMenu}>
                {/* Using a ternary to switch between X and Hamburger icon */}
                {menuOpen ? 'X' : '☰'}
            </button>
            {/* The class 'open' here now matches the fixed CSS */}
            <ul className={`navbar_links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#Home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#About" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#Skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#Project" onClick={() => setMenuOpen(false)}>Project</a></li>
                <li><a href="#Education" onClick={() => setMenuOpen(false)}>Education</a></li>
                <li><a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar