import React, { Component } from 'react'
import Slider from "react-slick";
import hen from '../images/henlogo.webp'
import canon from '../images/canon.webp'
import esteel from '../images/esteel.webp'
import geo from '../images/geo.webp'
import getup from '../images/getup.webp'
import campground from '../images/campground.webp'
import power from '../images/power.webp'
import '../brandc.css'

 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",color:'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class BrandCarousal extends Component {
  render() {
    const settings = {
    
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className='container main-carousal '>
        <Slider {...settings} style={{width:'35rem'}}>
          <div>
            <img src={hen}  className= 'image1'   />
          </div>
          <div>
            <img src={canon}  className= 'image1' />
          </div>
          <div>
            <img src={esteel}  className= 'image1' />
          </div>
          <div>
            <img src={power}  className= 'image1'/>
          </div>
          <div>
          <img src ={campground}  className= 'image1'  />
          </div>
          <div>
          <img src ={geo}  className='image1'  />
          </div>
          
        </Slider>
      </div>
    );
  }
}