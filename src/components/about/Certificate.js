import React from "react";
import "./certificate.css";
const Certificate = () => {
  return (
    <div className="certificate_container d-flex align-items-center flex-wrap justify-content-between">
      <div className="certificate_item">
        <CertificateItem
          year="2019"
          title="Unlocking The Future Code"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
        />
      </div>
      <div className="certificate_item ">
        <CertificateItem
          year="2020"
          title="Data Analytics For Upskilling"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>
      <div className="certificate_item ">
        <CertificateItem
          year="2021"
          title="Fullstack WebApp Final Individual Project"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>
      <div className="certificate_item ">
        <CertificateItem
          year="2021"
          title="Certificate Of Complete UX/UI"
          text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>

      
    </div>
  );
};

const CertificateItem = ({ year, title, text }) => {
  return (
    <div className="single_certificate">
      <div className="certificate_year">{year}</div>
      <h6 className="certificate_title">
        {title} -{""}
        <span>{text}</span>
      </h6>
    </div>
  );
};

export default Certificate;
