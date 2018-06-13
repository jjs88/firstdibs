import * as actionTypes from '../actions/actionTypes';
import { toggleFavorite } from './helper';

const reducer = (state = [], action) => {
  switch(action.type) {
    case actionTypes.RETRIEVE_ITEMS:
      return action.payload;
    case actionTypes.TOGGLE_FAVORITE:
      return toggleFavorite(state, action.payload);
    default:
      return state;
  }
}


export default reducer;