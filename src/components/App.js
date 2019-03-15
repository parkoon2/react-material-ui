import React, { Component, Fragment } from 'react';
import { Footer, Header } from './layouts'
import Exercise from './exercises'
import { exercises, muscles } from '../store'

class App extends Component {

  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )


    // return this.state.exercises.reduce((exercises, exercise) => {
    //   const { muscles } = exercise

    //   exercises[muscles] = exercises[muscles]
    //     ? [...exercises[muscles], exercise]
    //     : [exercise]

    //   return exercises
    // }, { })
  }

  render() {
    const exercises = this.getExercisesByMuscles()
    return (
      <Fragment >
        <Header />
        <Exercise exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
