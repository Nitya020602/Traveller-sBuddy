import React,{useEffect} from "react";
import './Footer.css'
import video from '../../Assets/video.mp4'
import {AiOutlineSend} from 'react-icons/ai'
import {MdTravelExplore} from 'react-icons/md'
import {BiLogoTwitter,BiLogoYoutube,BiLogoInstagramAlt} from 'react-icons/bi'
import {SiTripadvisor} from 'react-icons/si'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="sectionContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small data-aos="fade-up">KEEP IN TOUCH</small>
                        <h2 data-aos="fade-up">Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter your email id"/>
                        <button data-aos="fade-up" className="button flex" type="submit">SEND<AiOutlineSend className="icon"/></button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="intro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdTravelExplore className="icon"/>
                                    Traveller's Buddy
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerPara">
                            On Traveller's Buddy, you can turn all your plans into trips. From flight ticket bookings, and booking hotels online to airport, rental and outstation cab booking, no travel dream is far enough. Fly to your favourite destinations with the best flight offers and make your holiday plans have amazing experiences at our vast range of hotels.
                        </div>
                        <div data-aos="fade-up" className="footerSocial flex">
                            <BiLogoTwitter className="icon"/>
                            <BiLogoYoutube className="icon"/>
                            <BiLogoInstagramAlt className="icon"/>
                            <SiTripadvisor className="icon"/>
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="2000" className="linksgrp">
                            <span className="grpTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payments
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="linksgrp">
                            <span className="grpTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Flights
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentals
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Hotels
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Guides
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="linksgrp">
                            <span className="grpTitle">
                                POLICIES
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Privacy
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Terms of use
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Terms and Conditions
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Our Policies
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small> COPYRIGHTS RESERVED - 2023 </small>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;