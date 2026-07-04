import { motion } from 'framer-motion'
import { FaWater, FaSolarPanel, FaTint } from 'react-icons/fa'
import './Services.css'

const services = [
  {
    icon: <FaWater size={40} />,
    title: 'Pump Sales & Maintenance',
    description: 'Sales, installation, and maintenance of surface pumps, electric motors, air blowers, fire hydrants, submersible pumps, and industrial valves.',
  },
  {
    icon: <FaSolarPanel size={40} />,
    title: 'Solar Sales & Installation',
    description: 'Solar pumps, solar appliances, panels, and inverters for reliable off-grid power and water solutions.',
  },
  {
    icon: <FaTint size={40} />,
    title: 'Water Treatment Services',
    description: 'Water treatment materials, technical consultations, delivery and logistics, and full project management.',
  },
]

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Products & Services</h2>
        <p>Delivering excellence across all our service verticals</p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services