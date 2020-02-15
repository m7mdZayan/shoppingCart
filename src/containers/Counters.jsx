import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div className="text-center">
        <button
          className="btn btn-primary mt-2 mb-4"
          onClick={this.resetCountersHandler}
        >
          reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.deleteCounterHandler(counter.id)}
            onIncrement={() => {
              this.incrementCounterHandler(counter);
            }}
          />
        ))}
      </div>
    );
  }

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
}

export default Counters;
