import React from "react";
import { windows } from "../data/windows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/Partnership.css";

function Partnership() {
  return (
    <section className="partnership">
      <div className="container">
        <h2 className="windows-title">Notre Partneriat – Fenêtres</h2>
        <p className="windows-description">
          Nous sommes fiers de notre partenariat avec les meilleurs fabricants de
          fenêtres pour vous offrir des produits de qualité supérieure. Nos
          fenêtres sont conçues pour allier esthétique, durabilité et
          performance énergétique, garantissant ainsi votre confort et votre
          satisfaction.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1400: { slidesPerView: 3 },
            900: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="gallery-top"
        >
          {windows.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide-box">
                <img src={item.image} alt={item.title} />
                <div className="swiper-box">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partnership;
