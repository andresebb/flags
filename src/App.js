import React from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";
import FilterByRegione from "./components/FilterByRegion";

const initialState = {
  countryList: [],
  countryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FilterByRegione />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
