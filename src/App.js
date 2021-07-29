import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Product/Products";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import SingleProduct from "./components/Product/SingleProduct";
import Cart from "./components/Cart/Cart";
// import Messages from './components/Messages/messages';
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Message from "./components/Message/Message";
import ProductsCategory from "./components/Product/ProductsCategory";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/catalog/category/:id">
          <ProductsCategory />
        </Route>
        <Route path="/mymessage">
          <Message />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/myCart">
          <Cart />
        </Route>
        <Route path="/catalog/:id">
          <SingleProduct />
        </Route>
        <Route path="/catalog">
          <Products />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
