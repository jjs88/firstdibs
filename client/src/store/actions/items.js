import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getItems = (range) => {
  let url = '/browse';
  url+= range ? `?start=${range.start}&limit=${range.limit}`:'';
  return async (dispatch) => {
    const {
      data: {
        items
      }
    } = await axios(url);
    dispatch({type: actionTypes.RETRIEVE_ITEMS, payload: items});
  }
}

export const toggleFavorite = (item) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    payload: item
  }
}