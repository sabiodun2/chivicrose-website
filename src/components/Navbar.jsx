import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
        <div className="navbar-logo">
            <img src="/logo.png" alt="Chivicrose Logo" />
            <span>Chivicrose </span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Products & Services</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/contact#quote" className="navbar-quote-btn" onClick={() => setMenuOpen(false)}>
                Get a Quote
            </Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </nav>
    )
}

export default Navbar