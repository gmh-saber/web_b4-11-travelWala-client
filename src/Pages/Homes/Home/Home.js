import React from "react";
import AllServices from "../AllServices/AllServices";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <Gallery></Gallery>
      <AllServices></AllServices>
      <Review></Review>

    </div>
  );
};

export default Home;
