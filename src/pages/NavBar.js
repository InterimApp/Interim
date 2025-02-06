import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "../assets/manpower-logo.png";
import linkedin from "../assets/linkedin.jpeg";
import facebook from "../assets/facebook.jpeg";
import instagram from "../assets/instagram.jpeg";

const NavBar = () => {
  return (
    <>
      <Row className="top-bar d-flex align-items-center px-4">
        <Col xs="auto" className="logo d-flex justify-content-start">
          <img src={logo} alt="ManPower Logo" className="img-fluid" />
        </Col>
        <Col className="d-flex justify-content-end social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
        </Col>
      </Row>

      {/* Navigation Bar */}
      <Row className="navigation d-flex justify-content-center px-4 py-3">
        <Col xs="auto"><a href="#" className="active">Accueil</a></Col>
        <Col xs="auto"><a href="#">À propos</a></Col>
        <Col xs="auto"><a href="#">Comment ça marche</a></Col>
        <Col xs="auto"><a href="#">Contact</a></Col>
      </Row>
    </>
  );
};

export default NavBar;
