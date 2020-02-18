import React, { Component } from "react";
import "./App.css";
import Counters from "./containers/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  deleteCounterHandler = counterId => {
    const newCounters = this.state.counters.filter(c => c.id !== counterId);

    this.setState((state, props) => ({
      counters: newCounters
    }));
  };

  resetCountersHandler = () => {
    const newCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState(newCounters);
  };

  incrementCounterHandler = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index].value++;
    this.setState(newCounters);
  };

  render() {
    return (
      <div className="App">
        <Navbar
          countersArr={this.state.counters.filter(el => el.value > 0).length}
        />
        <Counters
          ondelete={this.deleteCounterHandler}
          onincrement={this.incrementCounterHandler}
          onreset={this.resetCountersHandler}
          countersArr={this.state.counters}
        />
      </div>
    );
  }
}

export default App;
