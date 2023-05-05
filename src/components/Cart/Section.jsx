import React, {useState} from 'react';
import './Section.css';
import {audioCardProduct } from '../Navitems';

const Section = (props) => {
  const [cardData, setCardData] = useState([audioCardProduct]);
  
  // const newObj = Object.assign({}, cardData);
  //const [image, name, price, category] = newObj;
  //console.log(newObj);
  return (
  <main>
  <div className='heading'><h2>{props.posterName}</h2></div> 
  <section className='section'>
    <div className='card-poster'><img src={props.posterImage} /></div>
    {cardData.map(item => (item.map(data => 
    <div className='card-data'>
    <img src={data.image} />
    <h5>{data.name}</h5>
    <p>{data.price}</p>
    </div>
  )))}
  </section>
  </main>
  )
}

export default Section;