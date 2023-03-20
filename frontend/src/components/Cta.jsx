import React from "react";

function CtaSection() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Herekete Geçin!</h3>
            <p>Isleyan ugrynyza tizden tiz yerleşmek üçin howlygyn!</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Bize Jan Edin!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
