import React, { Component } from "react";

class Form extends Component {
  state = {
    title: "JavaScript",
    text: "JavaScript is awesom",
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else {
      console.log("nothing");
    }
  };

  render() {
    const { title, text } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <textarea name="text" value={text} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Form;
