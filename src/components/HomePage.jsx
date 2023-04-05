import React from 'react';
import Navbar from './Navbar';
import { BannerSlider } from './BannerSlider';
import NewArrivals from './NewArrivals';
import ProductsCard from './CardProduct';
import Audiocard from "../assets/audiocard.webp";
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <NewArrivals />
      <ProductsCard posterName="Hottest Audios" posterImage={Audiocard} />
      <Footer />
    </>
  )
}

export default HomePage;
