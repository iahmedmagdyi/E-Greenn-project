import React from "react";
import background from "../Images/backgrond.png";
import CardBody from "./CardBody";
import { Container, Row } from "react-bootstrap";
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import ViewMore from "./ViewMore/ViewMore";
const Body = () => {
  return (
    <div
      style={{

        height: "calc(100vh - 50px)",
        backgroundImage: `url(${background})`,
        minWidth: "100%"
      }}
    >
      <Container>
        <Row className="card-body-row">
          <CardBody img={card1} word="Mioeco" />
          <CardBody img={card2} word="Greenzla" />
          <CardBody img={card1} word="Wooden tooth brush" />
        </Row>
        <Row className="" >
          <ViewMore />
        </Row>
      </Container>
    </div>
  );
};

export default Body;
