import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function index() {

    const arr = [1, 2, 3, 4]
    return (
        <>
            <div className="row container m-auto py-5">
                {
                    arr.map(() => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                {/* <div className="count">
                                    <span>01</span>
                                </div> */}
                                <div className="stepBox">
                                    <div className="row">
                                        <div className="col-3">
                                            <ShoppingCartOutlined style={{ color: "#D70638", backgroundColor: "#fff", fontSize: "29px", padding: "9px", borderRadius: "50%" }} />
                                        </div>
                                        <span className="col-8">Our Quality</span>
                                    </div>
                                    <h2>Most Advanced Features</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
