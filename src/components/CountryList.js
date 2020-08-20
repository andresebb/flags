import React, { useEffect, useState } from "react";
import Country from "./Country";
import "../assets/styles/components/CountryList.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCountryList } from "../actions/index";

const CountryList = () => {
  const dispatch = useDispatch();

  //Asi nos traemos con redux el initialState que esta en app.js
  /*   const countryList = useSelector((state) => state.countryList); */
  /* console.log("el estado global es", countryList); */

  /*   const [countryList, setCountryList] = useState([]); */
  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if (state.countryFilteredByRegion.length > 0) {
      return state.countryFilteredByRegion;
    }

    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return state.countryFilteredByRegion;
    }

    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all/")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch(setCountryList(list));
        /* console.log(list.length); */
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
