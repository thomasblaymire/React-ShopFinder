import { combineReducers } from 'redux';
import LocationReducer from './ReducerLocation';

const rootReducer = combineReducers({
  location: LocationReducer
});

export default rootReducer;
