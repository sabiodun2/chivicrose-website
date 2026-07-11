import { motion } from 'framer-motion'
import './About.css'

const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <motion.div
                className="about-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                    <h2>About Us</h2>
                    <h3>Powering Pumping Solutions with Excellence and Reliability</h3>
                    <p>
                        Chivicrose Enterprise is a technology-driven organization specializing in the sales,
                        distribution, installation, maintenance, and repair of pumps, electric motors,
                        industrial plumbing systems, and domestic plumbing solutions.
                    </p>
                    <p>
                        We provide comprehensive water management and fluid-handling solutions to
                        residential buildings, commercial establishments, industries, institutions,
                        and government agencies across Nigeria.
                    </p>
                    <a href="/about" className="about-btn">Learn More</a>
                </motion.div>
        
                <motion.div
                className="about-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                <img src="/images/about.jpeg" alt="Chivicrose pump equipments" />
                </motion.div>
            </div>
        
            <div className="about-stats">
                {[
                    { number: '5+', label: 'Service Verticals' },
                    { number: '100%', label: 'Customer Satisfaction' },
                    { number: '24/7', label: 'Technical Support' },
                    { number: '10+', label: 'Years Experience' },
                ].map((stat, i) => (
                    <motion.div
                    key={i}
                    className="stat-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    >
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default About