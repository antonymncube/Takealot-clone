import React, { useDebugValue } from 'react'
import '../Product.css'

 
export default function ProductCard(props) {
  return (
    <div className='container productcontainer2  '>
      <div class="card card2 p-0 m-0" style={{width: "183px" ,height:'17rem'}} >
        <div class="card-body"  >
          <img class="card-img-top" src={props.carddetails.pic} style={{padding:'1rem',height:'8rem'}}  alt="Card image cap" />
          <p className='description'>{props.carddetails.description}</p>
          <p className='price'><b>R{props.carddetails.price}</b></p>
          <p class="fa fa-star checked " style={{color: 'orange'}}></p>
        </div>
      </div>
    </div>

  )
}

