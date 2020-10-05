export const setCountryList = (list) => ({
  type: "SET_COUNTRY_LIST",
  payload: list,
});

export const filterByRegionAction = (selectedContinent) => {
  return {
    type: "FILTER_BY_REGION_ACTION",
    payload: { selectedContinent },
  };
};

export const filterByCountry = (countryName) => ({
  type: "FILTER_BY_COUNTRY_ACTION",
  payload: countryName,
});
