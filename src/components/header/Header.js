import React, { useRef, useEffect } from "react";
import "./header.css";
import { Container } from "reactstrap";

const navLink = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },

  {
    display: "Portfolio",
    url: "#portfolio",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("menu_active");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Phenphak</h5>
          </div>

          <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav_list">
              {navLink.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav_right d-flex align-items-center gap-4">
            <span className="mobile_menu">
              <i className="ri-menu-5-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
