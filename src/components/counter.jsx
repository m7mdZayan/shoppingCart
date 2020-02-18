import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="mb-5">
        <h3>Product {this.props.counter.id}</h3>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value === 0 ? "Zero" : this.props.counter.value}
        </span>
        <br />

        <button
          onClick={this.props.onIncrement}
          className="btn btn-secondary mr-3"
        >
          increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger">
          delete
        </button>
        <hr />
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "mb-3 badge badge-";
    this.props.counter.value === 0
      ? (classes += "warning") // Zero => Yellow
      : this.props.counter.value < 0
      ? (classes += "danger") // Negative => Red
      : (classes += "primary"); // Postive => blue
    return classes;
  };
}

export default Counter;
