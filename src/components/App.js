import React, { Component, Fragment } from 'react';
import { Footer, Header } from './layouts'
import Excercise from './excercises'

class App extends Component {
  render() {
    return (
      <Fragment >
        <Header />
        <Excercise />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
