import React, { Component } from 'react';


import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />
      </Aux>
    );
  }
}

export default App;
