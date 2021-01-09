import React, {useEffect} from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import {fetchPizzas} from '../redux/middleware'
import {addPizzaToCart} from '../redux/actions/cart';


const plugs = Array(10).fill(0);
const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  {name: 'популярности', type: 'rating', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {
  const dispatch = useDispatch();
  const {items, isLoading, sortBy, category, cartItems} = useSelector(({pizzas, filters, cart}) => ({
    items: pizzas.items,
    isLoading: pizzas.isLoading,
    sortBy: filters.sortBy,
    category: filters.category,
    cartItems: cart.items
  }));

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [dispatch, category, sortBy]);

  const onClickAddPizzaHandler = (pizzaObj) => {
    dispatch(addPizzaToCart(pizzaObj))
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          categoryActive={category}
        />
        <SortPopup
          items={sortNames}
          activeSortType={sortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? plugs.map((el, idx) => <Loader key={el + idx}/>)
          : items.map(pizza => <PizzaBlock
              onClickAddPizza={onClickAddPizzaHandler}
              key={pizza.id}
              isLoading
              {...pizza}
              cartItems={cartItems[pizza.id] && cartItems[pizza.id].length}
            />)}
      </div>
    </div>
  );
};

export default Home;
