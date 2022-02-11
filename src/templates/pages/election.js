import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Image from '../../static/img/neta.jpeg';

const Election = ()=>{
    return(
        <>
        <Header/>
        <Election_page/>
        <Footer/>
        </>
    )
}
const Election_page = ()=>{
    return(
        <section>
            <div className="position-relative w-100 my-image1 no-display">
                <img src={Image} className="w-100" height="700px" alt="container"/>
            </div>
            <div className="container p-0 mt-lg-0 mt-3 res-padding">
                <div className="">
                    <div className="">
                        <h1 className="fs-3 text-color text-start mb-4">भविष्यको योजनाहरू</h1>
                    </div>
                    <div className="bg-light shadow-sm text-start p-4 rounded">
                        <div>
                            <li className="fs-16 mb-3 mylist">नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</li>
                            <li className="fs-16 mb-3 mylist">नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</li>
                            <li className="fs-16 mb-3 mylist">नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</li>
                            <li className="fs-16 mb-3 mylist">नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</li>
                            <li className="fs-16 mb-3 mylist">नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</li>
                            <li className="fs-16 mb-3 mylist">नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</li>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    )
}

export default Election;