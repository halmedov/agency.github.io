import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Hyzmatlarymyz</h2>
          <p><strong>KEMAL CONSULTING</strong>, okuwçylara öz maksatlaryna ýetmek we kynçylyklary ýeňip geçmek üçin dürli hyzmatlary hödürleýäris. Zehinli we başarnykly talyplar toparymyz, müşderilerimiziň şahsy zerurlyklaryna laýyklaşdyrylan çözgütleri almagyny üpjün edip, meseläni çözmäge täzeçe garaýyş we innowasiýa çemeleşýär.</p>
          <p>
            Hyzmatlarymyz şulary öz içine alýar:
          </p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-buildings"></i></div>
              <h4><a href="">Universitete Yerleşdirme</a></h4>
              <p>Türkiye Respublikasynda Yerleşyan 40 dan gowyrak Universitetlere Yerleşdiryaris!</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">Resminama Işleri</a></h4>
              <p>Türkiye Döwleti bilen baglanşykly ahli resminamalarynyzy doly we dogry yagdayda resmileşdirip beryaris!</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="">Tizleşdirilen Hyzmat</a></h4>
              <p>Belli bir baha garşylygynda işlerinizi adaty yagdaydan (1 ay) 3 güne çenli tizleşdiryaris!</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-layer"></i></div>
              <h4><a href="">Az Çykdayjy</a></h4>
              <p>Talyplar maslahat beriş kompaniýasy bilen işlemek arkaly, müşderiler adaty konsalting firmasy bilen işlemek bahasy bilen deňeşdirilende 50% -e çenli tygşytlap bilerler</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
