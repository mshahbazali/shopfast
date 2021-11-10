import React from 'react'
import FooterOne from '../../components/FooterOne'
import FooterTwo from '../../components/FooterTwo'
import FooterThree from '../../components/FooterThree'
import FooterFour from '../../components/FooterFour'
export default function index() {
    return (
        <div className="bg-dark container-fluid">
            <div className="row bg-dark mt-5 p-5">
                <div className="col-lg-3 col-md-12 col-sm-12 ">
                    <FooterOne />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <FooterTwo />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <FooterThree />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <FooterFour />
                </div>
            </div>
        </div>


    )
}
