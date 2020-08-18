import React from "react";
import Country from "./Country";

const CountryList = () => {
  return (
    <div>
      <Country
        flag="https://i.pinimg.com/736x/4c/99/7e/4c997ebaa73d2b4e5e0538e414ceb1ee.jpg"
        name="Venezuela"
        population={30000000}
        region="America"
        capital="Caracas"
      />
    </div>
  );
};

export default CountryList;
