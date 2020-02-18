import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  render() {
    return (
      <div className="text-center">
        <button
          className="btn btn-primary mt-2 mb-4"
          onClick={this.props.onreset}
        >
          reset
        </button>
        {this.props.countersArr.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.props.ondelete(counter.id)}
            onIncrement={() => {
              this.props.onincrement(counter);
            }}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
