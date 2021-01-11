import {ADD_PIZZA_TO_CART, REMOVE_ALL_PIZZAS, REMOVE_CART_ITEM} from '../actions/actionTypes'

const initState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = pizzasArr => pizzasArr.reduce((total, el) => {
  const size = el.size;
  return total + el.price[size]
}, 0);

const pizzas = (state = initState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART: {

      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const updateItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPizzasPrice: getTotalPrice(currentPizzaItems)
        }
      };

      const allPizzas = Object.values(updateItems).map(obj => obj.items).flat();
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: updateItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice
      }
    }
    case REMOVE_ALL_PIZZAS: {
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      }
    }
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items
      };
      const currentPizzasTotalPrice = newItems[action.payload].totalPizzasPrice;
      const currentPizzasTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload]
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentPizzasTotalPrice,
        totalCount: state.totalCount - currentPizzasTotalCount,
      }
    }
    default: {
      return state
    }
  }
};

export default pizzas;
