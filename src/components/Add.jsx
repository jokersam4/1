import React from 'react'
import { NavLink } from 'react-router-dom'

const Add = () => {
    return (
        <section className='yourappsec'>
            <h2 className='yourh2'>Your Apps :</h2>
            <p className='yourp'>No Apps Yet</p>
            <NavLink to={'/addappnow'}>
            <button  className='primary-button mt-9 mb-8 group-even:primary-button-white rounded-lg'> Add A New App</button>
            </NavLink>
        </section>
    )
}

export default Add