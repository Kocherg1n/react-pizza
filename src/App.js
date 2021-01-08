import React, {useEffect} from 'react'
import './scss/app.scss'
import {Header} from './components'
import {Home, Cart} from './pages'
import {Route} from 'react-router-dom'

const App = () => (
  <div className="wrapper">
    <Header/>
    <div className="content">
      <Route path='/cart' component={Cart}/>
      <Route path='/' exact component={Home}/>
    </div>
  </div>
);

export default App;
