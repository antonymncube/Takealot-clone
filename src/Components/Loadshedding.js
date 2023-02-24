import React from 'react'
import GizzuSc from '../images/GizzuSC.jpg'
import router4 from '../images/lastRouterSC.jfif'
import megapowerSC from '../images/megapowerSC.jfif'
import netology from '../images/netogySC.jfif'
import wifiRouter3SC from '../images/wifiRouter3SC.jpg'
import CarousalCart from './CarousalCart'
import hoursRC from '../images/10hoursRC.jpg'
import auroraEmergencyRC from '../images/AuroraEmergencyRC.jfif'
import LEDRC from '../images/LEDRC.jfif'
import litema from '../images/LitemaRC.jfif'
import powerUp150w from '../images/PowerUp150W.jfif'
import powerUp300w from '../images/PowerUp300W.jpg'
import PowerUpMinS8800mAh from '../images/PowerUpMinS8800mAh.jpg'
import Powerbank from '../images/20 000mAhPowerbank.jfif'
import '../Loadshedding.css'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import techbanner from '../images/tectbanner.webp'
import new1banner from '../images/newbanner.jfif'
import new2banner from '../images/new2banner.jfif'
import { Link } from 'react-router-dom'


export default function Loadshedding() {
  const details = [
    {
      heading: "Stay Connected in the Dark",
      stayconnectedinthedark: [
        { pic: GizzuSc, description: "Gizzu", price: "700" },
        { pic: router4, description: "extended router", price: "350" },
        { pic: megapowerSC, description: "Mega Power ", price: "4700" },
        { pic: netology, description: "the big one", price: "1100" },
        { pic: wifiRouter3SC, description: "Nano 3 Wifi", price: "1100" },

      ]
    },
    {
      heading: "Shop Rechargeable Light Bulbs",
      stayconnectedinthedark: [
        { pic: hoursRC, description: "Rechargeable Emergency 10 hrs", price: "1200" },
        { pic: auroraEmergencyRC, description: "Aurora Emergency LED ", price: "250" },
        { pic: LEDRC, description: "LED Light Bulb 3-pack", price: "125" },
        { pic: litema, description: "Dimmable 7W LED A60 Bayonette", price: "100" },
        { pic: LEDRC, description: "LED Light Bulb 6-pack", price: "230" },

      ]
    },
    {
      heading: "PowerUp Backup Solutions",
      stayconnectedinthedark: [
        { pic: powerUp150w, description: "PowerUp 150W UPS", price: "2700" },
        { pic: powerUp300w, description: "PowerUp 300W UPS", price: "5000" },
        { pic: PowerUpMinS8800mAh, description: "PowerUp Mini UPS 8800mAh ", price: "799" },
        { pic: Powerbank, description: "20 000mAh Powerbank", price: "450" },
        ,

      ]
    }

  ]

  return (
    <div className='bg-light'>
      <h4 className='mt-1 mainheading '>Load Shedding</h4>
      <div className='row container-fluid bg-light mt-0'>
        <div className='col-4  '>
          <div class="card categorycard" style={{ width: '14rem', marginLeft: '108px',height:'60px',borderRadius:'0px'}}>
              <p className='m-3' style={{fontSize:'17px'}}><b>category</b></p>
          </div>
          <div class="card categorycard" style={{ width: '14rem', marginLeft: '108px',height:'60px',borderRadius:'0px' }}>
              <Link className='m-3'  style={{fontSize:'15px'}}>Load-Shedding</Link>
          </div>
          <div class="card categorycard" style={{ width: '14rem', marginLeft: '108px',height:'60px',borderRadius:'0px' }}>
              <Link className='m-3'  style={{fontSize:'15px'}}>Shop Valentine</Link>
          </div>
          <div class="card categorycard" style={{ width: '14rem', marginLeft: '108px',height:'60px',borderRadius:'0px' }}>
              <Link className='m-3'  style={{fontSize:'15px'}}>Sandals Flesh</Link>
          </div>
          <div class="card categorycard" style={{ width: '14rem', marginLeft: '108px',height:'60px',borderRadius:'0px' }}>
              <Link className='m-3'  style={{fontSize:'15px'}}>Back to Varsity</Link>
          </div>
          <div class="card categorycard" style={{ width: '14rem', marginLeft: '108px',height:'60px',borderRadius:'0px' }}>
              <Link className='m-3'  style={{fontSize:'15px'}}>Cell phones</Link>
          </div>
          <div class="card categorycard" style={{ width: '14rem', marginLeft: '108px',height:'60px',borderRadius:'0px' }}>
              <Link className='m-3'  style={{fontSize:'15px'}}>Kitchen</Link>
          </div>
        </div>
        <div className='col-7  secondcol '>
          <MDBCarousel showControls className='' style={{ height: '18rem', width: '47rem', marginLeft: '0rem' }}>
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src={new1banner}
              alt='...'
              style={{ height: '20rem', width: '38rem', marginLeft: '0rem' }}
            />
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={2}
              src={new2banner}
              alt='...'
              style={{ height: '20rem', width: '38rem', marginLeft: '0rem' }}
            />
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={3}
              src={techbanner}
              alt='...'
              style={{ height: '20rem', width: '38rem', marginLeft: '0rem' }}
            />
          </MDBCarousel>
          {
            details.map(value => (
              <CarousalCart cardProducts={value} heading={value.heading} />
            ))
          }
          <div className="card mt-4 mb-5" style={{ width: '48rem' }}>
            <div className="card-body">
              <h5 className="card-title ">Shop Load Shedding Essentials on takealot.com</h5>
              <h6>Free Delivery or Collection Available</h6>
              <p className="card-text" style={{ fontSize: '13px' }}>Whether at Stage 1 or Stage 8, keep the power on with the takealot.com range of load shedding solutions. From power banks to generators, solar-powered products to lighting and electrical protectors, shop everything you need, all at great everyday prices. Don’t be left in the dark again - choose between door-to-door delivery anywhere in South Africa, or collect your load shedding essentials from a Takealot Pickup Point any day of the week.
                <br />
                <br />
                With load shedding here to stay for the foreseeable future, preparing for all scenarios is more important than ever. Load shedding place enormous strain on appliances. Protect your computer, TV and appliances and more electrical equipment with a wide range of surge protectors and UPS devices, providing you with peace of mind and uninterrupted power supply.
                <br />
                <br />
                Shop leading brands from across the world, including APC, Corsair, Mecer and more, and maintain productivity
                <h6 className='mt-2'>Generators & Solar Power Products for Every Budget</h6>
                Shop backup generators for any home or office, all from reliable, durable brands. Pay with cash-on-delivery, credit card and more, and get budget-friendly inverters and generators from Ryobi, Honda, Yahama and more delivered straight to your door. Get off the grid today over a hundred of essential solar power products, including solar panels, inverters and rechargeable batteries, all available to shop online on takealot.com.
                <h6 className='mt-2'>Never Skip A Meal With Outdoor Cooking Products</h6>
                Cook anytime, anywhere no matter the load shedding Stage. Shop quality Weber, Cadac, Megamaster and Alva braais today. Need to set up your home for electricity-free cooking? Get new gas canisters and cylinders, available at different sizes to suit any need. Looking for local solutions to solar-powered cooking? Get the Wonderbag eco-friendly slow cooker in a variety of convenient sizes.
                <h6 className='mt-2'>The Latest Power Banks & Outdoor Lighting Solutions</h6>
                Keep your mobile devices fully charged and never drop a call again. With over a hundred power bank chargers available to shop online on takealot.com, you’ll never have to worry about being disconnected from the world.
                <br />
                <br />
                Whether you need to keep the outdoor lights on, cook by candlelight or have an emergency rechargeable lightbulb for when the lights go off, you’ll find dozens of essential products, all available to shop online.
                <br />
                <br />
                Prepare your home and office today. Shop all your must-have load shedding products on takealot.com today.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
