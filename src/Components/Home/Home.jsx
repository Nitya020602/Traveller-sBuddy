import React,{useEffect} from "react";
import './Home.css'
import video from '../../Assets/video1.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {LuFacebook,LuInstagram} from 'react-icons/lu'
import {SiTripadvisor} from 'react-icons/si'
import {TbApps} from 'react-icons/tb'
import {BsListTask} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="home">
            <div className="backVideo"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContents container">
                <div className="textContainer">
                    <span data-aos="fade-up" className="sText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="titleHome">
                        Search your Destination
                    </h1>
                </div>
                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="locationInput">
                        <label htmlFor="city">Search the place:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter here......"/>
                            <GrLocation className="icon"></GrLocation>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Select the date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h4 className="total">₹1000000</h4>
                        </div>
                        <div className="input flex">
                            <input type="range" max="1000000" min="50000"/>
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>
                <div data-aos="fade-up" className="homeFooter flex">
                    <div className="right">
                        <LuFacebook className="icon"/>
                        <LuInstagram className="icon"/>
                        <SiTripadvisor className="icon"/>
                    </div>
                    <div className="left">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home