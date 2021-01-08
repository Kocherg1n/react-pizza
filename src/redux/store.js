import {applyMiddleware, combineReducers, createStore} from 'redux'
import filters from './reducers/filters'
import pizzas from './reducers/pizzas'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  filters,
  pizzas
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
