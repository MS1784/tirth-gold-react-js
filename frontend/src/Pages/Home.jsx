import React from "react";
import Hero from "../Components/Hero/Hero";
// import Popular from "../Components/Popular/Popular";
// import Offers from '../Components/Offers/Offers'
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import CollectionsButton from "../Components/CollectionsButton/CollectionsButton";

const Home = () => {
  return (
    <div>
      <Hero />
      <CollectionsButton />
      {/* <Popular /> */}
      {/* <Offers/> */}
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Home;
