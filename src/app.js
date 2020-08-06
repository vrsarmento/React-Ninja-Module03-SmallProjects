'use strict'

import React from 'react'
import Form from 'components/form'
import TodosList from 'components/todos-list'
import Filter from 'components/filter'
import SearchCep from 'components/search-cep'

// import 'milligram'
import './css/style.css'

const App = () => (
  <div className='app'>
    <div className='todoApp'>
      <Form />
      <Filter />
      <TodosList />
    </div>

    <div className='cepApp'>
      <SearchCep />
    </div>
  </div>
)

export default App
