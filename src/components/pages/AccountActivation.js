import React, { Component } from "react";
import FormInput from "../layout/FormInput";

export default class AccountActivation extends Component {
  state = {
    email: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      email: ""
    });
  };

  render() {
    const { email } = this.state;
    return (
      <main className="container-sub">
        <h2 className="body--text body--text-main"> Welcome </h2>
        <p className="body--text body--text-sub">
          Enter your email address below to reset your password
        </p>
        <form onSubmit={this.onSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="email@example.com"
            onChange={this.onChange}
          />{" "}
          <input
            type="submit"
            className="btn btn-large btn-blue-dark btn-text"
            value="Resend"
          />
        </form>
      </main>
    );
  }
}
