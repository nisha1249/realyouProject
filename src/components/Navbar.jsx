import React, { useState , useEffect} from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { FaSearch } from "react-icons/fa";
import {navitems} from "./Navitems";
// import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [navitem, setNavitem] = useState([]);
  const getApiData = async() =>{
    try{
      setNavitem([navitems]);
    }catch{
        console.log("error");
    }
};
 useEffect(()=>{
    getApiData();
},[]);

  return (
   <>
    <div className='header'>
      <img src={logo} />
      <div className='header-options'>
        <ul>
        {navitem.map(item => (
          item.map(data => <li key={data.id}>{data.title}</li>)
        ))}
        </ul>
      </div>
      <div className='nav-option'>
        <ul>
          <li>Login  |</li>
          <li>MyOrder  |</li>
          <li>Cart</li>
        </ul>
      </div>
      <FaSearch className='search-icon'/>
    </div>
    {/* <DropdownMenu /> */}
    </>
  )
}

export default Navbar;