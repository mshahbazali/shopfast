import React from 'react'
import FooterOne from '../../components/FooterOne'
import FooterTwo from '../../components/FooterTwo'
import FooterThree from '../../components/FooterThree'
import FooterFour from '../../components/FooterFour'
export default function index() {
    return (
        <div className="row bg-dark mt-5" style={{width: '100%'}}>
            <div className="col-3">
                <FooterOne />
            </div>
            <div className="col-3">
                <FooterTwo />
            </div>
            <div className="col-3">
                <FooterThree />
            </div>
            <div className="col-3">
                <FooterFour />
            </div>
        </div>

    )
}
