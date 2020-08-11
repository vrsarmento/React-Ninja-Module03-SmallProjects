'use strict'

import React from 'react'

const SearchCep = ({ address, isFetching, handleSubmit }) => (
  <div className='searchCep'>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={isFetching}>
        {isFetching ? 'Buscando...' : 'Buscar endereço'}
      </button>
    </form>

    {address.status !== 400 && (
      <ul>
        <li>CEP: {address.code}</li>
        <li>Endereço: {address.address}</li>
        <li>Bairro: {address.district}</li>
        <li>Cidade: {address.city}</li>
        <li>Estado: {address.state}</li>
      </ul>
    )}

    {address.status === 400 && (
      <p>{address.message}</p>
    )}
  </div>
)

export default SearchCep
