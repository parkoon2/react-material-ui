import React, { Component, Fragment } from 'react';
import Header from './layouts/Header'
import Footer from './layouts/Footer'

class App extends Component {
  render() {
    return (
      <Fragment >
        <Header></Header>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;
