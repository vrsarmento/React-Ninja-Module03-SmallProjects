'use strict'

import React from 'react'

const Counter = ({ counter, decrement, increment, removeCounter }) => (
  <div style={{ textAlign: 'center' }}>
    <button style={{ fontSize: 8 }} onClick={removeCounter}>&times;</button>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default Counter
