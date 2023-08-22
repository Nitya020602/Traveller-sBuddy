import React, { useState } from "react";
import './NavBar.css';
import {MdTravelExplore} from 'react-icons/md';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
const NavBar=()=>{
    const [open,setOpen] = useState('navigateBar')
    const show=()=>{
        setOpen('navigateBar openNavBar')
    }
    const closeNav=()=>{
        setOpen('navigateBar')
    }
    return(
        <section className="navigate">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <MdTravelExplore className="icon"/>
                            Traveller's Buddy
                        </h1>
                    </a>
                </div>
                <div className={open}>
                    <ul className="navigateLists flex">
                        <li className="navigateItem">
                            <a href="#" className="navigateLink">Home</a>
                        </li>
                        <li className="navigateItem">
                            <a href="#" className="navigateLink">Packages</a>
                        </li>
                        <li className="navigateItem">
                            <a href="#" className="navigateLink">About</a>
                        </li>
                        <li className="navigateItem">
                            <a href="#" className="navigateLink">Pages</a>
                        </li>
                        <li className="navigateItem">
                            <a href="#" className="navigateLink">Shop</a>
                        </li>
                        <li className="navigateItem">
                            <a href="#" className="navigateLink">Contact</a>
                        </li>
                        <button className="button">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div className="closeNavigate" onClick={closeNav}><AiOutlineCloseCircle className="icon"/></div>
                </div>
                <div className="toggleNavBar" onClick={show}>
                    <BsThreeDots className="icon"/>
                </div>
            </header>
        </section>
    )
}
export default NavBar