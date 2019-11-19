import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import About from "./components/About";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import ScrollHandle from "./components/ScrollHandle";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar></Navbar>
        <ScrollHandle></ScrollHandle>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/#products" component={ProductList}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal></Modal>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
