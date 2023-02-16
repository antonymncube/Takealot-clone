import React from 'react'
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
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>


            </MDBFooter>
        </div>
    )
}
