import {
  SET_SORT_BY,
  SET_CATEGORY_BY_ID
} from '../actions/actionTypes';

const initState = {
  sortBy: 'rating',
  category: 0,
};

const filters = (state = initState, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload
      }
    }
    case SET_CATEGORY_BY_ID: {
      return {
        ...state,
        category: action.payload
      }
    }
    default: {
      return state
    }
  }
};

export default filters;
