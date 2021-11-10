import React from 'react'
import paymentIcon from '../../Assets/Images/payment.png'
export default function index() {
    return (
        <div className="align-items-center">
            <span className="text-light fw-blod mb-4 fs-5">We Accepts:</span>
            <div className="bg-light mb-2 mt-1" style={{ width: "10%", height: "1px" }}></div>
            <div>
                <img className="my-3" src={paymentIcon.src} alt="" width="65%"/>
            </div>
        </div>
    )
}
