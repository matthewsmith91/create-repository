import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { setBitbucketToken } from './actions/bitbucket';

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(setBitbucketToken('testToken'))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))