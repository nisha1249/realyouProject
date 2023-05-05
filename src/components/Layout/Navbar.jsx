import React, { useState , useEffect} from 'react';
import './navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import {navitems} from "../Navitems"; 

const Navbar = () => {
  const [navitem, setNavitem] = useState([navitems]);

  const getApiData = async() =>{
    try{
      // const res = await axios.get("https://shashankpathe1.pythonanywhere.com/api/categories/");
      // console.log(res.category);
      setNavitem(navitem);
    }catch(error){
        console.log(error);
    }
};
 useEffect(()=>{
    getApiData();
},[]);

  return (
   <>
    <div className='header'>
     <Link to="/"> <img src='./assets/logo.png' /> </Link> 
      <div className='header-options'>
        <ul>
        {navitem.map(item => (
          item.map(data => <li key={data.id}><Link to={data.path} className='tags'>{data.title}</Link></li>)
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