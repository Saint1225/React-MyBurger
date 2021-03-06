import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {

  //For Removing old interceptors, 10-185
  // state = {
  //   show: true
  // };

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({ show: false });      
  //   }, 5000);
  // }
  //For Removing old interceptors, 10-185

  render() {
    return (
      <div>
        <Layout>
          {/* {this.state.show ? <BurgerBuilder />: null} */}
          <Switch>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path='/orders' component={Orders}></Route>
            <Route path="/" exact component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
