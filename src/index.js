'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from 'reducers'

const initialState = {
  todos: [{
    id: '123',
    text: 'Teste de Estado Inicial',
    completed: false
  }]
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('LOGGER::will dispatch: ', action)
  const nextAction = next(action)
  console.log('LOGGER::next action: ', nextAction)
  return nextAction
}

const thunk = ({ dispatch, getStore }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const store = createStore(reducer, initialState, applyMiddleware(logger, thunk))

store.dispatch(lazyAction())
function lazyAction () {
  return (dispatch, getState) => {
    // Simulating a request
    setTimeout(() => {
      dispatch({
        type: 'todos:ADD_TODO',
        payload: {
          text: 'lazyAction',
          id: '1234',
          completed: false
        }
      })
    }, 3000)
  }
}

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers').default
    store.replaceReducer(nextReducer)
  })
}
