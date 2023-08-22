import React,{useEffect} from "react";
import './Main.css'
import img1 from '../../Assets/paris.jpg'
import img2 from '../../Assets/Petra.jpg'
import img3 from '../../Assets/machu picchu.jpg'
import img4 from '../../Assets/amsterdam.jpg'
import img5 from '../../Assets/kuala lumpur.jpg'
import img6 from '../../Assets/tokyo.jpeg'
import {GrLocation} from 'react-icons/gr'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[
    {
        id:1,
        imgSrc:img1,
        desTitle:'Paris',
        location:'France',
        fees:'Rs.150000',
        description:"Paris is not just the capital of France; its the capital of fashion and the city of love. Located by the River Seine in the north of France, Paris is reputed for being the most beautiful and romantic city in the world.It is overwhelmed with culture, history, iconic architecture, arty treasures, delicious food and exciting fashion."
    }
    ,
    {
        id:2,
        imgSrc:img2,
        desTitle:'Petra',
        location:'Jordan',
        fees:'Rs.75000',
        description:"A city like no other, whose praises are mentioned throughout history, Petra is among the most visually stunning archaeological sites in the world. Believed to have been established as early as 312 BC, Petra later came under Roman rule.Petra's distinctiveness lies in being half built and half carved into red, white, pink and sandstone cliffs. "
    },
    {
        id:3,
        imgSrc:img3,
        desTitle:'Machu Picchu',
        location:'Peru',
        fees:'Rs.90000',
        description:"Located on top of a mountain in the middle of a tropical forest, it is considered the tourist attraction par excellence in Peru. The historic sanctuary is a place that captivates tourists not only for its dazzling architectural beauty, but also for its important historical-cultural legacy, which has led it to be recognized and has been designated a UNESCO World Heritage Site"
    },
    {
        id:4,
        imgSrc:img4,
        desTitle:'Amsterdam',
        location:'Netherlands',
        fees:'Rs.120000',
        description:"Capital of the Netherlands. With its famously scenic canals, rich history and iconic cultural scene, Amsterdam is one of the world's most vibrant cities.Since its construction in the 17th century, the Amsterdam canal ring has grown into one of the most unique urban landscapes in the world.It’s not for nothing, it has been designated a UNESCO World Heritage Site."
    },
    {
        id:5,
        imgSrc:img5,
        desTitle:'Kuala Lumpur',
        location:'Malaysia',
        fees:'Rs.40000',
        description:"Kuala Lumpur is the capital city of Malaysia and home to the famous Petronas Twin Towers. A self-contained city that celebrates its modern present while still honoring its distinctly Southeast Asian heritage, Kuala Lumpur's frenetic urban pace is set against a stunning backdrop; you can soak it all up at flea markets, food centers and roadside stalls, lush surrounding highlands, and shimmering waterfronts."
    },
    {
        id:6,
        imgSrc:img6,
        desTitle:'Tokyo',
        location:'Japan',
        fees:'Rs.85000',
        description:"Tokyo is located on Tokyo Bay in the Kanto region of Honshu, Japan’s largest island.Tokyo is known for its fashion and shopping, from the trendy shopping districts of Harajuku and Shibuya, to the luxury flagships of Ginza.Shinjuku is the thriving business district; a mix of gleaming skyscrapers and atmospheric back streets with tiny bars. Asakusa is the heart of Tokyo’s downtown, with ancient temples and traditional stores."
    }
]
const Main=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="main container section">
            <div className="sectionTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="sectionContent grid">
                {
                    Data.map(({id,imgSrc,desTitle,location,fees,description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="desTitle">{desTitle}</h4>
                                    <span className="containent flex">
                                        <GrLocation className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="button flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Main