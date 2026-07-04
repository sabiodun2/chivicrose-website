import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import './Gallery.css'

const galleryImages = Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    image: `/images/gallery${i + 1}.jpeg`,
}))

const Gallery = () => {
    const [lightboxImage, setLightboxImage] = useState(null)

    return (
        <div className="gallery-section">
            <h2 className="section-title">Product Gallery</h2>
            <p className="gallery-subtitle">A look at more of our products and equipment</p>

            <div className="gallery-grid">
                {galleryImages.map((item) => (
                    <motion.div
                    key={item.id}
                    className="gallery-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setLightboxImage(item.image)}
                    >
                        <img src={item.image} alt={`Product ${item.id}`} />
                    </motion.div>
                ))}
            </div>
                
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                    className="gallery-lightbox-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setLightboxImage(null)}
                    >
                        <motion.div
                        className="gallery-lightbox-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        >
                            <button className="gallery-lightbox-close" onClick={() => setLightboxImage(null)}>
                                <FaTimes/>
                            </button>
                            <img src={lightboxImage} alt="Product" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Gallery