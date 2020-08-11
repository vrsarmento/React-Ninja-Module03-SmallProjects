'use strict'

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibility-filter'
import address from './address'

// Manual implementation to understand how combineReducers works
/* const combineReducers = (reducers) => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    return {
      ...nextState,
      [key]: reducers[key](state[key], action)
    }
  }, {})
} */

export default combineReducers({
  address,
  todos,
  visibilityFilter
})
