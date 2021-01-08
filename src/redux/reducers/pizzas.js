import {SET_PIZZAS, SET_IS_LOADING} from '../actions/actionTypes';

const initState = {
  items: [],
  isLoading: false
};

const pizzas = (state = initState, action) => {
  switch (action.type) {
    case SET_PIZZAS: {
      return {
        ...state,
        items: action.payload,
      }
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default: {
      return state
    }
  }
};

export default pizzas;
