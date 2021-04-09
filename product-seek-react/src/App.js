import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Wishlist from './Pages/Wishlist/wishlist';
import Navigation from './components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Stores from './Pages/Store/Store';
import Categories from './Pages/Category/Category';
// import Shops from './Pages/Shop/Shop';
import StoreDetail from './Pages/Store/StoreDetail/StoreDetail';
import CategoryDetail from './Pages/Category/CategoryDetail/CategoryDetail';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Dashboard from './Pages/Dashboard/Dashboard';
import SearchProduct from './Pages/SearchProduct';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import SingleProduct from './components/Product/SingleProduct';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        {/* pages */}
        <Route path='/' exact component={Home}/>
        <Route path='/product-detail/:id' exact component={SingleProduct}/>
        <Route path='/store' exact component={Stores}/>
        <Route path='/category' exact component={Categories}/>
        <Route path='/search' exact component={SearchProduct}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        {/* <Route path='/shop' exact component={Shops}/> */}
        <Route path='/store/:id'  component={StoreDetail}/>
        <Route path='/category/:id'  component={CategoryDetail}/>
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
