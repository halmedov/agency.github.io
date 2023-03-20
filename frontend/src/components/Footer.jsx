import React from "react";


function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top bg-#37517e text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact text-white">
              <h3>KEMAL CONSULTING</h3>
              <p>
                Aksaray, Fatih <br />
                Istanbul<br />
                Türkiye <br />
                <br />
                <strong>Telefon:</strong> +993 65 432111<br />
                <strong>Elektorn Poçta:</strong> info@example.com<br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Peydaly Linkler</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Baş Sahypa</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Biz Hakynda</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Hyzmatlarymyz</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Ulanyş Şertlerimiz</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Gizlilik Politikamyz</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Hyzmatlarymyz</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Universitete Yerleşdirme</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Resminamalaşdyrma</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Bilet</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Viza</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Ikamet</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Habarlaşyn</h4>
              <ul>
                <li>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="" />
                  <a style={{paddingInlineStart:10}} href="#">@tmvisa</a>
                </li>
                <li>
                <img src="https://w7.pngwing.com/pngs/835/494/png-transparent-iphone-imo-im-videotelephony-viber-electronics-text-trademark.png" alt="" />
                  <a style={{paddingInlineStart:10}} href="#">+993 65 432111</a>
                </li>
                <li>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/ICQNewlogo.svg/1200px-ICQNewlogo.svg.png" alt="" />
                  <a style={{paddingInlineStart:10}} href="#">+993 65 432111</a>
                </li>
                <li>
                  <img src="https://mena.news/wp-content/uploads/2021/03/telegram-logo.png" alt="" />
                  <a style={{paddingInlineStart:10}} href="#">+993 65 432111</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix d-flex align-items-center">
        <div className="copyright">&copy; {new Date().getFullYear()}{" "}<strong>
          <span>KEMAL CONSULTING</span></strong>.All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
