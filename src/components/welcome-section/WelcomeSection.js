import React, { useRef, useEffect } from "react";
import "./welcomeSection.css";
import { Container, Row, Col } from "reactstrap";

import { init } from "ityped";
import logo from "../../assests/images/programmer.png";

const WelcomeSection = () => {
  const textRef = useRef();

  useEffect(() => {
      init(textRef.current,  { 
          backDelay:1500,
          showCursor:true, 
          strings: ['Phenphak Manphoom', 'A Full Stack Developer'] 
      })
  }, []);
  return (
    <section className="welcome_section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="welcome-content">
              <p className="mb-3">Welcome to my world!</p>

              <h2 className="welcome_title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                deserunt error placeat assumenda quasi delectus ullam
                perspiciatis numquam expedita alias! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Laboriosam, recusandae!
              </p>

              <div className="mt-4 welcome_btn d-flex align-items-center gap-4">
               
                <button className="btn"><a href="#contact">Contact Me</a></button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="welcome_img">
              <img src={logo} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeSection;
