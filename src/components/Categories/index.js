import React from 'react'
import Carousel from 'react-multi-carousel';
export default function index() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 34]
    return (
        <>
            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} keyBoardControl={true}>
                {
                    arr.map(() => {
                        return (
                            <div className="align-items-center m-2">
                                <img className="img-fluid" src="https://demo-egenslab.b-cdn.net/html/eg-shop-fashion/v2/assets/images/category/ct-1.png" />
                                <h3 className="fs-5 fw-bold pt-3 pb-1">DRESSES | JUMPSUITS</h3>
                                <span className="fs-6 fw-normal pb-3  d-block">Jumpsuits Mini Midi Maxi</span>
                                <button className="btn btn-outline-secondary my-1">View All</button>
                            </div>
                        )
                    })
                }

            </Carousel>
        </>
    )
}
