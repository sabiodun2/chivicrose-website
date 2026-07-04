import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Chivicrose Logo" />
                        <span>Chivicrose</span>
                    </div>
                    <p>
                        Chivicrose Enterprise is a subsidiary of Chitex Technical Works,
                        delivering engineering solutions and transforming essentials across
                        four critical service verticals.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-services">
                    <h4>Our Services</h4>
                    <span>Pump Installation</span>
                    <span>Pump Maintenance</span>
                    <span>Pump Repairs</span>
                    <span>Plumbing Solutions</span>
                    <span>Water Supply Systems</span>
                    <span>Technical Consultation</span>
                    <span>Project Management</span>
                    <a
                    href="https://g.page/r/CeIrzvLLawVEEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-link"
                    >
                        Rate Us on Google
                    </a>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p><FaMapMarkerAlt /> Shop 2, Taiwan Line, Coker Market, Block 12, 9 Owokoniran St, Iganmu, Orile 100011, Lagos</p>
                    <p><FaPhone /> 07045151837</p>
                    <p><FaWhatsapp /> 08142274668</p>
                    <p><FaEnvelope /> chivicrose.ent@gmail.com</p>
                </div>

            </div>
        
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Chivicrose Enterprise. All rights reserved.</p>
                <p>A subsidiary of Chitex Technical Works</p>
            </div>
        </footer>
    )
}

export default Footer