'use strict'

import { storiesOf } from '@storybook/react'
import React from 'react'
import Example from './index'

const stories = storiesOf('Example', module)

stories.add('without props', () => (
  <Example>Main Example Test</Example>
))
