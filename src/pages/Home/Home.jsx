import Homeinfo from '../../components/homeComponents/homeInfo/HomeInfo';
import Homeslider from '../../components/homeComponents/homeSlider/HomeSlider';
import OurHistory from '../../components/homeComponents/ourHistory/Ourhistory';
import StartConversion from '../../components/homeComponents/startConversition/StartConversion';
import React from 'react';
import Footer from '../../components/general/footer/Footer';
import  Navbar from '../../components/general/navbar/Navbar';


const Home = () => {
  return (
    <>
      <Navbar />
      <Homeslider />
      <Homeinfo />
      <OurHistory />
      <StartConversion />
      <Footer />
    </>
  );
};

export default Home;
