import React from 'react';
import "../Css/Footer.css";
import { BiMailSend } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { SlSocialFacebook } from 'react-icons/sl';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

import Logo from "../Images/logo.jpeg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className='Footer-Section'>
                <div className='container'>

                    <div className='footer-section-logo-main-con'>
                        <div className='footer-section-logo-details-main-con'>
<div className='Footer-Logo-con'>
                                        <div className='Footer-Logo'>
                                            <img src={Logo} alt='img'/>
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <div className='Footer-Section-con'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='Footer-Logo-and-social-con'>
                                    {/* <div className='Footer-Logo-con'>
                                        <div className='Footer-Logo'>
                                            <img src={Logo} alt='img'/>
                                        </div>
                                    </div> */}
                                    <div className='Footer-Para'>
                                        <p>
                                        Elegant lines and subtle details showcase the salon’s commitment to quality, precision, and delivering exceptional hair care services.
                                        </p>
                                    </div>
                                    {/* <div className='Footer-Social-Con'>
                                        <div className='Footer-Social'>
                                            <a href="">
                                                <IoCallOutline />
                                            </a>
                                        </div>
                                        <div className='Footer-Social'>
                                            <a href="" target='blank'>
                                                <BsWhatsapp />
                                            </a>
                                        </div>
                                        <div className='Footer-Social'>
                                            <a href='' target='blank'>
                                                <BsInstagram />
                                            </a>
                                        </div>
                                        <div className='Footer-Social'>
                                            <a href="" target='blank'>
                                                <FiMail />
                                            </a>
                                        </div>
                                        <div className='Footer-Social'>
                                            <a href='' target='blank'>
                                                <SlSocialFacebook />
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div className='col-md-3'>
                                <div className='Footer-Quick-Link-con'>
                                    <h2 className='footer-head-underline'>My Account</h2>
                                    <ul>
                                        <li>
                                            <Link to="/privacy-policy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-conditions">
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/ReturnsPolicy">
                                                Refund & Returns Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className='col-md-3'>
                                <div className='Footer-Quick-Link-con'>
                                    <h2 className='footer-head-underline'>Quick Link</h2>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/salon-for-hair-treatment-matunga">
                                                Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/hair-cutting-salon-matunga">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/hair-salon-near-matunga">
                                                Contact
                                            </Link>
                                        </li>
                                         {/* <li>
                                            <Link to="/privacy-policy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-conditions">
                                                Terms & Conditions
                                            </Link>
                                        </li> */}
                                    </ul>

                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='Footer-contact-Details-con'>
                                    <div className='Footer-Quick-Link-con'>
                                        <h2 className='footer-head-underline'>
                                            Talk To Us
                                        </h2>
                                    </div>
                                    <div className='Footer-contact-Details-call'>
                                        <a>
                                            <IoCallOutline />
                                            <div className='Footer-contact'>
                                                <h2><a href="tel:7400457777">+91 74004 57777</a></h2>
                                                <h2><a href="tel:9029176825">+91 90291 76825</a></h2>
                                                <h2><a href="tel:9820035475">+91 98200 35475</a></h2>
                                                <h2><a href="tel:9920035475">+91 99200 35475</a></h2>
                                            </div>
                                        </a>
                                        <a href="mailto: jutiepie99@gmail.com">
                                            <BiMailSend />
                                            <h2>ohairmatunga@gmail.com</h2>
                                        </a>
                                        <a href='https://maps.app.goo.gl/7qgtUGLAoD3WnLaj7' target='blank'>
                                            <MdOutlineLocationOn />
                                            <h2>Ground Floor, Mahavir Building, 207, New, Telang Rd, next to Post Office, Matunga East, Mumbai, Maharashtra 400019</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='footer-map-con'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.57821834869!2d72.85303809999999!3d19.02824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1d639a500f%3A0x9436bf615ae36356!2sO&#39;Hair!5e1!3m2!1sen!2sin!4v1737619058736!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='Footer-Section-Copy-con'>
                    <h2>Designed By <a href='https://skdm.in/' target='blank'> Shree Krishna Digital Marketing.</a></h2>
                    <h3>Copyright © 2025, All Right Reserved [ o hair matunga ]</h3>
                </div>
            </section>
        </>
    )
}

export default Footer