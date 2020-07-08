'use strict'

import counters, { initialState } from './index'
import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from './actions'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

it('counters should be a function', () => {
  expect(counters).to.be.a('function')
})

it('Should add a counter', () => {
  const before = deepFreeze([])
  const action = deepFreeze({ type: ADD_COUNTER })
  const after = [0]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should add a counter again', () => {
  const before = deepFreeze([0])
  const action = deepFreeze({ type: ADD_COUNTER })
  const after = [0, 0]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should remove a counter', () => {
  const before = deepFreeze([0, 1, 2])
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 1 })
  const after = [0, 2]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should remove a counter again', () => {
  const before = deepFreeze([0, 1, 2, 3])
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 2 })
  const after = [0, 1, 3]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should increment a counter', () => {
  const before = deepFreeze([0, 1])
  const action = deepFreeze({ type: INCREMENT, index: 0 })
  const after = [1, 1]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should increment an other counter', () => {
  const before = deepFreeze([0, 1])
  const action = deepFreeze({ type: INCREMENT, index: 1 })
  const after = [0, 2]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should decrement a counter', () => {
  const before = deepFreeze([1, 2])
  const action = deepFreeze({ type: DECREMENT, index: 1 })
  const after = [1, 1]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should decrement an other counter', () => {
  const before = deepFreeze([1, 2])
  const action = deepFreeze({ type: DECREMENT, index: 0 })
  const after = [0, 2]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should return same state if action is unknown', () => {
  const before = deepFreeze([0, 0, 1])
  const action = deepFreeze({ type: 'UNKNOWN_ACTION' })
  const after = [0, 0, 1]
  expect(counters(before, action)).to.be.deep.equal(after)
})

it('Should return initial state if last state is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(counters(before, action)).to.be.deep.equal(after)
})
