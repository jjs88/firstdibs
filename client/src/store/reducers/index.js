import { combineReducers } from 'redux';
import itemsReducer from './items';

const rootReducers = combineReducers({
  items: itemsReducer
});

export default rootReducers;