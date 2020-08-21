'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { FETCHING, SUCCESS } from './actions'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    message: '',
    isFetching: true
  })

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Rua Doutor Walter Gomes Rosa',
      city: 'Cataguases',
      code: '36773-290',
      district: 'Colinas',
      state: 'MG',
      status: 400,
      message: ''
    },
  })

  const after = {
    address: 'Rua Doutor Walter Gomes Rosa',
    city: 'Cataguases',
    code: '36773-290',
    district: 'Colinas',
    state: 'MG',
    status: 400,
    message: '',
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
