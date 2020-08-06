'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  state = {
    info: {
      address: '',
      city: '',
      code: '',
      district: '',
      state: '',
      status: 1,
      message: ''
    },
    isFetching: false
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })
    const response = await ajax().get('https://ws.apicep.com/cep.json', {
      code: e.target.cep.value
    })
    this.setState({ isFetching: false })
    this.setState({ info: response })
  }

  render () {
    return <SearchCep {...this.state} handleSubmit={this.handleSubmit} />
  }
}

export default SearchCepContainer
