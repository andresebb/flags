import React from "react";
import "../assets/styles/components/country.scss";
import { Link } from "react-router-dom";

const Country = ({ flag, name, region, population, capital }) => {
  return (
    <Link to={`/country/${name}`}>
      <div className="box-country">
        <img loading="Lazy" src={flag} alt="" />
        <div className="details">
          <h2>{name}</h2>
          <p>
            <strong>Population :</strong>
            {population}
          </p>
          <p>
            <strong>Region :</strong>
            {region}
          </p>
          <p>
            <strong>Capital :</strong>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
