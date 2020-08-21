'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchAddress } from 'reducers/address/action-creators'

export const SearchCep = ({ address, handleSubmit }) => (
  <div className='searchCep'>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={address.isFetching}>
        {address.isFetching ? 'Buscando...' : 'Buscar endereço'}
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

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAddress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep)
