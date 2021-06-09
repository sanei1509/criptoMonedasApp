import React from "react";
import styled from "@emotion/styled";

import useMoneda from "../hooks/useMoneda";
//revisar y borrar
const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  color: #fff;
  background-color: #000;
  width: 100%;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    color: #fff;
    background-color: rgba(225, 225, 225, 0.3);
  }
`;

const Formulario = () => {
  // utilizamos useMoneda
  const [state, Seleccionar, actualizarMoneda] = useMoneda();
  return (
    <form>
      <Seleccionar />
      <Boton type="submit" value="calcular" />
    </form>
  );
};

export default Formulario;
