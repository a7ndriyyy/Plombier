import React from 'react';
import './styles/Header.css';
import { Phone, Mail, MapPin } from 'lucide-react';
import headerBg from '../assets/plombier-card.jpg'; // your uploaded image

export default function Header() {
  return (
    <header className="header">
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${headerBg})` }}
      />
      <div className="header-overlay" />

      <div className="header-content">
        <h1>Plombier Company</h1>
        <h2>Ivanchenko Vasyl</h2>
        <p>CEO</p>

        <div className="contact-info">
          <div className="contact-item">
            <Phone />
            <span>06 24 94 65 53</span>
          </div>
          <div className="contact-item">
            <Mail />
            <span>plombiercompany@gmail.com</span>
          </div>
          <div className="contact-item">
            <MapPin />
            <span>14 rue Guy Môquet, 94500 Champigny-sur-Marne</span>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Découvrez nos services</span>
          <div className="scroll-icon">
            <div />
          </div>
        </div>
      </div>
    </header>
  );
}
