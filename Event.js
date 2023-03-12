import React, { Component } from "react";

class Event extends Component {
  state = { date: new Date() };

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

  handleClick() {
    console.log("The button was clicked");
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString("bn-BD")}</span>
        </h1>

        <button type="button" onClick={this.handleClick}>
          Click Here
        </button>
      </div>
    );
  }
}

export default Event;
