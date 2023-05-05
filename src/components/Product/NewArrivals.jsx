import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cart1 from "../../assets/images/img4.jpg";
import cart2 from "../../assets/images/img3.png";
import cart3 from "../../assets/images/img2.webp";

const NewArrivals = () => {
  const styles = {
    cartName :{
      fontSize: "27px",
      fontWeight: "700",
      paddingTop: "10px",
      color:"black",
    },
    cartImg :{
      height: "37rem",
      width: "37rem",
      marginTop: '20px',
      borderRadius: "3rem",
      cursor: "pointer",
    
      "&:hover": {
        marginTop:"20px"
      },
    },
    cartImg2 :{
      height: "18rem",
      width: "35rem",
      marginTop: '17px',
      marginLeft: "75px",
      borderRadius: "3rem",
      cursor: "pointer",
    },
    container: {
      marginLeft: "4rem",
      marginRight: "4rem",
  }
  }
   
  return (
    <Container style={styles.container}>
      <div>
        <h2 style={styles.cartName}>New Arrivals</h2>
        <Row >
        <Col md={6}>
          <img src={cart1} alt="Cart 1" style={styles.cartImg}/> 
        </Col>
        <Col md={6}>
          <img src={cart2} alt="Cart 2" style={styles.cartImg2}/>
          <img src={cart3} alt="Cart 3" style={styles.cartImg2}/>
        </Col>
        </Row>
      </div>
    </Container>
  )
}

export default NewArrivals;