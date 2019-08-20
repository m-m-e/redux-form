import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import games from './games'; 

const rootReducer = combineReducers({
  games,
  form: formReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
