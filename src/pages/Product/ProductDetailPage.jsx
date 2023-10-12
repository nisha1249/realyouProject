import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './ProductDetailPage.css';
import {fetchProduct} from '../../services/api';
import { productDetails } from '../../components/Navitems';
import { FaPlus, FaMinus } from "react-icons/fa";
import {CgSmartphoneChip, CgSmartphone, CgSmartphoneRam} from "react-icons/cg";
import {BiCamera} from "react-icons/bi";
import { CiBatteryCharging } from "react-icons/ci";
import Footer from '../../components/Layout/Footer';
import {BuyNow, LearnButton} from '../../components/Cart/Buttons';
import Navbar from '../../components/Layout/Navbars';
import ReadMoreReadLess from './ReadMoreReadLess';

const ProductDetailPage = () => {
  const { id } = useParams();

  const[ {product,price,model,color,simType,feature,url,thumbnail,features,configuration}] = productDetails;
  const pdList=[product,model,color,simType,feature ];
 const [products, setProducts] = useState(pdList);
  //console.log(id);
  //const [viewImage, setViewImage] = useState(products[0][0]);
  
  const[quantity,setQuatity] = useState(1);
  const addQuatity =() =>{
    setQuatity(quantity+1);
  };
  const subQuatity =() =>{
   { quantity <= 1 ? quantity==1 : setQuatity(quantity-1); }
  };
  const[data, setData] = useState([]);
  const{name,highlights,sku,specifications,variants}=data;
  const colour = variants;
  console.log(color);
 // console.log(data.variants.map((item,i)=> (<h1 key={i}>{item.color}</h1>)));

  const fetchData = async () => {
    const data = await fetchProduct(id);
    //console.log(data, "heloo");
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return ( 
    <React.Fragment>
    <Navbar/>
    <main>
    
    <div className='container-fluid'>
        <Row>
          <Col md={6}>
            <section className='preview-product'>
            {/* <img src={viewImage.url} alt='realme-smart phone' /> */}
            <div className='all-preview-product'>
              {/* <figure>
              {thumbnail.map(img=> 
              <img src={img.url} alt='preview-product' onClick={() =>setViewImage(img)} />)}
              </figure> */}
            </div>
            </section>
          
          </Col>
          
          <Col md={6}>
            <section className='products-detail'>
            <h4>{data.name}</h4> 
            <h5>{price}</h5>  
            <p>Combo Offer</p>
            
            {/* <div className='features'>
              <div className='f-icons'>
              <CgSmartphoneChip />
              <h6>{pro.specifications[0].processor}</h6>
              <p>Processor</p>
              </div>
              <div className='f-icons'>
              <BiCamera />
              <h6>{pro.specifications[1].camera}</h6>
              <p>Camera</p>
              </div>
              <div className='f-icons'>
              <CiBatteryCharging /> 
              <h6>{pro.specifications[2].battery}</h6>
              <p>Battery</p>
              </div>
              <div className='f-icons'>
              <CgSmartphone />  
              <h6>{pro.specifications[3].display}</h6>
              <p>Display</p>
              </div>
              <div className='f-icons'>
              <CgSmartphoneRam />  
              <h6>storage</h6> 
              <p>Storage & RAM</p>
              </div>
            
            </div> */}
            </section>

          {/* <section className='phone-cc'>
          <h4>Color</h4>
          <div className='phone-color'>
          {variants.map(items=> 
          <button>{items.color}</button>
          )}
          </div>
          <h4>Configuration</h4>
          <div className='phone-config'>
          {variants.map(items=> 
          <button>{items.ram}+{items.storage}</button>
          )}
          </div>
          </section> */}

          <section className='pincode'>
          <div className='quatity'>
          <h4>Quatity</h4>
          <button style={{fontSize:"13px",display:"flex",justifyContent:"space-around",paddingTop:"16px"}}>
          <FaMinus onClick={subQuatity} />
           <p style={{fontSize:"18px",marginTop:"-7px"}}>{quantity}</p> 
          <FaPlus onClick={addQuatity}/> 
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
            <ReadMoreReadLess children={pdList} /> 
          </div>
          </div> 
          </section> 
          </Col>
          
        <section>
          <Row>
          <div className='footer-data'>
            <h5>{data.name}</h5>
            <h4>{price}</h4>
            <LearnButton text="Add To Cart" />
            <BuyNow/>
          </div>
          </Row>
        </section>
        </Row>
        <div style={{marginBottom:"20rem"}}>
        <Footer />
        </div> 
    </div>
      
    </main>
    </React.Fragment>
  )
}

export default ProductDetailPage;