import React from 'react';

export const BuyNow = () => {
    const styles = {
        buybtn:{
            height:"45px",
            width:"144px",
            borderRadius: "27px",
            backgroundColor:"black",
            color:"white",
            fontSize: "17px",
            fontWeight: "700",
            marginRight: "20px"
        }
    }
  return (
   <button style={styles.buybtn}>Buy Now</button>
  )
}

export const LearnButton = (props) => {
    const styles = {
        learnbtn:{
            height:"45px",
            width:"144px",
            borderRadius: "27px",
            borderColor:"black",
            backgroundColor:"white",
            color:"black",
            fontSize: "17px",
            fontWeight: "600",
        }
    }
  return (
   <button style={styles.learnbtn}>{props.text}</button>
  )
}