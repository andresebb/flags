import { useDebugValue } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      console.log(action);
      return {
        ...state,
        countryList: action.payload,
      };
    }
    case "FILTER_BY_REGION_ACTION": {
      const { selectedContinent } = action.payload;

      if ("All" === selectedContinent) {
        return { ...state, countryFilteredByRegion: [], filterByRegion: "" };
      }

      console.log(action.payload);

      const countryFilteredByRegion = state.countryList.filter(
        (country) => country.region === selectedContinent
      );
      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: selectedContinent,
      };
    }

    default:
      return state;
  }
};

export default reducer;
