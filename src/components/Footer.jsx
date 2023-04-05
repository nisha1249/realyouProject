import React from 'react';
import './Footer.css';
import enquiry from '../assets/img13.png';

const Footer = () => {

  return (
    <div className='footer'>
        <ul>
            <h6>Support</h6>
            <li>FAQ</li>
            <li>User Quide</li>
            <li>Service Center</li>
        </ul>
        <ul>
            <h6>About realyou</h6>
            <li>Our Brand</li>
            <li>Retail Store</li>
            <li>Declaration</li>
        </ul>
        <ul>
            <h6>Contact realyou </h6>
            <li>realyou@service.com</li>
            <li>order@realyou.com</li>
        </ul>
        <div className='enquiry'>
            <img src={enquiry} alt='enquiry' />
            <h5>CHAT SUPPORT</h5>
        </div>
    </div>
  )
}

export default Footer;