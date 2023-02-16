import React from 'react'
import { Dropdown } from 'react-bootstrap';

function Drop() {
    return (
        <Dropdown>
      <Dropdown.Toggle className='open' variant="dark" id="dropdown-basic">
        Shop by Department
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    );
}

export default Drop;