import React from "react";
import { RiCheckDoubleLine } from "react-icons/ri";

const AboutUsSection = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Biz Barada</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
              Biz 2015-njy yyldan bari Türkiye Respublikasynda okamak isleyan
              daşary yurtly okuwçylara ahli gerekli bolan 'CONSULTING' hyzmatyny
              beryaris!
            </p>
            <ul>
              <li>
              <RiCheckDoubleLine />
                <i className="ri-check-double-line"></i> Universitete yerleidirme
                hyzmatlary
              </li>
              <li>
              <RiCheckDoubleLine />
                <i className="ri-check-double-line"></i> Gerekli resminamalry
                resmileşdirme hyzmatlary
              </li>
              <li>
              <RiCheckDoubleLine />
                <i className="ri-check-double-line"></i> Viza, Bilet, Ikamet we
                başgada bir naçe hyzmatlary beryaris
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0">
            <p>
              Şular bilen bilelikde bizin bir naçe başga hyzmatlarymyzdan ansat,
              ynamly we arzan bahadan peydalanyp bilersiniz!
            </p>
            <p>
              Hyzmatlarymyzdan peydalanmak üçin bize e-mail arkaly yada 'CHAT'
              hyzmaty arkaly yazyp bilersiniz!
            </p>
            <a href="#" className="btn-learn-more">
              CHAT HYZMATY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
