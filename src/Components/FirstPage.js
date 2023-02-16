import React from 'react'
import Navigation1 from './Navigation1'
import Navigation2 from './Navigation2';
import Display from './Display'
import ProductsSection from './ProductsSection';
import load1 from '../images/load1.webp'
import generator from '../images/generator.jfif'
import stove from '../images/stove.jfif'
import gascyliner from '../images/gascylinder.jpg'
import vilentinebear from '../images/vilentinebear.webp'
import perdume1 from '../images/perfume1.jfif'
import DRESS from '../images/DRESS.jfif'
import handlotion from '../images/handlotion.jfif'
import sandal from '../images/sandal1.jfif'
import kappa from '../images/kappa.jpg'
import posh from '../images/poshmake.jfif'
import panther from '../images/panther.jfif'
import laptop from '../images/laptop.jfif'
import calculator from '../images/calculator.jfif'
import studytable from '../images/studytable.jfif'
import router from '../images/router.jfif'
import visible from '../images/visible.png'
import apple from '../images/apple.png'
import Varsity from '../images/visible.png'
import delivery from '../images/delivery.png'
import camping from '../images/camping.png'
import pick from '../images/pick.png'
import besthome from '../images/besthome.png'
import '../firstpage.css'
import Sidesection from './Sidesection';
import Footer from './Footer';

export default function FirstPage() {
    const details = [
        {
            heading: "Load-shedding",
            cardProducts: [
                { pic: load1, description: "Cadac", price: "1700" },
                { pic: generator, description: "Generator", price: "2000" },
                { pic: stove, description: "Gas stove", price: "4700" },
                { pic: gascyliner, description: "the big one", price: "1100" }

            ]
        },
        {
            heading: "Shop Valentine",
            cardProducts: [
                { pic: vilentinebear, description: "Bear", price: "700" },
                { pic: perdume1, description: "KENZO", price: "2000" },
                { pic: DRESS, description: "Dress", price: "1700" },
                { pic: handlotion, description: "the big one", price: "300" }
            ]
        },
        {
            heading: "Sandals Flash",
            cardProducts: [
                { pic: sandal, description: "Nike sandal", price: "1200" },
                { pic: kappa, description: "Kappa sandal", price: "1000" },
                { pic: posh, description: "Poshmake sandals", price: "1050" },
                { pic: panther, description: "Panther", price: "800" }
            ]
        },
        {
            heading: "Back to Varsity",
            cardProducts: [
                { pic: laptop, description: "HP laptop i3 core", price: "5000" },
                { pic: calculator, description: "Casio claulator", price: "250" },
                { pic: studytable, description: "study Table", price: "350" },
                { pic: router, description: "router", price: "800" }
            ]
        }
    ]
    return (
        <div>
            <Navigation1 />
            <Navigation2 />
            <Display />
            <div className='container-fluid bg-light mt-3 '>
                <div className='row container row1'>
                    <div className='col-md-1'></div>
                    <div className='col-md-8 productposition'>
                        {
                            details.map(value => (
                                <ProductsSection details={value} />
                            ))
                        }
                    </div>
                    <div className='col-md-3  container card2'>
                        <Sidesection sidepicture={apple} />
                        <Sidesection sidepicture={visible} />
                        <Sidesection sidepicture={pick} />
                        <Sidesection sidepicture={delivery} />
                        <Sidesection sidepicture={besthome} />
                        <Sidesection sidepicture={camping} />
                    </div>

                </div>
            </div> 
            <div className='row container-fluid'>
                <div className='col-md'>
                    <Footer className=' mt-5'/>
                </div>
                </div>   
        </div>

    )
}