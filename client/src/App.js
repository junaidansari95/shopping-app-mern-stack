import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { history } from "./Assets/history";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import ProductDetail from "./Components/ProductDetail";
import Checkout from "./Components/Checkout";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/product-detail" component={ProductDetail} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}
