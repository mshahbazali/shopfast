import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FacebookFilled, CheckCircleFilled } from '@ant-design/icons';

export default function index() {
    return (
        <div style={{ backgroundColor: "#D70638" }} className="pt-2 container-fuild topnavbar">
            <Container>
                <Row className="flex-wrap">
                    <Col xs={3}>
                        <Row>
                            <Col xs={3}>
                                <p className="text-light fs-6 fw-bolder">Follow</p>
                            </Col>
                            <Col xs={6}>
                                <Row >
                                    <Col>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </Col>
                                    <Col>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </Col>
                                    <Col>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </Col>
                                    <Col>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <p className="text-light fs-6 fw-bolder text-center">Hot Line : +880 176 1111 456</p>
                    </Col>
                    <Col xs={3}>
                        <Row className="justify-content-end">
                            <Col xs={1}>
                                <CheckCircleFilled className="text-light fs-6 fw-bolder text-center" />
                            </Col>
                            <Col xs={5}>
                                <p className="text-light fs-6 fw-bolder text-center">
                                    Track Order
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>

        </div>

    )
}
