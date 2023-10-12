import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ReadMoreReadLess = ({children}) => {
  const styles ={
    readBtn:{
      border:"none",
      backgroundColor:"white",
      fontSize:"15px",
      fontWeight:"bold",
      color:"black",
      marginLeft: "-72px",
    }
  }

  const [product,model,color,simType,feature] = children;
  const featureList =[product,model,color,simType,feature];

  // const result = featureList.substring(0, 4);
  const pd1=["Model Name","Model Number","Color","SIM Type","Features"];

  const Feature1 = pd1.map(lists=> <p>{lists}</p>) ; 
  const Feature = featureList.map(list=> <h5>{list}</h5>) ;
  
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const toggleBtn = () =>{
    setReadMoreShown(prevState => !prevState);
  }
  return (
    <>
    <Row>
    <Col md={6}>
      {isReadMoreShown ? Feature1 : Feature1.slice(0,2)}
    </Col> 
    <Col md={6}>
      {isReadMoreShown ? Feature : Feature.slice(0,2)}
      <button style={styles.readBtn} onClick={toggleBtn}>{isReadMoreShown ? 'Read Less' : '...Read More'}</button>
    </Col>
    </Row>
    </>
  )
}

export default ReadMoreReadLess;