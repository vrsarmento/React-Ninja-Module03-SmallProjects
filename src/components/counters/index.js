'use strict'

import React from 'react'
import { connect } from 'react-redux'
import Counter from 'components/counter'
import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from 'reducers/counters'

const Counters = ({ counters, addCounter, removeCounter, increment, decrement }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '50px 0' }}>
      <button onClick={addCounter}>Adicionar contador</button>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {counters.map((counter, index) => (
        <Counter
          key={index}
          counter={counter}
          removeCounter={removeCounter(index)}
          increment={increment(index)}
          decrement={decrement(index)}
        />
      ))}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  counters: state
})

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch({ type: ADD_COUNTER }),
  removeCounter: (index) => () => dispatch({ type: REMOVE_COUNTER, index }),
  increment: (index) => () => dispatch({ type: INCREMENT, index }),
  decrement: (index) => () => dispatch({ type: DECREMENT, index })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
