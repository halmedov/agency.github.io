import React from 'react';
import data_image from "../assets/img/skills.png"

const ProgressBar = ({ skill, value }) => {
  return (
    <div className="progress">
      <span className="skill">{skill}<i className="val">{value}%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{width: `${value}%`}}></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={data_image}className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Kompanyamyzyn kanagatlandyryş derejeleri</h3>
            <p className="fst-italic">
              Aşakda kompanyamyzyn eden işlerinin müşderilerimiz tarapyndan kanagatlandyryş derejelerini belledik!
            </p>

            <div className="skills-content">
              <ProgressBar skill="Yerleşdirme Derejesi" value="85" />
              <ProgressBar skill="Elyeterlilik Derejesi" value="100" />
              <ProgressBar skill="Kanagatlandyryş Derejesi" value="95" />
              <ProgressBar skill="Resmileşdirme Derejesi" value="100" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
