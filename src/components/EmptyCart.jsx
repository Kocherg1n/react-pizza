import React from 'react'
import emptyCart from '../assets/img/empty-cart.png'
import {Link} from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не выбрали пиццу.<br/>
        Для того, чтобы выбрать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt="Empty cart"/>
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
