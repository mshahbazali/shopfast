import React, { useState } from 'react'
import Categories from '../../components/Categories'
export default function index() {

    return (
        <div className="productSelction container mt-2 text-center align-items-center">
            <h2 className="fw-bolder lh-lg">ALL CATEGORY</h2>
            <div className="mt-5">
                <Categories />
            </div>
        </div>
    )
}
