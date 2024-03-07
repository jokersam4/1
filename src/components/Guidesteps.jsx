import React from 'react'
import { IoAddCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function Pricecard({ number, title, description, image }) {

    return (
        <section className='containerguide'>
            <div className='leftguide'> <h4>{number}</h4> </div>
            <div className='middleguide'>
                <h4>{title}</h4>
                <p> {description} </p>
            </div>
            <div className='rightguide'>
                {image}
            </div>
        </section>
    )
}

export default Pricecard