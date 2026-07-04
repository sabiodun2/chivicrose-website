import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './ThemeToggle.css'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('chivicrose-theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('chivicrose-theme', newTheme)
    }

    return (
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    )
}

export default ThemeToggle