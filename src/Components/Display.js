import React from 'react'
import slide1 from '../images/slide1.webp'
import BrandCarousal from './BrandCarousal'
import home50 from '../images/home50.png'
import bluebanner from '../images/bluebanner.webp'
import redbanner from '../images/redbanner.webp'
import techbanner from '../images/tectbanner.webp'
import '../Display.css'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Display() {
  return (
    <div className="container-fluid bg-white">
      <div className="row ">
        <div className="col-md-3">
          <div className="container">
            FIRST
          </div>
        </div>
        <div className="col-md-5">
          <MDBCarousel showControls className='mt-4' style={{ height: '18rem', width: '37rem', marginLeft: '0rem' }}>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={bluebanner}
              alt='...'
              style={{ height: '18rem', width: '37rem', marginLeft: '0rem' }}
            />
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={2}
              src={redbanner}
              alt='...'
              style={{ height: '18rem', width: '37rem', marginLeft: '0rem' }}
            />
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={3}
              src={techbanner}
              alt='...'
              style={{ height: '18rem', width: '500rem', marginLeft: '0rem' }}
            />
          </MDBCarousel>
          <h5 className='mt-2'>Feature Brands</h5>
          <BrandCarousal />
        </div>
        <div className="col-md-4 mt-4">
          <div class="card card1" >
            <div class="card-body">
              <h4><i>where is my order?</i></h4>
              <p>check your order</p>
              <img class="card-img-top " src={home50} alt="Card image cap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
