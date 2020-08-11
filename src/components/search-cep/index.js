'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'
import { updateAddress } from 'reducers/address/action-creators'

class SearchCepContainer extends PureComponent {
  state = {
    isFetching: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })
    const response = await ajax().get('https://ws.apicep.com/cep.json', {
      code: e.target.cep.value
    })
    this.setState({ isFetching: false })
    this.props.updateAddress(response)
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        address={this.props.address}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.address
})

// Caso o nome da propriedade seja o mesmo da função e os parâmetros dessa função forem os mesmos enviados para o actionCreator, o mapDispatchToProps pode ser feito seguindo este padrão (um objeto, ao invés de uma função que retorna um objeto)
const mapDispatchToProps = {
  updateAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
