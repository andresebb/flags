import React, { useState } from "react";
import { filterByRegionAction } from "../actions/";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/components/FilterByRegion.scss";

const FilterByRegion = () => {
  const [dropdown, setdropdown] = useState(false);

  const filterByRegion = useSelector((state) => state.filterByRegion);

  const dispatch = useDispatch();

  const onRegionChange = (selectedContinent) => {
    const continent = document.querySelector(".continent");
    continent.textContent = selectedContinent;
    dispatch(filterByRegionAction(selectedContinent));
  };

  return (
    <div
      className={`${dropdown ? "dropdown open" : "dropdown"}`}
      onClick={() => setdropdown(!dropdown)}
      id="filter"
    >
      <div className="tata">
        <p className="continent">Filter by Region</p>
        <i className="fas fa-chevron-down"></i>
      </div>
      <ul>
        <li onClick={() => onRegionChange("All")}>All</li>
        <li onClick={() => onRegionChange("Africa")}>Africa</li>
        <li onClick={() => onRegionChange("Americas")}>Americas</li>
        <li onClick={() => onRegionChange("Asia")}>Asia</li>
        <li onClick={() => onRegionChange("Europe")}>Europe</li>
        <li onClick={() => onRegionChange("Oceania")}>Oceania</li>
      </ul>
    </div>
  );
};

export default FilterByRegion;
