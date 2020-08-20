export const setCountryList = (list) => ({
  type: "SET_COUNTRY_LIST",
  payload: list,
});

export const filterByRegionAction = (selectedContinent) => ({
  type: "FILTER_BY_REGION_ACTION",
  payload: { selectedContinent },
});
