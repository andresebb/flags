import React from "react";
import "../assets/styles/components/CountrySelected.scss";

const CountrySelected = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
}) => {
  return (
    <div className="padresito">
      <img className="big-img" src={flag} alt="" />
      <div>
        <h2>{name}</h2>
        <div className="gride">
          <div>
            <p>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong> {topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {currencies.map((item) => (
                <span>{item.name}</span>
              ))}
            </p>
            <p className="languages">
              <strong>Languages:</strong>{" "}
              {languages.map((item) => (
                <span>{item.name}</span>
              ))}
            </p>
          </div>
        </div>
        <p className="borders">
          <strong>Border Countries:</strong>
        </p>
        {borders.map((item) => (
          <span class="border-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default CountrySelected;
