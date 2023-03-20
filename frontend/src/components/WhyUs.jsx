import { useState } from "react";
import why_us_img from "../assets/img/why-us.png"
import AOS from 'react-aos';




const WhyUsSection = () => {
  const [accordionOneOpen, setAccordionOneOpen] = useState(false);
  const [accordionTwoOpen, setAccordionTwoOpen] = useState(false);
  const [accordionThreeOpen, setAccordionThreeOpen] = useState(false);
  const [accordionFourOpen, setAccordionFourOpen] = useState(false);

  const toggleAccordionOne = () => setAccordionOneOpen(!accordionOneOpen);
  const toggleAccordionTwo = () => setAccordionTwoOpen(!accordionTwoOpen);
  const toggleAccordionThree = () => setAccordionThreeOpen(!accordionThreeOpen);
  const toggleAccordionFour = () => setAccordionFourOpen(!accordionFourOpen);

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>
                Name üçin <strong>KEMAL CONSULTING</strong>
              </h3>
              <p>Bizi naçe üçin saylamaly. Sebapleri aşakda sizin üçin görkezdik!</p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a className="collapse" onClick={toggleAccordionOne}>
                    <span>1</span> Innowasiýa çözgütleri:
                    <i className={`bx ${accordionOneOpen ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i>
                  </a>
                  <div className={`collapse ${accordionOneOpen ? 'show' : ''}`} data-parent=".accordion-list">
                    <p>
                      Talyplar hökmünde meseläni çözmäge täzeçe garaýyş we üýtgeşik çemeleşýäris. Bu, müşderilerimiziň kynçylyklaryna innowasion çözgütleri hödürlemäge mümkinçilik berýär.
                    </p>
                  </div>
                </li>

                <li>
                  <a className="collapsed" onClick={toggleAccordionTwo}>
                    <span>2</span> Elýeterlilik:{" "}
                    <i className={`bx ${accordionTwoOpen ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i>
                  </a>
                  <div className={`collapse ${accordionTwoOpen ? 'show' : ''}`} data-parent=".accordion-list">
                    <p>
                      Az çykdajylarymyz, adaty konsalting firmalary bilen deňeşdirilende has arzan nyrhda ýokary hilli maslahat hyzmatlaryny berip biljekdigimizi aňladýar.
                    </p>
                  </div>
                </li>

                <li>
                  <a className="collapsed" onClick={toggleAccordionThree}>
                    <span>3</span> Şahsy üns:
                    <i className={`bx ${accordionThreeOpen ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i>
                  </a>
                  <div className={`collapse ${accordionThreeOpen ? 'show' : ''}`} data-parent=".accordion-list">
                    <p>
                    Müşderilerimiz bilen berk gatnaşyk gurmaga ynanýarys. Toparymyz, her bir müşderiniň özboluşly zerurlyklaryna düşünmek üçin wagt sarp edýär we iň oňat netijäni üpjün etmek üçin şahsy ünsi berýär.
                    </p>
                  </div>
                </li>

                <li>
                  <a className="collapsed" onClick={toggleAccordionFour}>
                    <span>3</span> Köpdürlüligi:
                    <i className={`bx ${accordionFourOpen ? 'bx-chevron-up icon-close' : 'bx-chevron-down icon-show'}`}></i>
                  </a>
                  <div className={`collapse ${accordionFourOpen ? 'show' : ''}`} data-parent=".accordion-list">
                    <p>
                    Toparymyz dürli akademiki bilimli talyplardan ybarat bolup, bize giň hünär we tejribe berýär. Bu, dürli taslamalary çözmäge we müşderilerimize maslahat hyzmatlarynyň doly toplumyny hödürlemäge mümkinçilik berýär.
                    </p>
                  </div>
                </li>
                </ul>
                </div>
              </div>
              <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img">
            <img
              src={why_us_img}
              className="img-fluid animated"
              alt=""
            />
            </div>
            </div>
            
          </div>
        </section>
  )}

  export default WhyUsSection;
