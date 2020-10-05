import { useDebugValue } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      /* console.log(action); */
      return {
        ...state,
        countryList: action.payload,
      };
    }

    case "FILTER_BY_REGION_ACTION": {
      console.log(action);
      const { selectedContinent } = action.payload;

      if ("All" === selectedContinent) {
        return { ...state, countryFilteredByRegion: [], filterByRegion: "" };
      }

      /* console.log(action.payload); */

      const countryFilteredByRegion = state.countryList.filter((country) => {
        console.log(country);
        return country.region === selectedContinent;
      });
      debugger;

      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: selectedContinent,
      };
      debugger;
    }

    case "FILTER_BY_COUNTRY_ACTION": {
      let list;

      if (state.filterByRegion !== "") {
        list = state.countryFilteredByRegion;
        console.log("quizas alomejor");
      } else {
        list = state.countryList;
      }

      const countryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        countryFilteredByRegion: [],
        filterByRegion: "",
        countryListByName,
      };
    }
    default:
      return state;
  }
};

export default reducer;
