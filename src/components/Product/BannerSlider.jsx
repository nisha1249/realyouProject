import React , {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./banner.css";
import {BuyNow, LearnButton} from "../Cart/Buttons";
import {bannerImage} from "../Navitems";

export const BannerSlider = () => {
    const [bannerData, setbannerData] = useState([bannerImage]);
   
    return(
        <>
        <Carousel 
        showThumbs={false}
        autoPlay="true"
        infiniteLoop="false"
        stopOnHover="false"
        swipeable="true"
        interval="2000">
        {bannerData.map(item => (
          item.map(data => 
        <div className = "head-text">
        <div className = "head-image">
            <img src={data.url} alt="image" /> 
        </div>
        <div className="center__text">
            <h2>{data.product}</h2>
            <p>{data.feature}</p>
            <h3>{data.price}</h3>
            <BuyNow />
            <LearnButton text="Learn More"/>
        </div>               
        </div>    
        ) 
        ))}
        </Carousel>
        </>
    )

};