import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NavBar = () => {
  return (
    <div style={{ backgroundColor: "#66ff99" }}>
      <Container
        className="  sticky-top "
        style={{ height: "50px", display: "inherit" }}
      >
        <Row>
          <Col sm="6" className=" d-flex justify-content-between ">
            <div className="footer-shroot py-2 ">Contact Us</div>
            <a href="/body" style={{ textDecoration: "none" }}>
              <div className="py-2 footer-shroot">Features</div>
            </a>
            <div className="py-2 footer-shroot">
              Buy now <i class="fa-solid fa-house-chimney"> </i>
            </div>
            <a href="/" style={{ textDecoration: "none" }}>
              <div className="py-2 footer-shroot">Home</div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>

    //d-flex justify-content-between align-items-center
    //d-flex  justify-content-between align-items-center pt-3
  );
};

export default NavBar;
