import React, { useState , useEffect} from 'react';
import {getCategories} from "../../services/api";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import {RiListUnordered} from "react-icons/ri"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  const [navitem, setNavitem] = useState([]); 
  // console.log(`${navitem[0].name} ${navitem[0].id},`, "hello");  
  
  const getApiData = async() =>{
    try{
    const category = await getCategories();
    setNavitem(category);
    }catch(error){
      console.log(error);
    }
};
 useEffect(()=>{
    getApiData();
},[]);
 
  return (
   <main>
  <Navbar bg="light" expand="lg" className='header'>
      <Container>
      <Link to="/"> <img src='./assets/logo2.png' alt='logo'/> </Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
        {navitem.map((item,i) =>(
        <Link to={`/productslist/${item.name}/${item.id}`} key={i} className='tags header-options' >
        {item.name}</Link>
        ))}        
        </Nav>
        <Nav.Link href="/home">Login <FaUser/>    | </Nav.Link>
        <Nav.Link href="/home">MyOrder  <RiListUnordered/>    | </Nav.Link>
        <Nav.Link href="/home">Cart  <FaShoppingCart/>  </Nav.Link>
        {/* <FaSearch className='search-icon'/>  */}
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </main>
  )
  }

export default Navbars;