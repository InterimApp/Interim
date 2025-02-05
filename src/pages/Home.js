import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import logo from "../assets/manpower-logo.png";
import analysis from "../assets/analysis.jpeg";
import linkedin from "../assets/linkedin.jpeg";
import facebook from "../assets/facebook.jpeg";
import instagram from "../assets/instagram.jpeg";

const Home = () => {
  return (
    <div className="first-screen-container">
      <Container fluid>
        <Row className="top-bar d-flex align-items-center px-4">
          <Col xs="auto" className="logo d-flex justify-content-start">
            <img src={logo} alt="ManPower Logo" className="img-fluid" />
          </Col>
          <Col className="d-flex justify-content-end social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
          </Col>
        </Row>

        <Row className="navigation d-flex justify-content-center px-4 py-3">
          <Col xs="auto">
            <a href="#" className="active">
              Home
            </a>
          </Col>
          <Col xs="auto">
            <a href="#">About us</a>
          </Col>
          <Col xs="auto">
            <a href="#">HIW</a>
          </Col>
          <Col xs="auto">
            <a href="#">Contact</a>
          </Col>
        </Row>

        <Row className="content-section d-flex align-items-left justify-content-center text-center">
          <Col md={6}>
            <span className="tag">#ManageWithEase</span>
            <h1>Empowering Your Workforce with Seamless Management</h1>
            <p>
              Our platform simplifies interim worker management, from hiring to
              compliance tracking, helping your business stay efficient and
              safe.
            </p>
            <Button className="start-btn">Start</Button>
            <Button className="demo-btn">Demo</Button>
          </Col>
          <Col md={6} className="image-section">
            <img src={analysis} alt="Analysis" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
