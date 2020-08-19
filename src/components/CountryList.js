import React, { useEffect, useState } from "react";
import Country from "./Country";
import "../assets/styles/components/CountryList.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCountryList } from "../actions/index";

const CountryList = () => {
  const dispatch = useDispatch();

  //Asi nos traemos con redux el initialState que esta en app.js
  const countryList = useSelector((state) => state.countryList);
  console.log("el estado global es", countryList);

  /*   const [countryList, setCountryList] = useState([]); */

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all/")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        console.log(list.length);
      })
      .catch(() => {
        console.log("Lo siento amiguito, sigue intentando");
      });
  }, []);

  return (
    <div className="country-list">
      {countryList.map(({ name, flag, population, region, capital }) => {
        return (
          <Country
            flag={flag}
            name={name}
            key={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </div>
  );
};

const mapDispatchToProps = {
  setCountryList,
};

export default CountryList;
