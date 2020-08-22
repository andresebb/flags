import React, { useState, useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";
import Header from "./components/Header";
import Home from "./containers/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountryPage from "./containers/CountryPage";

const initialState = {
  countryList: [],
  countryFilteredByRegion: [],
  countryListByName: [],
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  //Configurando darkMode
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <BrowserRouter>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/country/:id" component={CountryPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
