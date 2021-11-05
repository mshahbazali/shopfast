import React from 'react'
import { HeartOutlined, FileSearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import heart from '../../Assets/Icon/heart.png'
export default function index() {
    const arr = [1, 2, 3, 4]
    return (
        <>
            <div className="row mt-4 mb-5">
                {
                    arr.map(() => {
                        return (
                            <div className="col-6 col-lg-3 productBox">
                                <img src="https://demo-egenslab.b-cdn.net/html/eg-shop-fashion/v2/assets/images/product/product-1b.png" alt="" className="img-fluid" />
                                <div className="productLabel py-1 px-2">
                                    <span>Sale</span>
                                </div>
                                <div className="productOption">
                                    <span>Quick View</span>
                                </div>
                                <h4 className="productTitle">UNIQLO Man Mid Rise</h4>
                                <span className="productPrice">$290.05</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
