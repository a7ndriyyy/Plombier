import React from 'react';
import './styles/Portfolio.css';
import { portfolio } from '../data/portfolio';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Nos Réalisations</h2>
      <div className="portfolio-grid">
        {portfolio.map((item) => (
          <div key={item.id} className="portfolio-card">
            <img src={item.image} alt={item.title} />
             <div className="portfolio-overlay">
              <span className="portfolio-category">{item.category}</span>
              <h3 className="portfolio-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
