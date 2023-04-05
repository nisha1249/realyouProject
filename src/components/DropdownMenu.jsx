import React ,{useState, useEffect} from 'react';
import {phoneSubmenu} from "./Navitems";

function DropdownMenu() {
  const styles = {
    menu:{
      height: "19rem",
      width: "auto",
      backgroundColor: "lightblue",
    }
  }
  const [subMenu, setsubMenu] = useState([]);
  const getApiData = async() =>{
    try{
      setsubMenu([phoneSubmenu]);
    }catch{
        console.log("error");
    }
};
 useEffect(()=>{
    getApiData();
},[]);

  return (
    <>
    <div style={styles.menu}>
      <ul>
        {subMenu.map(item => (
          
          item.map(data => <li key={data.id}>{data.title}</li>)
         
        ))}
      </ul>
    </div>
    </>
  )
}

export default DropdownMenu;