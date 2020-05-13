import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;
const useCriptomoneda = (label, stateInitial, opciones) => {
  console.log(opciones);

  //
  const [state, actualizarState] = useState(stateInitial);

  const SelectCripto = () => (
    <Fragment>
      <Label htmlFor="">{label} </Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option>-- Seleccione --</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;
