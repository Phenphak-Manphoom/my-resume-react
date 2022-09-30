import React, { useState } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import logo from "../../assests/images/programmer.png";
import Education from "./Education";
import Skills from "./Skills";
import Certificate from "./Certificate";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className={`about_btn ${
                  aboutFilter === "ABOUT" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "EDUCATION" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "SKILLS" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "CERTIFICATE" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("CERTIFICATE")}
              >
                Certificate
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-25">
                  <img src={logo} alt="" className="w-100" />
                </div>
                <div className="about_content w-75">
                  <h2>I'm Phenphak Manphoom</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima illo sequi laborum nulla. Minus, officia esse a
                    adipisci laudantium aliquid.
                  </p>
                  <div className="social_links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span>
                      <a href="#">
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://github.com/phenphak?tab=repositories">
                        <i className="ri-github-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "CERTIFICATE" && <Certificate />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
