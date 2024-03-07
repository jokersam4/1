import React from 'react'
import Pricecard from '../components/Pricecard'
const Price = () => {
  return (
    <section className=''>
      <h3 className="h3pricecard ">Price Table</h3>
      <p className="ppricecard">We offer competitive price</p>
      <div className='pricecontainer2'>
        <Pricecard
          title="1 CREDIT"
          description="1 application"
          price="19.99"
        // operators="2"
        />

        <Pricecard
          title="5 CREDIT"
          description="5 applications"
          price="9.99"
        // operators="2"
        />
        <Pricecard
          title="10 CREDIT"
          description="10  applications"
          price="4.99"
        // operators="2"
        />
      </div>
    </section>
  )
}

export default Price