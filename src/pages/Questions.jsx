import React from 'react'
import { CiSquareQuestion } from "react-icons/ci";

const Questions = () => {
    return (
        <section>
            <h4 className="h3pricecard ">Frequently asked questions</h4>
            <section className='questions'>

                <div className='questionsdiv'>

                    <h4 >  <CiSquareQuestion /> How does your testing work?</h4>
                    <p>We run automated tests on 20 separate Google accounts for 14 consecutive days. The testing involves interacting with your app in a human-like manner - pressing buttons, filling in inputs, etc.</p>
                    <h4>  <CiSquareQuestion /> Does 20testers work with any app?</h4>
                    <p>Yes, 20testers is compatible with all apps submitted in the Google Play Console.</p>
                    <h4>  <CiSquareQuestion /> Do you have a refund policy?</h4>
                    <p>If you are not satisfied with 20testers, you can email your refund request to get20testers@gmail.com. We accept requests up to 14 days after purchase. It would be helpful if you also provide feedback on why you would like a refund, so we can improve the product for others in the future.</p>
                </div>
                <div className='questionsdiv'>

                    <h4>  <CiSquareQuestion className='cisquare' /> What happens once I add testers?</h4>
                    <p>Once you add testers, we will take over - our automated testers will interact with your app for 14 consecutive days. After the testing process is finished, we will notify you so that you can proceed with the app release process.</p>
                    <h4>  <CiSquareQuestion /> How to prepare my app for testing?</h4>
                    <p>You need to start closed testing in the Google Play Console. We will provide instructions on how to do this and how to add testers.</p>
                    <h4>  <CiSquareQuestion />Is my data secure?</h4>
                    <p>Data security and privacy are our top priorities. Our data infrastructure is hosted on the Google Cloud platform. All data is encrypted in transit and at rest.</p>
                </div>
                <div>

                </div>

            </section>


        </section>
    )
}

export default Questions