import React, { useEffect, useState } from 'react';
import Navbars from '../Layout/Navbars';
import Footer from '../Layout/Footer';
import { Link, useParams } from 'react-router-dom';
import './ProductsList.css';
// import {productDetails} from "../Navitems";
// import {getProducts} from "../../services/api";

export const ProductsList = () => {
  const [productsList, setProductsList] = useState([]);
  //const propertyNames = Object.entries(productsList);
  
  const { id } = useParams();
  const fetchData = async () => {
    const response = await fetch(`https://shashankpathe.pythonanywhere.com/api/categories/${id}/products/`);
    const data = await response.json();
    console.log(data[0].variants[0].images[0].image);
    console.log(data);
    setProductsList(data);
  //const productList = await getProducts(); 
  // setProductsList(productDetails);
  };
  
  useEffect(() => {
    fetchData();
  }, [id]);
  
  return (
  <React.Fragment>
  <Navbars />
  
  <main>
  {productsList.map(data =>( 
  data.variants.map((item,i) =>(
  <section>
  <div className='product-block'> 
    <Link to={`/product_details/${data.name}/${data.id}`}>
    <img src={item.images[0].image} alt='product-image' />
    </Link>
    
    <div className='product-data'>
    <h5 key={i}>{data.name}</h5>
    {data.specifications.map((list,i) =>
    <ul>
      <li key={i}>
      {list.processor}
      {list.camera}
      {list.battery}
      {list.display}
      {list.SIMtype}
      </li>
    </ul>
    )}
    </div>
    <div className='product-data'>
   
    <h5>{item.price}</h5>
   
    <p>Free Delivery</p>
    </div>
  
  </div> 
   <hr/>
   </section>
    )))
  )}
  </main>
  <Footer/>
  </React.Fragment>
  )
}
