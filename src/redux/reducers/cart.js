import {ADD_PIZZA_TO_CART} from '../actions/actionTypes'

const initState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const pizzas = (state = initState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {
      const updateItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload]
      };
      const allPizzas = [...Object.values(updateItems).flat()];
      const totalPrice = allPizzas.reduce((total, el) => total + el.price, 0);

      return {
        ...state,
        items: updateItems,
        totalCount: allPizzas.length,
        totalPrice
      }
    }
    default: {
      return state
    }
  }
};

export default pizzas;
