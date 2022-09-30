import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";
import ecom1 from "../../assests/images/ecom1.jpg";

import ecom2 from "../../assests/images/ecom3.jpg";
import ecom3 from "../../assests/images/ecom4.jpg";

const portfolioData = [
  {
    imgUrl: ecom1,
    title: "E-Commerce",
    url: "#",
  },

  {
    imgUrl: ecom2,
    title: "E-Commerce",
    url: "#",
  },
  {
    imgUrl: ecom3,
    title: "E-Commerce",
    url: "#",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top">
            <h6>My Work</h6>
            <h2>Portfolio</h2>
          </Col>
          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
                <div className="portfolio_content">
                  <h5>{item.title}</h5>
                  <a href={item.url}>View live demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
