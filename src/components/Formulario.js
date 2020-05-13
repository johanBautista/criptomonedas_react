import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Axios from 'axios';
import Error from './Error';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  //
  const [listacripto, guardarCriptomonedas] = useState([]);
  //
  const [error, guardarError] = useState(false);
  //
  const MONEDAS = [
    { codigo: 'ARS', nombre: 'Peso, Argentina' },
    { codigo: 'CNY', nombre: 'Yuan, China ' },
    { codigo: 'COL', nombre: 'Peso, Colombia' },
    { codigo: 'USD', nombre: 'Dolar, USA' },
    { codigo: 'EUR', nombre: 'Euro , España' },
    { codigo: 'JPY', nombre: 'Yen, Japón ' },
    { codigo: 'KWD', nombre: 'Dinar, Kuwait' },
    { codigo: 'CHF', nombre: 'Franco, Suiza ' },
    { codigo: 'GBP', nombre: 'Libra, Inglaterra' },
  ];
  //
  const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS);
  //
  const [criptomonedas, SelectCripto] = useCriptomoneda(
    'Elige tu Criptomoneda',
    '',
    listacripto,
  );
  //
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await Axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);
  //
  const cotizarMoneda = (e) => {
    e.preventDefault();
    //
    if (moneda === '' || criptomonedas === '') {
      guardarError(true);
      return;
    }
    //
    guardarError(false);
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos Obligatorios" /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
