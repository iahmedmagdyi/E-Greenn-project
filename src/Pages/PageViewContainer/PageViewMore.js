import React from 'react'
import { Card, Col } from 'react-bootstrap'

const PageViewMore = ({img , word}) => {
    return (
        <Col style={{ zIndex: "1" }} xs="6" lg="3" sm="6" md="4" className="d-flex" >
            <Card
                className="my-5"
                style={{
                    width: "15rem",
                    boxShadow: "rgb(102 255 153 / 1) 4px 8px 7px 3px",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    height: "22rem"


                }}
            >
                <Card.Img variant="top" src={img} className="p-3" />
                <Card.Body>
                    <div className="d-flex justify-content-end">

                    </div>
                    <Card.Text className="text-center" >{word}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">

                            <div className="pt-2" >1.99$</div>
                        </div>
                        <div
                            className="pt-2"
                            style={{ fontWeight: "bold", lineHeight: "28px" }}
                        >
                            <i class="fa-solid fa-cart-shopping " style={{ fontSize: "25px" }}></i>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PageViewMore
