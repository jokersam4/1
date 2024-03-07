import React from 'react'
import hero from '../images/hero.png'
const Hero = () => {
    return (
        <main className="container5">

            <div className='herotxt'>
                <h1 className='heroh1'>20 testers for your app</h1>
                <p className='herop'>Test your app with 20 testers for 14 days. Publish your app in <br /> Google Play Store.</p>
                <button className='herobtn'>Get Started</button>
            </div>
            <div className="g">
                <img className="heroimg" src={hero} alt="hero" />
            </div>
        </main>
    )
}

export default Hero