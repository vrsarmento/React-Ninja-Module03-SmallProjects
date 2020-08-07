'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    message: ''
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
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
    message: ''
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
