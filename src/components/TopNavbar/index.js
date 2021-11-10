import React from 'react'
import { Container } from 'react-bootstrap'
import { FacebookFilled, CheckCircleFilled } from '@ant-design/icons';

export default function index() {
    return (
        <div style={{ backgroundColor: "#D70638" }} className="pt-2 container-fluid topnavbar row">
                    <div>
                        <div>
                            <div>
                                <p className="text-light fs-6 fw-bolder">Follow</p>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </div>
                                    <div>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </div>
                                    <div>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </div>
                                    <div>
                                        <FacebookFilled className="text-light fs-6 fw-bolder" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-light fs-6 fw-bolder text-center">Hot Line : +880 176 1111 456</p>
                    </div>
                    <div>
                        <div className="justify-content-end">
                            <div>
                                <CheckCircleFilled className="text-light fs-6 fw-bolder text-center" />
                            </div>
                            <div>
                                <p className="text-light fs-6 fw-bolder text-center">
                                    Track Order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

    )
}
