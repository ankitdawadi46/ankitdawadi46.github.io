import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import Image from '../../static/img/neta.jpeg';
import Arrow from '../../static/img/next.png';
import Congress from '../../static/img/congress.png';
import Bp from '../../static/img/bp.png';
import Sam from '../../static/img/samsher.png';
import Gan from '../../static/img/gadesh.png';
import Kris from '../../static/img/krishna.png';
import Giri from '../../static/img/girija.png';
import Sus from '../../static/img/sushil.png';
import Sher from '../../static/img/sher.jpeg';
import Nepali from '../../static/img/nepali-congress.png';
import Nepal_flag from '../../static/img/Flag_of_Nepal.png';
import Dummy from '../../static/img/dummy.png';


const Home = ()=>{
    return(
        <>
        <Header/>
        <Home_page/>
        <Footer/>
        </>
    )
}
const Home_page = ()=>{
    return(
        <section className="container-fluid p-0">
            <div className="position-relative no-display">
             <iframe width="100%" height="618px" id="gmap_canvas" src="https://maps.google.com/maps?q=chandragiri-13&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            <div className="container p-0">
                <div className="col-4 p-0 button-index position-relative text-start ms-auto no-display">
                    <h1 className="fs-1 text-white fw-bolder text-start new-text-shadow mb-5">सँगै, हामी हाम्रो राष्ट्र पुनर्निर्माण गर्दैछौं</h1>
                    <button className="btn border-0 rounded-0 btn-styles">योगदान गर्नुहोस् <img src={Arrow} className="icon-width"  alt="arrow"/></button>
                </div>
            </div>
            <div className="my-triangle col-9 p-0 ms-auto no-display">
                <div className="row m-0">
                    <div className="col-4 p-0">
                        <div className="new-triangle1"></div>
                    </div>
                    <div className="col p-0">
                    <div className="new-triangle"></div>
                    </div>
                </div>
            </div>
            <div className="no-display">
                <img src={Nepal_flag} className="nepal-flag position-absolute" alt="nepal-flag"/>
            </div>
            {/* <div className="p-5 position-relative body-margin">
                <div className="container p-0">
                    <div className="col-6 p-0 m-auto">
                        <div>
                            <h1 className="text-white fs-4">Help fulfill our promise to Make Chandragiri Great Again!</h1>
                            <p className="fs-6 mt-3 mb-4 text-white">Join Our Movement!</p>
                        </div>
                        <div className="row m-0">
                            <div className="col p-0">
                                <input type="email" className="new-form-control fw-bolder w-100" id="myplaceholder" placeholder="Enter Your Email" />
                            </div>
                            <div className="col p-0 ms-3">
                                <input type="tel" className="new-form-control fw-bolder w-100" id="myplaceholder" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className="col-1 p-0">
                                <button className="border-0 rounded-0 form-btn"><img src={Arrow} className="form-btn-icon"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-nepal-image position-relative">
                <div className="image-background p-5">
                    <div className="col-6 p-0 m-auto pt-5 pb-5">
                        <h1 className="fs-4 text-color fw-bolder">Get Involved</h1>
                        <p className="mt-3 mb-4 fs-14">On November 8, 2016, the American People delivered a historic victory and took our country back. This victory was the result of a Movement to put America first, to save the American economy, and to make America once again a shining city on the hill. But our Movement cannot stop now - we still have much work to do.</p>
                        <button className="border-0 rounded-0 btn-cont">Contribute</button>
                    </div>
                </div>
            </div> */}
            <div className="container p-0 new-mar res-padding">
                <div>
                    <h1 className="fs-3 text-color text-start mb-4">परिचय</h1>
                </div>
                <div className="bg-light shadow-sm" id="परिचय">
                    <div className="row m-0">
                        <div className="col-lg-3 p-0">
                            <img src={Image} className="w-100" height="330px" alt="pp" />
                        </div>
                        <div className="col-lg-3 p-4 ms-lg-3 text-start border-end ">
                            <p className="fs-16">नाम: राज गौतम</p>
                            <p className="fs-16">जन्म स्थान: राज गौतम</p>
                            <p className="fs-16">बुवाको नाम: राज गौतम</p>
                            <p className="fs-16">आमाको नाम: राज गौतम</p>
                            <p className="fs-16">पति/पत्नीको नाम: राज गौतम</p>
                            <p className="fs-16">शैक्षिक विवरण: स्नातक</p>
                            <p className="fs-16">अतिरिक्त गतिविधिहरू: फुटबल, क्रिकेट</p>
                        </div>
                        <div className="col-lg p-0 ms-lg-3 p-4">
                            <h1 className="text-color fs-4 text-start">सन्देश:</h1>
                            <p className="fs-6 mt-3 text-start">नेपाली श्रमजीवी वर्गको राजनीतिक प्रतिनिधिका रुपमा नेपाल कम्युनिष्ट पार्टी (एमाले)को स्थापना २००६ वैशाख १० (तदनुसार २२ अप्रिल, १९४९) मा भएको हो । नेपाली जनताको वर्गीय र सामाजिक मुक्ति, नेपालको सार्वभौमसत्ता, स्वतन्त्रता, स्वाधीनता, भौगोलिक अखण्डता र राष्ट्रिय हितको रक्षा, जनतामा निहित सार्वभौमसत्ता र लोकतान्त्रिक प्रणालीका लागि सञ्चालित सामन्तवाद– साम्राज्यवाद विरोधी सङ्घर्षका क्रममा विकास हुँदै; फुट, विभाजन तथा एकताका अनेक उतार–चढाव पार गर्दै एवम् राज्य सञ्चालनका समेत अनुभवहरु हासिल गर्दै अघि बढ्ने क्रममा यो पार्टी आज नेपाल कम्युनिस्ट पार्टी (एकीकृत माक्र्सवादी–लेनिनवादी) का रुपमा स्थापित छ ।</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 pt-4">
                    <div className="">
                        <h1 className="fs-3 text-color text-start mb-5">पार्टी विवरण</h1>
                    </div>
                    <div className="bg-light shadow-sm">
                        <div className="row m-0">
                            <div className="col-lg-2 p-0 mt-5 pt-lg-5 p-lg-4">
                                <img src={Nepal_flag} className="w-50 mt-5 pt-2" alt="party"/>
                            </div>
                            <div className="col p-4 ms-2 me-2">
                                <div>
                                    <p className="fs-2 text-color fw-bolder">Hamro party</p>
                                </div>
                                <div className="col-lg-6 p-0 m-auto">
                                    <div className="row m-0 mt-4">
                                        <div className="col p-0">
                                            <h1 className="fs-5 fw-bolder fam-12">Slogan</h1>
                                        </div>
                                        <div className="col p-0">
                                            <h1 className="fs-5 fw-bolder fam-12">Slogan</h1>
                                        </div>
                                        <div className="col p-0">
                                            <h1 className="fs-5 fw-bolder fam-12">Slogan</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0 mt-4">
                                    <div className="col-lg p-0">
                                        <img src={Dummy} className="w-100 congress-border shadow" alt="images-congress" />
                                        <p className="fs-13 text-color fw-bolder mt-4">राज गौतम</p>
                                    </div>
                                    <div className="col-lg p-0 ms-lg-5">
                                        <img src={Dummy} className="w-100 congress-border shadow" alt="images-congress" />
                                        <p className="fs-13 text-color fw-bolder mt-4">राज गौतम</p>
                                    </div>
                                    <div className="col-lg p-0 ms-lg-5">
                                        <img src={Dummy} className="w-100 congress-border shadow" alt="images-congress" />
                                        <p className="fs-13 text-color fw-bolder mt-4">राज गौतम</p>
                                    </div>
                                    <div className="col-lg p-0 ms-lg-5">
                                        <img src={Dummy} className="w-100 congress-border shadow" alt="images-congress" />
                                        <p className="fs-13 text-color fw-bolder mt-4">राज गौतम</p>
                                    </div>
                                    <div className="col-lg p-0 ms-lg-5">
                                        <img src={Dummy} className="w-100 congress-border shadow" alt="images-congress" />
                                        <p className="fs-13 text-color fw-bolder mt-4">राज गौतम</p>
                                    </div>
                                    <div className="col-lg p-0 ms-lg-5">
                                        <img src={Dummy} className="w-100 congress-border shadow" alt="images-congress" />
                                        <p className="fs-13 text-color fw-bolder mt-4">राज गौतम</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 p-0 mt-lg-5 pt-lg-5">
                                <img src={Nepal_flag} className="w-50 mt-5" alt="party"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-5 pt-4">
                        <h1 className="fs-3 text-color text-start mb-5">सभापतिको सन्देश</h1>
                    </div>
                    <div className="bg-light shadow-sm">
                        <div className="row m-0">
                            <div className="col-lg-3 p-0">
                                <img src={Dummy} className="w-100" height="380px" alt="party"/>
                            </div>
                            <div className="col-lg p-4 ms-lg-3">
                                {/* <div>
                                    <h1 className="text-color fs-5 text-start">सन्देश:</h1>
                                </div> */}
                                <div className="mt-4">
                                    {/* <p className="fs-16 text-dark text-start">नेपाल देशको उन्नति अनि नेपाली जनताको समग्र प्रगति नेपाली कांग्रेसको मुल अभिष्ट हो l वीपी कोइरालाको विचार, कैयन सहिदको बलिदान, हजारौं योद्धाको समर्पण र लाखौं सदस्यको अनवरत यात्रा हाम्रो त्यही अभिष्टमा केन्द्रित र लक्ष्यित छ l</p>
                                    <p className="fs-16 text-dark text-start">वीपी संगै सुवर्ण शमशेर, गणेशमान सिंह, कृष्णप्रसाद भट्टराई, गिरिजाप्रसाद कोइराला र सुशील कोइरालाले विभिन्न कालखण्डमा यो पार्टीको र समग्र देशको नेतृत्व गर्नुभयो l उहाँहरुको नेतृत्वमा मुलुकले हासिल गरेको राजनैतिक र आर्थिक उपलब्धिको जगमा हामीले नेपाल देशको समृद्धि र खुसी प्राप्तिको यात्रालाई अघि बढाउनु छ l</p>
                                    <p className="fs-16 text-dark text-start">राष्ट्रियता,लो कतन्त्र र समाजवादको सिद्धान्त एवं आदर्शप्रति अटुट आस्था, दृढ़ अडान र निरन्तर अभियानमा नेपाली कांग्रेस सदैब अविचलित रहनेछ l</p> */}
                                     <p className="fs-16 text-dark text-start">स्थानीय तहको निर्वाचनअघि नै कक्षा १–१० को शैक्षिकसत्र अन्त्य गरी परीक्षासमेत सञ्चालन गर्न राष्ट्रिय परीक्षा बोर्डले तयारी थालेको छ । कोभिड संक्रमणका कारण शैक्षिकसत्रको सुरुमा र अहिले पनि पठनपाठन प्रभावित बनिरहेको छ । चुनावका कारण पठनपाठन अझ प्रभावित हुन सक्ने भएकाले बोर्डले त्यसअघि नै परीक्षा सकेर नयाँ शैक्षिकसत्रको तयारी गर्न लागेको हो ।</p>
                                    <p className="fs-16 text-color fw-bolder text-start">नेपाल । </p>
                                    <p className="fs-16 text-color fw-bolder text-start">राज गौतम</p>
                                    <p className="fs-16 text-color fw-bolder text-start">सभापति, Hamro Party</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;