import React from 'react'
import takealotlogo from '../images/logo-takealot.png'
import '../Navigation.css'

export default function Navigation1() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar1">
                <img className="navbar-brand "  src={takealotlogo} style={{ height: '6rem', width: '13rem', marginLeft: '7rem' }} /> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-collapse1" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-nav1 ">
                        <a className="nav-item nav-link active" href="#">Login</a>
                        <a className="nav-item nav-link" href="#">Register</a>
                        <a className="nav-item nav-link" href="#">Orders</a>
                        <a className="nav-item nav-link " href="#">MyAccount</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}
