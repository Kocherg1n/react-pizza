import {SET_SORT_BY, SET_CATEGORY_BY_ID} from './actionTypes';

export const setSortBy = type => {
  return {
    type: SET_SORT_BY,
    payload: type
  }
};

export const setCategoryById = id => {
  return {
    type: SET_CATEGORY_BY_ID,
    payload: id
  }
};
