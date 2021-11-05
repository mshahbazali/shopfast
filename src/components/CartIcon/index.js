import React, { useState } from 'react'
import { Card, Avatar } from 'antd';
import { Offcanvas, Button } from 'react-bootstrap'
import { ShoppingCartOutlined, CloseCircleOutlined } from '@ant-design/icons';
export default function index() {
    const [cartShow, setCartShow] = useState(false);
    const { Meta } = Card;
    const cart = ["2", 1, 34];
    return (
        <>
            <ShoppingCartOutlined onClick={() => {
                setCartShow(!cartShow)
            }} className="iconhover text-drak fs-4 fw-light me-4" />
            <Offcanvas placement={"end"} show={cartShow} onHide={() => {
                setCartShow(!cartShow)
            }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.map(() => {
                            return (
                                <div className="row mx-1"   >
                                    <Card className="col" style={{ width: "100%", marginTop: 16 }} >
                                        <Meta
                                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                    <CloseCircleOutlined onClick={() => {
                                        setCartShow(!cartShow)
                                    }} className="col-2 position-absolute cartIcon iconhover text-drak fs-4 fw-light me-4" />
                                </div>
                            )
                        })
                    }
                    <div className="row d-flex justify-content-between my-3 mx-2" style={{ width: "100%" }}>
                        <p className="col-9 text-dark fw-bold fs-5">Subtotal :</p>
                        <p className="col text-dark fw-bold fs-5">$64.08</p>
                    </div>
                    <div>
                        <Button className="container my-2" style={{ height: "3rem" }}>CHECKOUT</Button>
                        <Button className="container my-2 mb-5" style={{ height: "3rem" }}>VIEW CART</Button>
                    </div>
                    <div>
                        <p className="text-dark fw-normal fs-6" ><span className="text-dark fw-bold fs-6" >SHIPPING: </span>Continue shopping up to $64.08 and receive free shipping. stay with EG</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
