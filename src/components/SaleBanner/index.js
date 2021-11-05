import React from 'react'
import shopping from '../../Assets/Images/shoppingbg.jpg'
export default function index() {
    return (
        <div className="saleBanner">
            <div className="saleBox">
                <span className="fs-5 text-light fw-normal pb-5">Biggest Offer</span>
                <h2 className="fs-1 text-light fw-bolder py-3 salebannertitle">Fashion Online At The Most Affordable Price</h2>
                <span className="fs-5 text-light fw-blod d-block">Sale 30% off your First Order</span>
                <button className="btn btn-light my-4">Shop Now</button>
            </div>
        </div>
    )
}
