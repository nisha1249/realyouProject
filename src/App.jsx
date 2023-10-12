import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import { ProductsList } from './components/ProductList/ProductsList';
import ProductDetailPage from './pages/Product/ProductDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './pages/shashank/ProductDetails';

function App() {

  return (
    <React.Fragment>
    <BrowserRouter>
     <Routes>
     {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/product_details/:name/:id/" element={<ProductDetailPage />} />
      <Route path="/productslist/:name/:id/" element={<ProductsList />} />
      
     </Routes>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
