import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import  thunk  from 'redux-thunk';

import movieReducer from './movie/reducer';

const reducers = combineReducers({
    movieReducer: movieReducer
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        // window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;