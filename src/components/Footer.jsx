import React from 'react';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Plombier Company</p>
        <p>Tous droits réservés</p>
      </div>
    </footer>
  );
}
