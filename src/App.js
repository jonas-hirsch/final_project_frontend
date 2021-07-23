import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/Product/Products';
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import SingleProduct from './components/Product/SingleProduct';
import Cart from './components/Cart/Cart';
import UserProfile from './components/UserProfil/UserProfile';
// import Messages from './components/Messages/messages';


const App = () => {

  

  return (
    <Router>
      <NavBar />
      <Switch>
        {/* <Route path="/myMessages">
          <Message/>
        </Route> */}
        <Route path="/myProfil">
          <UserProfile/>
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
    </Router>
    
  );
}

export default App;
