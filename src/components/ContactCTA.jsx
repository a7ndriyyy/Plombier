import React from 'react';
import { motion } from 'framer-motion';
import './styles/ContactCTA.css'; // import the new CSS file

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="contact-cta-content"
      >
        <h2 className="contact-cta-title">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="contact-cta-text">
          Contactez-nous dès aujourd'hui pour un devis gratuit
        </p>
        <motion.a
          href="tel:0624946553"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="contact-cta-button"
        >
          Appelez maintenant
        </motion.a>
      </motion.div>
    </section>
  );
}
