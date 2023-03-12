import React, { Component } from "react";

class Conditional extends Component {
  state = { date: new Date(), local: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (local) => {
    this.setState({
      local,
    });
  };

  render() {
    const { date, local } = this.state;

    let button;
    if (local === "bn-BD") {
      button = (
        <button onClick={() => this.handleClick("en-US")} local="en-US">
          Click here
        </button>
      );
    } else {
      button = (
        <button onClick={() => this.handleClick("bn-BD")} local="bn-BD">
          Click here
        </button>
      );
    }

    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(local)}</span>
        </h1>
        {button}
      </div>
    );
  }
}

export default Conditional;
