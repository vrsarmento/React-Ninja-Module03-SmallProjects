'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import './example.css'

const Example = ({ children }) => (
  <div>{children}</div>
)

Example.propTypes = {
  children: PropTypes.node.isRequired
}

export default Example
