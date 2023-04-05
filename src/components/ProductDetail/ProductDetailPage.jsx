import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './ProductDetailPage.css';
import Navbar from '../Navbar';
import {productDetails} from '../Navitems';
import {CgSmartphoneChip, CgSmartphone, CgSmartphoneRam} from "react-icons/cg";
import {BiCamera} from "react-icons/bi";
import { CiBatteryCharging } from "react-icons/ci";
import Footer from '../Footer';
import {BuyNow, LearnButton} from '../Buttons';

const ProductDetailPage = () => {

  const [products, setProducts] = useState([productDetails]);
  const [viewImage, setViewImage] = useState(products[0][0]);
  console.log(products[0][0].url);
  const[add,setAdd] = useState(1);
  const[sub,setSub] = useState(1);
  const quatity =() =>{
    setSub(add+1);
    setSub(sub-1);
  };
  
  return (
    <>
      <Navbar />
      <div>
      {products.map(item =>(
            item.map(data =>
        <Row>
          <Col md={6}>
            <section className='preview-product'>
            <img src={viewImage.url} alt='realme-smart phone' />
            <div className='all-preview-product'>
              <figure>
              {data.thumbnail.map(img=> 
              <img src={img.url} alt='preview-product' onClick={() =>setViewImage(img)} />)}
              </figure>
            </div>
            </section>
          
          </Col>
          <Col md={6}>
            <section className='products-detail'>
            <h4>{data.product}</h4> 
            <h5>{data.price}</h5>  
            <p>Combo Offer</p>
            <div className='features'>
              <div className='f-icons'>
              <CgSmartphoneChip />
              <h6>{data.features.processor}</h6>
              <p>Processor</p>
              </div>
              <div className='f-icons'>
              <BiCamera />
              <h6>{data.features.camera}</h6>
              <p>Camera</p>
              </div>
              <div className='f-icons'>
              <CiBatteryCharging /> 
              <h6>{data.features.battery}</h6>
              <p>Battery</p>
              </div>
              <div className='f-icons'>
              <CgSmartphone />  
              <h6>{data.features.display}</h6>
              <p>Display</p>
              </div>
              <div className='f-icons'>
              <CgSmartphoneRam />  
              <h6>{data.features.storage}</h6> 
              <p>Storage & RAM</p>
              </div>
            </div>
            </section>

          <section className='phone-cc'>
          <h4>Color</h4>
          <div className='phone-color'>
          {data.color.map(items=> 
          <button>{items}</button>
          )}
          </div>
          <h4>Configuration</h4>
          <div className='phone-config'>
          {data.configuration.map(items=> 
          <button>{items}</button>
          )}
          </div>
          </section>

          <section className='pincode'>
          <div className='quatity'>
          <h4>Quatity</h4>
          <button onClick={quatity}>{sub}
          {/* <p onClick={quatity}>-</p> {num} <p onClick={quatity}>+</p> */}
          </button>
          </div>  
          <div className='phone-cc'>
          <h4>Pincode</h4>
          <input type="number" placeholder="Enter pincode for delivery deatils"/>
          <button className='check-pin'>check</button>
          </div>

          <div className='phone-cc'>
          <h4>Specifications</h4>
          <p>General</p>
          <div className='specific-data'>
            <Row>
            <Col md={6}>
            <p>Model Name</p>
            <p>Model Number</p>
            <p>Color</p>
            <p>SIM Type</p>
            <p>Features</p>
            </Col>
            <Col md={6}>
            <h5>{data.product}</h5>
            <h5>{data.model}</h5>
            <h5>{data.color}</h5>
            <h5>{data.simType}</h5>
            <h5>{data.feature}</h5>
            </Col>
            </Row>
          </div>
          </div> 
          </section> 
          </Col>
          
          <section>
            <Row>
            <div className='footer-data'>
              <h5>{data.product}</h5>
              <h4>{data.price}</h4>
              <LearnButton text="Add To Cart" />
              <BuyNow/>
            </div>
            </Row>
          </section>
        </Row>
          )))}
          <div style={{marginBottom:"20rem"}}>
          <Footer />
          </div>
      </div>
    </>
  )
}

export default ProductDetailPage;