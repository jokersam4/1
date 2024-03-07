import React from 'react'
import { NavLink } from "react-router-dom";
import CoinSystem from './CoinSystem';
function Pricecard({ title, description, price, operators }) {
    // const features = [
    //     `${operators} Operators`,
    //     "Notifications",
    //     "Landing Pages",
    // ];
    return (
        <div className='containerprc'>
            <div className='pricecard'>
                <h4 className="h4price">{title}</h4>
                <p className="">{description}</p>
                <p> 20 Testers </p>

                <div className="">
                    {/* <p className=""></p> */}
                    <div className="">
                        <p className=""> {price}$ / application</p>

                        {/* <p className="">Per / month</p> */}
                    </div>
                </div>

                {/* <div className="">
                    {features.map((feature) => (
                        <p key={feature} className="">{feature}</p>
                    ))}
                </div> */}
                <NavLink to={"/addapp"}>
                    <button className="secondary-button mt-9 mb-8 group-even:primary-button-white rounded-lg">Order Now</button>

                </NavLink>
            </div>
        </div>
    )
}

export default Pricecard