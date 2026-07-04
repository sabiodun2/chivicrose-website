import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const slides = [
    {
        image: '/images/slide1.jpg',
        title: 'High-Performance',
        subtitle: 'Pumping Machines',
        text: 'From installation to maintenance, we deliver dependable solutions you can trust.',
    },
    {
        image: '/images/slide2.jpg',
        title: 'Powering Water Solutions',
        subtitle: 'With Excellence and Reliability',
        text: 'Your trusted partner for pumping machines, water treatment, and solar powered solutions.',
    },
    
    {
        image: '/images/slide3.jpg',
        title: 'Reliable Pumps',
        subtitle: 'And Water Supply Systems',
        text: 'Industrial and domestic pumping solutions including Solar Powered Solutions.',
    },
]

const Hero = () =>{
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="hero">
            <AnimatePresence mode="wait">
                <motion.div
                key={current}
                className="hero-slide"
                style={{ backgroundImage: `url(${slides[current].image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                >
                    <div className="hero-overlay">
                        <motion.h1
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            {slides[current].title} <span>{slides[current].subtitle}</span>
                        </motion.h1>

                        <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        >
                            {slides[current].text}
                        </motion.p>

                        <div className="hero-buttons">
                            <motion.a
                            href="/contact#quote"
                            className="hero-btn"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.7 }}
                            >
                                Contact Us
                            </motion.a>


                            <motion.a
                            href="/services#quote"
                            className="hero-btn"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.7 }}
                            >
                                Explore Solutions
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="hero-dots">
                {slides.map((_, i) => (
                    <span
                    key={i}
                    className={`dot ${i === current ? 'active' : ''}`}
                    onClick={() => setCurrent(i)}
                />
                ))}
            </div>
        </div>
    )
}

export default Hero