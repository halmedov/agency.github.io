import React from 'react';
import hero_img from "../assets/img/hero-img.png"

function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Türkiye Respublikasynda Universitete Yerleşdirme Hyzmatlary</h1>
            <h2>Biz Türkiye Respublikasy barada ahli resminamalary resmileşdirip beryaris!</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">
                BAŞLA
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={hero_img}
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
