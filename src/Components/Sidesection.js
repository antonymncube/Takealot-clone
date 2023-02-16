import React from 'react'

export default function Sidesection(props) {
    return (
        <div>
            <div class="card card2 mt-2" >
                <div class="card-body bodycard">
                    <img class="card-img-top " src={props.sidepicture} alt="Card image cap" />
                </div>
            </div>
        </div>
    )
}
