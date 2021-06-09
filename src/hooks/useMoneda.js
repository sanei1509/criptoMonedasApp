import React, { Fragment, useState } from "react";

const useMoneda = () => {
  // State del hook personalizado que creamos
  const [state, actualizarState] = useState("");

  const Seleccionar = () => {
    return (
      <Fragment>
        <label>Moneda</label>
        <select>
          <option value="UY">Pesos Uruguayo</option>
        </select>
      </Fragment>
    );
  };
  //Que devuelva el state, interfaz y la función que que acutauliza
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
