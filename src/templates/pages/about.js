import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Image from '../../static/img/neta.jpeg';

const About = ()=>{
    return(
        <>
        <Header/>
        <About_page/>
        <Footer/>
        </>
    )
}
const About_page = ()=>{
    return(
       <section className="container-fluid p-0">
            <div className="position-relative w-100 my-image1">
                <img src={Image} className="w-100" height="650px" alt="container"/>
            </div>
            <div className="container p-0">
                <div className="col-9 p-0 m-auto">
                    <div>
                        <h1 className="fs-5 text-start fw-bolder text-color mb-4">About</h1>
                    </div>
                    <div>
                        <p className="fs-fs-13 text-start">Over the past four years, my administration delivered for Americans of all backgrounds like never before. Save America is about building on those accomplishments, supporting the brave conservatives who will define the future of the America First Movement, the future of our party, and the future of our beloved country.  Save America is also about ensuring that we always keep America First, in our foreign and domestic policy.  We take pride in our country, we teach the truth about our history, we celebrate our rich heritage and national traditions, and of course, we respect our great American Flag.</p>
                    </div>
                    <div className="mt-4">
                        <ul>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                            <li className="mb-3 fs-fs-13 text-start">We are committed to defending innocent life and to upholding the Judeo-Christian values of our founding.</li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <p className="fs-fs-13 text-start">Over the past four years, my administration delivered for Americans of all backgrounds like never before. Save America is about building on those accomplishments, supporting the brave conservatives who will define the future of the America First Movement, the future of our party, and the future of our beloved country.  Save America is also about ensuring that we always keep America First, in our foreign and domestic policy.  We take pride in our country, we teach the truth about our history, we celebrate our rich heritage and national traditions, and of course, we respect our great American Flag.</p>
                    </div>
                </div>
            </div>
       </section>
    )
}
export default About;