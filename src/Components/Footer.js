import React from 'react'
import  '../Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <div>
            <MDBFooter bgColor='white' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between  border-bottom'>

                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Shop
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />

                                </h6>
                                <p>
                                    <a>Clearance Sale</a>
                                </p>
                                <p>
                                    <a>Daily Deals</a>
                                </p>
                                <p>
                                    <a>App Only Deals</a>
                                </p>
                                <p>
                                    <a>Gift Vouchers</a>
                                </p>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>help</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help Centre
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Submit an Idea
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Suggest a Product
                                    </a>

                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Shipping & Delivery
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Takealot Pickup Points
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Returns
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Account</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        My Account
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        My account
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Track Order
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Returns
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Personal Details
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Invoives
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Careers
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Sell on Takealot
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Deliver for Takealot
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Press & News
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Competitions
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Terms & Conditions
                                    </a>
                                </p>
                            </MDBCol>
                        </MDBRow >
                        <MDBRow className='mt-0 secondrow'>
                            <MDBCol>
                                <p>
                                    <a href='#!' class='linksonly'>Baby & Toddler</a>/
                                    <a href='#!' class='linksonly'>Beauty</a>/
                                    <a href='#!' class='linksonly'>Books</a>/
                                    <a href='#!' class='linksonly'>Cameras</a>/
                                    <a href='#!'class='linksonly'>Camping & Outdoors</a>/
                                    <a href='#!'class='linksonly'>Cell Phones & Wearables</a>/
                                    <a href='#!'class='linksonly'>Fashion</a>/
                                    <a href='#!'class='linksonly'>Computers & Tablets</a>/
                                    <a href='#!'class='linksonly'>Gaming</a>/
                                    <a href='#!'class='linksonly'>Health</a>/
                                    <a href='#!'class='linksonly'>Home & Kitchen</a>/
                                    <a href='#!'class='linksonly'>Luggage & Travel</a>/
                                    <a href='#!'class='linksonly'>Movies & series</a>/
                                    <a href='#!'class='linksonly'>Music</a>/
                                    <a href='#!'class='linksonly'>Statinary</a>/
                                    <a href='#!'class='linksonly'>Tv and Auido</a>/
                                    <a href='#!'class='linksonly'>Pets</a>/
                                    <a href='#!'class='linksonly'>Sport</a>/
                                    
                                </p>
                            </MDBCol>
                        </MDBRow>

                    </MDBContainer>
                </section>


            </MDBFooter>
        </div>
    )
}
