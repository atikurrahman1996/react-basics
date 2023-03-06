import React, { Component } from "react";

class InputForm extends Component {
  FormChange = (event) => {
    console.log(event.target.value);
  };

  CheckBoxhandler = (event) => {
    this.setState({
      checkBox: event.target.checked,
    });
  };

  render() {
    return (
      <div className="container">
        <input
          type="text"
          name="ChannelName"
          placeholder="Channel Name"
          className="form-control"
          onChange={this.FormChange}
        />

        <input
          type="text"
          name="Subscriber"
          placeholder="Subscriber"
          className="form-control"
          onChange={this.FormChange}
        />

        <select
          name="category"
          onChange={this.FormChange}
          className="form-control"
        >
          <option value="Web Dev">Select</option>
          <option value="Web Dev">Coding</option>
          <option value="Web1 Dev">Coding1</option>
          <option value="Web2 Dev">Coding2</option>
        </select>

        <input
          type="date"
          name="CreateDate"
          onChange={this.FormChange}
          className="form-control"
        />

        <textarea
          name="About"
          onChange={this.FormChange}
          placeholder="About You"
          className="form-control"
        ></textarea>

        <div>
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={this.FormChange}
          />
          <label htmlFor="gender">Male</label>

          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={this.FormChange}
          />
          <label htmlFor="gender">FeMale</label>
        </div>

        <input
          type="checkbox"
          name="checkbox"
          onChange={this.CheckBoxhandler}
        />
      </div>
    );
  }
}

export default InputForm;
