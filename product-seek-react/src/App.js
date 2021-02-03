import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Wishlist from './Pages/Wishlist/wishlist';
import Navigation from './components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Stores from './Pages/Store/Store';
import StoreDetail from './Pages/Store/StoreDetail/StoreDetail';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        {/* pages */}
        <Route path='/' exact component={Home}/>
        <Route path='/store' exact component={Stores}/>
        <Route path='/store/:id'  component={StoreDetail}/>
        <Route path="/wishlist" component={Wishlist}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/dashboard" component={Dashboard}/>
        {/* footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
