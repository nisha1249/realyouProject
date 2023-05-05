import React, { useEffect, useState } from 'react';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import './ProductsList.css';
import {productDetails} from "../Navitems";

export const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  async function List(){
  try{
    const listData = await setProductsList(productDetails);
    console.log(listData);
  }catch(error){
    console.log("not found data");
  }
    
  }

  useEffect(()=>{
      List();
  },[]);
  
  return (
    <React.Fragment>
        <Navbar />
        <section>

        </section>
    </React.Fragment>
  )
}
