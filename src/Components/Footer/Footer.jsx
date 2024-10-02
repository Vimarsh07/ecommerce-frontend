import React from "react";
import "./Footer.css";
import nastasilogo from "../Assets/nastasilogo.jpg";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={nastasilogo} alt="logo" />
        <p>Nastasi Foods</p>
      </div>

      <div className="footer-right">
        <p>You can reach us at!</p>
        <a
          href="https://www.google.com/maps/place/Nastasi+FOODS/@40.5443259,-74.2764414,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3b5bb4d9d5c03:0xb7cb45550ae7b5d8!8m2!3d40.5443259!4d-74.2764414!16s%2Fg%2F11pfvc_2y3?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt />
        </a>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone />
          </div>
          <p>
            <a href="tel:+7326027800">(732) 602-7800</a>
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-item gmail-icon">
            <FaEnvelope />
          </div>
          <p>
            <a href="mailto:ted@nastasifoods.com">ted@nastasifoods.com</a>
          </p>
        </div>
        <p>92 Amboy Ave, Woodbridge Township, NJ 07095, USA</p>
      </div>
    </div>
  );
};

export default Footer;