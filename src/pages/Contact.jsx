import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle') // idle | sending | success | error

    const handleQuoteSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('sending')

        const formData = new FormData(e.target)
        formData.append('access_key', '0dfe2404-afea-4812-b064-e041c94faed3')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })
            const result = await response.json()

            if (result.success) {
                setFormStatus('success')
                e.target.reset()
            } else {
                setFormStatus('error')
            }
        } catch (error) {
            setFormStatus('error')
        }
    }

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Contact Us</h1>
                <p>Get in touch with us for inquiries, quotes, or technical support</p>
            </div>

            <div className="quote-section" id="quote">
                <motion.div
                className="quote-form-wrapper"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                    <h2>Request a Quote</h2>
                    <p>Fill in your details and we'll get back to you with a tailored quote.</p>

                    <form className="quote-form" onSubmit={handleQuoteSubmit}>
                        <input type="hidden" name="subject" value="New Quote Request - Chivicrose Website" />

                        <div className="form-row">
                            <input type="text" name="name" placeholder="Full Name" required />
                            <input type="email" name="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-row">
                            <input type="text" name="company" placeholder="Company Name" />
                            <input type="text" name="location" placeholder="Location" required />
                        </div>
                        <select name="service" required defaultValue="">
                            <option value="" disabled>Select Service Required</option>
                            <option>Pumping Machines</option>
                            <option>Electric Motors</option>
                            <option>Air Blowers</option>
                            <option>Fire Fighting Equipment</option>
                            <option>Industrial Water Equipment</option>
                            <option>Solar Powered Pumps and Equipments</option>
                        </select>
                        <textarea name="message" placeholder="Additional Details (optional)" rows="4"></textarea>

                        <button type="submit" className="quote-submit-btn" disabled={formStatus === 'sending'}>
                            {formStatus === 'sending' ? 'Sending...' : 'Submit Request'}
                        </button>

                        {formStatus === 'success' && (
                            <p className="form-message success">✅ Thank you! Your quote request has been received. We'll get back to you shortly.</p>
                        )}
                        {formStatus === 'error' && (
                            <p className="form-message error">❌ Something went wrong. Please try again or contact us directly.</p>
                        )}
                    </form>
                </motion.div>
            </div>

            <div className="contact-container">
                <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                    <h2>Get In Touch</h2>
                    <p>We are available to answer your questions and provide technical consultation for all your pumping, solar, and engineering needs.</p>

                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <div>
                            <h4>Address</h4>
                            <p>Shop 2, Taiwan Line, Coker Market, Block 12, 9 Owokoniran St, Iganmu, Orile 100011, Lagos</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaPhone />
                        <div>
                            <h4>Phone</h4>
                            <p>07045151837</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaWhatsapp />
                        <div>
                            <h4>WhatsApp</h4>
                            <p>08142274668</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaEnvelope />
                        <div>
                            <h4>Email</h4>
                            <p>chivicrose.ent@gmail.com</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                className="contact-map"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                    <iframe
                    title="Chivicrose Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.8756562264844!2d3.333378312801087!3d6.46866391242549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b898413e8d5c1%3A0x44056bcbf2ce2be2!2sChivicrose%20Enterprise!5e0!3m2!1sen!2sng!4v1781972878744!5m2!1sen!2sng"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Contact