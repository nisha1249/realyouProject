import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import { BannerSlider } from '../../components/Product/BannerSlider';
import NewArrivals from '../../components/Product/NewArrivals';
import Footer from '../../components/Layout/Footer';
import Section from '../../components/Cart/Section';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <React.Fragment >
      <Navbar />
      <BannerSlider />
      <Link to="smartphones"> <NewArrivals /> </Link>
      {/* <ProductsCard posterName="Hottest Audios" posterImage={Audiocard} /> */}
      <Section posterName="Hottest Audios" posterImage={'./assets/audiocard.webp'} category="earbuds"/>
      <Section posterName="Best Wearables" posterImage={'./assets/watchCard.webp'} category="watch"/>
      <Section posterName="Smart Accessories" posterImage={'./assets/img11.webp'} category="accessories"/>
      <Footer />
    </React.Fragment>
  )
}

export default HomePage;
