import React from "react";
import "./experience.css";
import { Container, Row, Col } from "reactstrap";

const dataExperience = [
  {
    year: "2018-Present",
    title: "Self-Employed",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi minus facere fuga. Quisquam, alias.",
  },
  {
    year: "2015- 2018",
    title: "Accountant and Purchasing Officer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi minus facere fuga. Quisquam, alias.",
  },
  {
    year: "2010- 2013",
    title: "Production Planning",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi minus facere fuga. Quisquam, alias.",
  },
];

const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-3 ">
            <h2>Experience</h2>
          </Col>
          <Col lg="9">
            <div className="single_experience_container">
              {dataExperience.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i className="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <h5>{item.title}</h5>
                  <p>
                   {item.desc}
                  </p>
                </div>
              ))}
            </div>
            
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
