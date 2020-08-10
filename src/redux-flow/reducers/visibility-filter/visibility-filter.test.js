'use strict'

import visibilityFilter from './index'
import * as actions from './actions'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

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
