import React, { useState, Fragment } from 'react';

const useMoneda = () => {
  //
  const [state, actualizarState] = useState('');

  const Seleccionar = () => (
    <Fragment>
      <label htmlFor="">Moneda </label>
      <select name="" id="">
        <option value="MXN">Peso Mexicano</option>
        <option value="MXN">Peso Mexicano</option>
        <option value="MXN">Peso Mexicano</option>

      </select>
    </Fragment>
  );
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
