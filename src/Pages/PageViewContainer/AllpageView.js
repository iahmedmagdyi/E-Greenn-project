import React from 'react'
import PageViewMore from './PageViewMore'
import backgrond from '../../Components/Images/backgrond.png'
import { Container, Row } from 'react-bootstrap'
import card1 from '../../Components/Images/card1.png'
import card2 from '../../Components/Images/card2.png'
const AllpageView = () => {
  return (
    <div
    style={{

      height: "100%",
      backgroundImage: `url(${backgrond})`,
      minWidth: "100%"
    }}
  >
    <Container>
      <Row className="card-body-row">
        <PageViewMore img={card1} word="Mioeco" />
        <PageViewMore img={card2} word="Greenzla" />
        <PageViewMore img={card1} word="Wooden tooth brush" />
        <PageViewMore img={card1} word="Mioeco" />
        <PageViewMore img={card2} word="Greenzla" />
        <PageViewMore img={card1} word="Wooden tooth brush" />
        <PageViewMore img={card1} word="Mioeco" />
        <PageViewMore img={card2} word="Greenzla" />
        <PageViewMore img={card1} word="Wooden tooth brush" />
        <PageViewMore img={card2} word="Greenzla" />
        <PageViewMore img={card1} word="Wooden tooth brush" />
        <PageViewMore img={card1} word="Wooden tooth brush" />
      </Row>
    
    </Container>
  </div>
  )
}

export default AllpageView
