import React from "react";
import Header from "../components/Header";
import ActionList from "../components/ActionList";
import CountryList from "../components/CountryList";

const Home = () => {
  return (
    <>
      <ActionList />
      <CountryList />
    </>
  );
};

export default Home;
