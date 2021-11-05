import React from 'react'
import { Carousel } from 'antd';
import slider from '../../Assets/Images/slider.jpg'
import { Container, Navbar, Nav, Image, Offcanvas } from 'react-bootstrap'

export default function index() {
    return (
        <>
            <Carousel dotPosition={"bottom"} autoplay>
                <div className="slider">
                    <Image src={slider.src} className="sliderImage" />
                </div>
                <div className="slider">
                    <Image src={slider.src} className="sliderImage"/>
                </div>
                <div className="slider">
                    <Image src={slider.src} className="sliderImage" />
                </div>
            </Carousel>
        </>
    )
}
