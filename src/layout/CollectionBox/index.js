import React from 'react'
import CollectionBoxOne from '../../components/CollectionBoxOne'
export default function index() {
    return (
        <>
            <div className="row container m-auto pt-5">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <CollectionBoxOne />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <CollectionBoxOne />
                </div>
            </div>
        </>
    )
}
