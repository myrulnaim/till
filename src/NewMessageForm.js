import React, { Component } from "react";
import phone from "phone";
import { sendMessage } from "./api";

function isValidPhone(str) {
  return phone(str).length > 0;
}

export default class Send extends Component {
  state = {
    number: "",
    message: ""
  };

  get valid() {
    const { number, message } = this.state;

    return message && isValidPhone(number);
  }

  get formattedPhone() {
    return phone(this.state.number).join(" ");
  }

  update = field => e => this.setState({ [field]: e.target.value });

  submit = async e => {
    e.preventDefault();
    await sendMessage([this.state.number], this.state.message);
    this.setState({ number: "", message: "" });
  };

  render() {
    const { number, message } = this.state;

    return (
      <form onSubmit={this.submit}>
        <div>
          <input
            value={number}
            onChange={this.update("number")}
            placeholder="Enter phone number"
          />
          {isValidPhone(number) && (
            <div className="validPhone">{this.formattedPhone}</div>
          )}
        </div>
        <div>
          <input
            value={message}
            onChange={this.update("message")}
            placeholder="Enter a message"
          />
        </div>
        <div>
          <button type="submit" disabled={!this.valid}>
            Send
          </button>
        </div>
      </form>
    );
  }
}
