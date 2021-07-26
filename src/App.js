import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Product/Products';
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import SingleProduct from './components/Product/SingleProduct';
import Cart from './components/Cart/Cart';
// import Messages from './components/Messages/messages';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'




const App = () => {

  

  return (
    <Router>
      <NavBar />

      <Switch>
        
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/myCart">
          <Cart/>
        </Route>
        <Route path="/shop/:id">
          <SingleProduct/>
        </Route>
        <Route path="/shop">
          <Products />
        </Route>
        <Route path="/"> 
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
