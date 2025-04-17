import React from "react";
import "./Footer.css";
import logo from "../img/livro.png";
import insta from "../img/instagram_2111463.png";
import whatsapp from "../img/whatsapp_2504957.png";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="footer-title">
        <h3>@2024-Biblioteca de Alexandria</h3>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-links">
        <img src={insta} alt="Icone Instagram" />
        <img src={whatsapp} alt="Icone Whatsapp" />
      </div>
    </section>
  );
};

export default Footer;
