import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import configureStore from './CreateStore';
import rootSaga from '../sagas/'
import { NavigationReducers } from './Navigation';
import { LoginReducers } from './Login';

// use Immutable.Map to create the store state tree
const initialState = Immutable.Map();

export default () => {
  // Assemble The Reducers
  const rootReducer = combineReducers({
    ...NavigationReducers,
    ...LoginReducers,

  });

  return configureStore(rootReducer, rootSaga, initialState);
}
