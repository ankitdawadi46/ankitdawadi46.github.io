import React from "react";
import { Link } from "react-router-dom";
import Arrow from '../../static/img/next.png';

const Footer = ()=>{
    return(
        <footer className="container-fluid p-0 footer-top position-relative p-lg-5 p-2 pt-lg-5 pt-4 mt-5">
            <div className="container p-0">
                <div className="row m-0 border-bottom pb-5">
                    <div className="col-lg-10 p-0 pb-4">
                        <div className="col-lg-6 p-0">
                        <div>
                            <p className="fs-6 mb-4 text-white text-start">Join Our Movement!</p>
                        </div>
                        <div className="row m-0">
                            <div className="col p-0">
                                <input type="email" className="new-form-control fw-bolder w-100" id="myplaceholder" placeholder="Enter Your Email" />
                            </div>
                            <div className="col p-0 ms-lg-3 ms-1">
                                <input type="tel" className="new-form-control fw-bolder w-100" id="myplaceholder" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className="col-1 p-0">
                                <button className="border-0 rounded-0 form-btn"><img src={Arrow} className="form-btn-icon"/></button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg p-0 text-start ms-lg-5 mt-lg-0 mt-3">
                        <p className="fs-6 mb-4 text-white text-start">Follow Us</p>
                        <div className="d-flex">
                            <Link to="/" className="facebook-icon"><i className="fa fa-facebook-f text-white"></i></Link>
                            <Link to="/" className="ms-2 twitter-icon"><i className="fa fa-twitter text-white"></i></Link>
                            <Link to="/" className="ms-2 instagram-icon"><i className="fa fa-instagram text-white"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row m-0 pt-4">
                    <div className="col-lg-7">
                        <p className="text-white fs-11 text-start">Copyright © 2022 राज गौतम. All Rights Reserved. <a href="https://www.developersgd.com/" target="_blank" class="text-white">Design &amp; Developed by G&amp;D Developers.</a></p>
                    </div>
                    <div className="col-lg p-0 text-end no-display">
                        <ul>
                            <li className="d-inline-block px-2"><Link to="/" className="text-decoration-none text-white fs-13 fw-bolder">Privacy Policy</Link></li>
                            <li className="d-inline-block px-2"><Link to="/" className="text-decoration-none text-white fs-13 fw-bolder">Terms & Conditions</Link></li>
                            <li className="d-inline-block px-2"><Link to="/" className="text-decoration-none text-white fs-13 fw-bolder">Power By G & D Developers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;