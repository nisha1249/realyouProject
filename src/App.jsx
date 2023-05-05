import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import { ProductsList } from './components/ProductList/ProductsList';
import ProductDetailPage from './pages/Product/ProductDetailPage';

function App() {

  return (
    <React.Fragment>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="smartphones" element={<ProductDetailPage />} />
      <Route path="productslist" element={<ProductsList />} />
     </Routes>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
