import React from 'react'
import '../Navigation2.css'
import Drop from './Drop'
import { Dropdown } from 'react-bootstrap';


export default function Navigation2() {
    return (
        <div className='container-fluid  nav2'>
            <div className='row  '>
                <div className='col-md-12'>
                    <div className='container'>
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <Drop />
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <input className="form-control  form-control2 ms-5" type="search" placeholder="Search" aria-label="Search" />
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        All Department
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">baby & toggle</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Beauty</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Cameras</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Gaming</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Pets</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Health</Dropdown.Item>
                                        
                                    </Dropdown.Menu>
                                </Dropdown> 
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </div>
    )
}
