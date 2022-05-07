import React, { Component } from "react";
import joi from "joi-browser";
import Form from "./common/form";
class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required().email().label("Username"),
    password: joi.string().required().min(5).label("Password"),
    name: joi.string().required().label("Name"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name", "name")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Register;
