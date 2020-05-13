import React, { useState, Fragment } from 'react';

const useMoneda = (label, stateInitial, opciones) => {
  //
  const [state, actualizarState] = useState(stateInitial);

  const Seleccionar = () => (
    <Fragment>
      <label htmlFor="">{label} </label>
      <select name="" id="">
        <option>-- Seleccione su Divisa --</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </Fragment>
  );
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
