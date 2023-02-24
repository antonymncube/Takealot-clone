import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../CarousalCart.css'

export default function CarousalCart(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            itemClass: 'superLargeDesktop',
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            itemClass: 'desktop',
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            itemClass: 'mobile',
        }
    };

    const cardStyle = {
        margin: '0 10px'
        // set margin to 0 to remove spaces between cards
    };

    return (
        <div className='mt-5'>

            <h3 className='mt-3 mb-3'>{props.cardProducts.heading}</h3>
            <Carousel responsive={responsive} style={{borderBlock :'solid black 3px'}} >

                {props.cardProducts.stayconnectedinthedark.map(value => (

                    <div className='m-0' > {/* apply cardStyle here */}

                        <div class="card " style={{ width: "190px", height: '20rem'}} >
                            <img class="card-img-top" src={value.pic} style={{ padding: '1rem', height: '10rem' }} alt="Card image cap" />
                            <div class="card-body">
                                {/* <h5 class="card-title">{value.description}</h5> */}
                                <p class="card-text m-2" style={{ height: '2rem', width: '150px' }}>{value.description}</p>
                                <p class="card-text m-2 mt-"><b>R{value.price}</b></p>
                                <button className='btn btn-success mt-2'>shop</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>

    )
}