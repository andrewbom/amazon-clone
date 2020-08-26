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
      <div className="home__row">
        <Product
          id="0001"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
        <Product
          id="0002"
          title="Funny Costumes Dinosaur Inflatable Costumes"
          price={34.84}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71J-YtSUd3L._AC_UX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0003"
          title="Color Club Halographic Hues Nail Polish, Halo, Graphic.05 Ounce"
          price={11.29}
          rating={4}
          image="https://m.media-amazon.com/images/I/71FPuDUhfML._AC_UL480_QL65_.jpg"
        />
        <Product
          id="0004"
          title="Hamilton Beach Breakfast Sandwich Maker, Silver (25475A) "
          price={24.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41N8AxIJq4L._AC_SY200_.jpg"
        />
        <Product
          id="0005"
          title="Artist's Loft Acrylic Paint Value Pack 36 Piece"
          price={25.35}
          rating={2}
          image="https://m.media-amazon.com/images/I/61GEW-MekwL._AC_UL480_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0006"
          title="KitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire RedKitchenAid KSM150PSER Artisan Tilt-Head Stand Mixer with Pouring Shield, 5-Quart, Empire Red"
          price={889.89}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/81EYgXB%2BGOL._AC_SX522_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
