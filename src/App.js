import React, { Component } from 'react';


import Navbar from './components/Navbar/Navbar';
import Burger from './containers/Burger/Burger';
import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Navbar />
          <Burger />
        </Layout>
      </Aux>
    );
  }
}

export default App;
