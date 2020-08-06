'use strict'

import React from 'react'

const SearchCep = ({ info, isFetching, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={isFetching}>
        {isFetching ? 'Buscando...' : 'Buscar endereço'}
      </button>
    </form>

    {info.status !== 400 && (
      <ul>
        <li>CEP: {info.code}</li>
        <li>Endereço: {info.address}</li>
        <li>Bairro: {info.district}</li>
        <li>Cidade: {info.city}</li>
        <li>Estado: {info.state}</li>
      </ul>
    )}

    {info.status === 400 && (
      <p>{info.message}</p>
    )}
  </div>
)

export default SearchCep
