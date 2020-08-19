const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      console.log(action);
      return {
        ...state,
        countryList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
