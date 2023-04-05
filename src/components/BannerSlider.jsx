import React , {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/img1.webp';
import image2 from '../assets/img2.webp';
import image3 from '../assets/earbuds.jpg.webp';
import image4 from '../assets/phone.jpg.webp';
import "./banner.css";
import {BuyNow, LearnButton} from "./Buttons";
import {bannerImage} from "./Navitems";

export const BannerSlider = () => {
    const [bannerData, setbannerData] = useState([bannerImage]);
   
    return(
        <>
         {/* <p>{data.product}
          <img src={image2} alt="image" />
          </p> */}
        <Carousel 
        showThumbs="false"
        autoPlay="true"
        infiniteLoop="false"
        stopOnHover="false"
        swipeable="true"
        interval="2000">
        {bannerData.map(item => (
          item.map(data => 
        <div className = "head-text">
            <div className = "head-image">
                <img src={image2} alt="image" /> 
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