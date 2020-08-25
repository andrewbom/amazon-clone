import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/Stargirl_S1/STARG_S1_GWBleedingHero_FT_COVIDUPDATE__XSite_1500X600_PV_en-GB._CB407848724_.jpg"
        alt=""
      />
      <Product
        id="123123123"
        title="The lean startup: how constant innovation creates"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
      />
    </div>
  );
};

export default Home;
