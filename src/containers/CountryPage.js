import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountrySelected from "../components/CountrySelected";

//Aca llega el props y alli viene un id
const CountryPage = ({ match }) => {
  /* Si venimos del home Dbpais va a leer el estado,
    Si recargamos directamente en la pagina,
    Dbpais sera indefinado, por la tanto se ejecuta
    la funcion del useEffect, se hace el setPais de la data,
    y pais ya no sera indefinido;
    
  */

  const DBpais = useSelector((state) =>
    state.countryList.find((item) => item.name === match.params.id)
  );

  const [pais, setPais] = useState(DBpais);
  console.log(pais);
  /* debugger; */

  useEffect(() => {
    /* onsole.log("hola soy el effect"); */
    //Significa si pais es false o da undefined
    if (!pais) {
      console.log("hola soy el pais que no tiene nada");
      fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPais(data[0]);
        })
        .catch(() => {
          console.log("Lo siento amiguito, sigue intentando");
        });
    }
  }, []);

  return <CountrySelected {...pais} />;
};

export default CountryPage;
