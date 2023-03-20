import React from "react";
import { AiFillEnvironment, AiFillPhone, AiFillMail } from "react-icons/ai";


const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Habarlaşyn</h2>
          <p>Bizin bilen aşakdakylar arkaly habarlaşyp bilersiniz.</p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
              <i className="bi bi-envelope"><AiFillEnvironment /></i>
                <h4>Adresimiz:</h4>
                <p>Aksaray, Fatih, Istanbul</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"><AiFillMail /></i>
                <h4>Elektron Poçta:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"> <AiFillPhone /></i>
                <h4>Telefon Nomer:</h4>
                <p>+993 65 432111s</p>
              </div>
              <iframe
                src="https://www.google.com/maps/place/Aksaray,+34096+Fatih%2F%C4%B0stanbul/@41.0034729,28.9484888,16z/data=!4m5!3m4!1s0x14caba2ad4dbf763:0xbb85112c1e0ebf1a!8m2!3d41.0060351!4d28.9484978"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Doly Adynynz</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Elektron Poçtanyz</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Mowzuk</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Yazgynyz</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Yüklenyar</div>
                <div className="error-message"></div>
                <div className="sent-message">Sizin habarynyz iberildi, Sag bolun!</div>
                </div>
                <div className="text-center"><button type="submit">Ugrat</button></div>
                </form>
              </div>

              </div>

          </div>
       </section>
  );
}

export default ContactSection;