import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

import "regenerator-runtime/runtime";

import reducers from './reducers'
import App from './components/App'
import {rootSaga} from './sagas'

const sagaMiddleware = createSagaMiddleware()


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})

sagaMiddleware.run(rootSaga)