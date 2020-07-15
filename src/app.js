'use strict'

import React from 'react'
import './css/style.css'

const App = () => (
  <div>
    <input type='text' />

    <ul>
      <li className='completed'>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <div>
      <h3>Exibir</h3>
      <a href=''>Todos</a> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

export default App
