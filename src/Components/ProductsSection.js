import React from 'react'
import ProductCard from './ProductCard'
import '../productsection.css'



export default function ProductsSection(props) {

    return (
        <div >
            <div className=' section mt-3 '>
                <div className='row bg-light'>
                    <div className='col-md-12  '>
                        <div className='top-section topsection1'>
                            <div>
                                <h3 className='productheader'>{props.details.heading}</h3>
                            </div>

                            <div>
                                <button className='morebtn'>View{""}More</button>
                            </div>
                        </div>
                        <div className='bottom-section mt-1 bg-light'>
                            {
                                props.details.cardProducts.map(value => (
                                    <ProductCard carddetails={value} />
                                ))
                            }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
