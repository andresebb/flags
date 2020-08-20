import React from "react";
import "../assets/styles/SearchByCountry.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCountry } from "../actions/index";

const SearchByCountry = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (countryName) => {
    setInputValue(countryName.target.value);

    dispatch(filterByCountry(countryName.target.value));
  };

  /* debugger; */
  return (
    <div className="search">
      <i className="fas fa-search"></i>
      <input
        type="text"
        value={inputValue}
        placeholder="Search for a country"
        onChange={filterByName}
      />
    </div>
  );
};

export default SearchByCountry;
