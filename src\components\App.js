import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

class App extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { getProducts })(App);