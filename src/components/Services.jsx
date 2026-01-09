import React from 'react';
import './styles/Services.css';
import { services } from '../data/services';

export default function Services() {
  return (
    <section className="services">
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="service-card">
              <div className="service-icon">
                <Icon className="icon" />
              </div>
              <h3>{service.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
