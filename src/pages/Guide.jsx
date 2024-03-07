import React from 'react'
import Guidesteps from '../components/Guidesteps'
import { IoAddCircle } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuPartyPopper } from "react-icons/lu";
const Guide = () => {
    return (
        <section>
            <h3 className='h3pricecard'>How It Works</h3>
            <Guidesteps
                number="1"
                title="Add your app"
                description="After making the payment, you'll need to complete a form. This form requires you to provide necessary information such as your email address and the link where testers can access your app. Fill in all the required details accurately."
                image={<MdOutlineAddToPhotos />}
            />
            <Guidesteps
                number="2"
                title="Integrate Testers"
                description="Once you've sent this information, we'll email you with the accounts of all the testers. These are the people who will be trying out your app."
                image={<FaPeopleGroup />}
            />
            <Guidesteps
                number="3"
                title="Await Completion"
                description="Now, you'll need to be patient. The testing phase takes about 14 days to complete. It usually starts within a day of adding the testers to your Google Play account. During this time, the testers will be using your app and providing feedback."
                image={<GiSandsOfTime />}
            />

            <Guidesteps
                number="4"
                title="Finalize Publishing"
                description="Congratulations! Your app is now ready to be published. After successfully completing the testing phase and receiving valuable feedback, your app is prepared for release to the public. You can now proceed with the publishing process on the Google Play Store or your chosen platform."
                image={<LuPartyPopper />}
            />


        </section>
    )
}

export default Guide