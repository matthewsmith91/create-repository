import { combineReducers, createStore } from 'redux'
import bitbucketReducer from '../reducers/bitbucket'

export default () => {
    const store = createStore(
        combineReducers({
            bitbucket: bitbucketReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}