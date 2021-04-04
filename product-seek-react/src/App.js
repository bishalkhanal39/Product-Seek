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
import Contact from './components/ContactUs/Contactus';
import aboutus from './components/About/aboutus';
import Profile from './components/Profile/Profile';
import SearchProduct from './components/SearchProduct/SearchProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        {/* pages */}
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/searchproduct/{clue}' exact component={SearchProduct}/>
        <Route path='/about' exact component={aboutus}/>
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
