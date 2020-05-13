import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

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
    MONEDAS,
  );

  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
