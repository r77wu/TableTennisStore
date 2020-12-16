import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import BladesItems from "./components/Blades/Blades";
import RubberItems from "./components/Rubber/Rubber";
import TablesItems from "./components/Tables/Tables";
import BallsItems from "./components/Balls/Balls";
import Cart from './components/Cart/Cart';
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/blades" exact component={BladesItems}/>
        <Route path="/rubber" exact component={RubberItems}/>
        <Route path="/tables" exact component={TablesItems}/>
        <Route path="/balls" exact component={BallsItems}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/checkout" exact component={Checkout}/>
      </Switch>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
