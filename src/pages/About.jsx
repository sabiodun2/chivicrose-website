import { motion } from 'framer-motion'
import { FaCheckCircle, FaHandshake, FaUsers, FaHardHat } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Powering Water Solutions with Excellence and Reliability</p>
      </div>

      <div className="about-main">
        <motion.div
          className="about-main-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Who We Are</h2>
          <p>
            Chivicrose is a technology-driven organization specializing in the sales,
            distribution, installation, maintenance, and repair of various types of pumps,
            electric motors, water treatment solutions, and solar powered equipments.
          </p>
          <p>
            We provide comprehensive water management and fluid-handling solutions to
            residential buildings, commercial establishments, industries, institutions, and
            government agencies. Through a combination of technical expertise, quality
            products, and exceptional customer service, we have positioned ourselves as a
            trusted partner for clients seeking reliable pumping solutions.
          </p>
          <p>
            Our commitment to excellence and innovation enables us to deliver efficient,
            durable, and cost-effective solutions tailored to the unique needs of every client.
          </p>
        </motion.div>

        <motion.div
          className="about-main-image"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src="/images/about.jpeg" alt="About Chivicrose" />
        </motion.div>
      </div>

      <div className="about-overview">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Company Overview</h2>
          <p>
            Chivicrose was established with the objective of bridging the gap in
            the availability of quality pumping and water treatment systems in Nigeria. 
            Recognizing the increasing demand for reliable water supply systems,
            industrial pumping equipment, solar powered equipments, and maintenance services, the company was founded
            to provide dependable solutions backed by technical expertise and customer-focused service.
          </p>
          <p>
            Since its inception, the company has grown steadily, expanding its product
            offerings and service capabilities to meet the evolving needs of individuals,
            businesses, industries, and public institutions. Today, we continue to embrace
            technological advancements and industry best practices, ensuring that clients
            receive world-class solutions that deliver long-term value.
          </p>
        </motion.div>
      </div>

      <div className="about-vision-mission">
        <motion.div
          className="vm-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Our Vision</h3>
          <p>
            To become the leading provider of innovative, efficient, and reliable pumping,
            water management, and solar powered solutions in Nigeria and across Africa.
          </p>
        </motion.div>

        <motion.div
          className="vm-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Our Mission</h3>
          <p>
            To deliver superior pumping and water management solutions through quality products,
            technical expertise, innovative technologies, and exceptional customer service
            while contributing to sustainable development and customer satisfaction.
          </p>
        </motion.div>
      </div>

      <div className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            { title: 'Integrity', desc: 'We conduct our business with honesty, transparency, and accountability.' },
            { title: 'Excellence', desc: 'We strive for outstanding performance and superior quality in all our services.' },
            { title: 'Innovation', desc: 'We continuously adopt modern technologies and industry best practices.' },
            { title: 'Customer Satisfaction', desc: 'We prioritize the needs of our customers and aim to exceed their expectations.' },
            { title: 'Professionalism', desc: 'We maintain the highest standards of competence, ethics, and service delivery.' },
            { title: 'Reliability', desc: 'We provide dependable products and services that our customers can trust.' },
            { title: 'Safety', desc: 'We ensure compliance with safety standards in all projects and operations.' },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <FaCheckCircle size={28} />
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="about-why-choose">
        <h2>Why Choose Chivicrose?</h2>
        <div className="why-choose-grid">
          {[
            'Experienced and skilled professionals',
            'High-quality and durable products',
            'Prompt and reliable service delivery',
            'Competitive pricing',
            'Customer-focused approach',
            'Innovative and technology-driven solutions',
            'Strong commitment to quality and safety',
            'Comprehensive after-sales support',
          ].map((point, i) => (
            <motion.div
              key={i}
              className="why-choose-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <FaCheckCircle />
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="about-clients">
        <h2>Our Clients</h2>
        <p className="clients-subtitle">We proudly serve a diverse range of sectors</p>
        <div className="clients-grid">
          {[
            'Homeowners', 'Real Estate Developers', 'Hotels & Hospitality',
            'Manufacturing Industries', 'Educational Institutions', 'Healthcare Facilities',
            'Government Agencies', 'Construction Companies', 'Agricultural Enterprises',
            'Commercial Organizations',
          ].map((client, i) => (
            <motion.div
            key={i}
            className="client-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="about-hse">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        >
          <FaHardHat size={40} />
          <h2>Health, Safety & Environment (HSE) Policy</h2>
          <p>
            At Chivicrose, safety remains a top priority. We are committed to
            maintaining safe working environments, protecting the health of our employees
            and clients, and minimizing environmental impact through responsible operational practices.
          </p>
        </motion.div>
      </div>

      <div className="about-partners">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        >
          <h2>Our Partners</h2>
          <div className="partners-grid">
            {[
              '/images/partner1.png',
              '/images/partner2.png',
              '/images/partner3.png',
            ].map((partner, i) => (
              <motion.div
              key={i}
              className="partner-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <img src={partner} alt={'partner ${i + 1}'}/>
              </motion.div>
            ))}
          </div>
        </motion.div>
          
        <motion.div
        className="distributors-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        >
          <h2>Authorized Distributor For</h2>
          <div className="distributors-grid">
            {[
              '/images/distributor1.png',
              '/images/distributor2.png',
              '/images/distributor3.png',
              '/images/distributor4.png',
            ].map((logo, i) => (
              <motion.div
                key={i}
                className="distributor-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <img src={logo} alt={`Distributor brand ${i + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About