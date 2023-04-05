import React , {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {audioCardProduct, smartWatchCard, smartAccestCard} from './Navitems';
import './cardProduct.css';

const ProductsCard = (props) => {
  const [cardData, setCardData] = useState([audioCardProduct]);
  const [watchCard, setWatchCard] = useState([smartWatchCard]);
  const [smartAccest, setsmartAccest] = useState([smartAccestCard]);

  return (
   <>
    <div className='section'>
      <h2>{props.posterName}</h2>
      <Row>
        <Col md={6} className="card-poster"> <img src={props.posterImage} /> </Col>
    
        <div className="cards"> 
        {cardData.map(item => (item.map(data => 
         <Col md={3}>
        <div className = "card-data">
          <img src='./assets/earbuds.webp' />
          <h5>{data.name}</h5>
          <p>{data.price}</p>
        </div>
        </Col>
        )))}
        </div>
        
      </Row>
    </div>
    <div className='section2'>
      <h2>Best Wearables</h2>
      <Row>
        <Col md={6} className="card-poster"> 
          <img src='./assets/watchCard.webp' /> 
        </Col>
        <Col md={6}>
          <div className="cards">
          {watchCard.map(item => (item.map(data =>
          <div className = "card-data">
            <img src='./assets/img16.webp' />
            <h5>{data.name}</h5>
            <p>{data.price}</p>
          </div>
          )))}
          </div>
        </Col>
      </Row> 
     </div>
     <div className='section2'>
      <h2>Smart Accessories</h2>
      <Row>
        <Col md={6} className="card-poster"> 
          <img src='./assets/img11.webp' /> 
        </Col>
        <Col md={6}>
          <div className="cards">
          {smartAccest.map(item => (item.map(data =>
          <div className = "card-data">
            <img src='./assets/img12.webp' />
            <h5>{data.name}</h5>
            <p>{data.price}</p>
          </div>
          )))}
          </div>
        </Col>
      </Row> 
     </div> 
   </>
  )
}

export default ProductsCard;