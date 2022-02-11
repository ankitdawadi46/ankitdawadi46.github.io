import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Image from '../../static/img/neta.jpeg';

const Contact = ()=>{
    return(
        <>
        <Header/>
        <Contact_page/>
        <Footer/>
        </>
    )
}
const Contact_page = ()=>{
    return(
        <section className="container-fuild p-0">
            <div className="position-relative w-100 my-image1 no-display">
                <img src={Image} className="w-100" height="650px" alt="container"/>
            </div>
            {/* <div className="container p-0">
                <div>
                    <h1 className="fs-5 text-start fw-bolder text-color mb-4">Contact</h1>
                </div>
                <div className="col-8 p-4 bg-white shadow-sm mb-5 rounded">
                    <div className="row m-0">
                        <div className="col p-0">
                            <input type="text" className="new-form-control1 fw-bolder w-100" placeholder="Enter Your First Name" />
                        </div>
                        <div className="col p-0 ms-3">
                            <input type="text" className="new-form-control1 fw-bolder w-100" placeholder="Enter Your Last Name" />
                        </div>
                    </div>
                    <div className="form-group mt-4">
                        <div className="col p-0">
                            <input type="Email" className="new-form-control1 fw-bolder w-100" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div className="row m-0 mt-4">
                        <div className="col p-0">
                            <input type="text" className="new-form-control1 fw-bolder w-100" placeholder="Enter Your Address" />
                        </div>
                        <div className="col p-0 ms-3">
                            <input type="tel" className="new-form-control1 fw-bolder w-100" placeholder="Enter Your Contact Number" />
                        </div>
                    </div>
                    <div className="form-group mt-4">
                        <textarea className="new-form-control2 fw-bolder w-100" placeholder="Enter Your Messege"></textarea>
                    </div>
                    <div className="mt-4 text-end">
                        <button className="btn new-submit-btn px-5 py-2 rounded-0">Submit</button>
                    </div>
                </div>
            </div> */}
            <div className="container p-0 mt-lg-0 mt-3 res-padding">
               <div>
                    <div className="">
                        <h1 className="fs-3 text-color text-start mb-4">राजनीतिक यात्रा</h1>
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
               <div className="mt-5">
                    <div className="">
                        <h1 className="fs-3 text-color text-start mb-4">कार्य र उपलब्धि</h1>
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
               {/* <div className="mt-5">
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
               </div> */}
            </div>
        </section>
    )
}
export default Contact;