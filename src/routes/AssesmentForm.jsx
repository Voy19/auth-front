import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import instance from "../lib/api";

export default class AssesmentForm extends Component {
  state = {
    user: "",
    level: ""
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      user: this.state.user,
      level: this.state.level
    };
    instance
      .post("/assesments", data)
      .then(res => console.log(res.data))
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <div>Create assesment</div>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="user"
            type="text"
            name="user"
            value={this.state.user}
            onChange={this.onChange}
          />
          <input
            placeholder="level"
            type="text"
            name="level"
            value={this.state.level}
            onChange={this.onChange}
          />
          <button type="submit">Create assesment</button>
        </form>
      </div>
    );
  }
}
