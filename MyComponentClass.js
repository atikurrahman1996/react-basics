import React, { Component } from "react";

class MyComponentClass extends Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    setInterval(this.tick, 3000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  addClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date } = this.state;

    return (
      <div>
        <p> Time:{date.toLocaleTimeString()} </p>
        <p>
          <button type="button" onClick={this.addClick}>
            Click
          </button>
        </p>
      </div>
    );
  }
}
export default MyComponentClass;
