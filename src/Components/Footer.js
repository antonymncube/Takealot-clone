import React from 'react'
import '../Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='' className='text-center text-lg-start text-muted mt-1'>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-3 '>
                    <MDBRow className=''>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-2 ' style={{ fontSize: 'small' }}>
                            <h6 className='text-uppercase fw-bold mb-2'>
                                Shop
                            </h6>

                            <p>
                                <a href='#!' className='text-reset'>
                                    Daily Deals
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    App Only Deals
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Clearance Sale
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Gift Vouchers
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Takealot.group
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Superbalist.com
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={{ fontSize: 'small' }}>
                            <h6 className='text-uppercase fw-bold mb-2'>help</h6>
                            <p>
                                <a href='#!' className='text-reset mt-1'>
                                    Help Centre
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Contact Us
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Submit an Idea
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Suggest a Product
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Shipping & Delivery
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Takealot Pickup Points
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Returns
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={{ fontSize: 'small' }}>
                            <h6 className='text-uppercase fw-bold mb-2'>Account</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    My Account
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Track Order
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Returns
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Personal Details
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Invoices
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={{ fontSize: 'small' }}>
                            <h6 className='text-uppercase fw-bold mb-2'>Company</h6>

                            <p>
                                <a href='#!' className='text-reset'>
                                    About Us
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Careers
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Press & News
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Competitions
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Terms & Conditions
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Human Rights Statement
                                </a>
                                <br />
                                <a href='#!' className='text-reset'>
                                    Speak Up Process
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>


        </MDBFooter>
    )
}
