'use strict'

import visibilityFilter, { initialState } from './index'
import * as actions from './actions'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

it('visibilityFilter should be a function', () => {
  expect(visibilityFilter).to.be.a('function')
})

it('should show all todos', () => {
  const before = actions.SHOW_COMPLETED
  const action = deepFreeze({
    type: actions.SET_VISIBILITY_FILTER,
    payload: { filter: actions.SHOW_ALL }
  })
  const after = actions.SHOW_ALL
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show completed todos', () => {
  const before = actions.SHOW_ALL
  const action = deepFreeze({
    type: actions.SET_VISIBILITY_FILTER,
    payload: { filter: actions.SHOW_COMPLETED }
  })
  const after = actions.SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show active todos', () => {
  const before = actions.SHOW_ALL
  const action = deepFreeze({
    type: actions.SET_VISIBILITY_FILTER,
    payload: { filter: actions.SHOW_ACTIVE }
  })
  const after = actions.SHOW_ACTIVE
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return latest state when action is unknown', () => {
  const before = actions.SHOW_ALL
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: { filter: actions.SHOW_COMPLETED }
  })
  const after = actions.SHOW_ALL
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return initialState when latest state is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(visibilityFilter(before, action)).to.be.equal(after)
})
