import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      displayname: "",
      password: "",
      company: "",
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ firstname: event.target.value });
    this.setState({ lastname: event.target.value });
    this.setState({ displayname: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: "/company-signup-section"
            // state: { newDomain: this.props.location.state.newDomain }
          }}
        />
      );
    }
    return (
      <div id="get-started-section">
        <div className="getstarted-vidmob">
          <h3 id="getstarted-header">Get started on VidMob</h3>
          <p id="Your-email-wasnt">
            Your email wasn't associated with an existing company. Fill out the
            information below to create a new one.
          </p>
          <div className="Rectangle"></div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="Input-Name-Frame"
              type="text"
              placeholder="First Name"
              id="input-box2"
              name="text"
              firstname={this.props.firstname}
              onChange={event => this.handleChange(event)}
            ></input>
            <input
              className="Input-Name-Frame"
              type="text"
              placeholder="Last Name"
              id="input-box3"
              name="text"
              lastname={this.props.lastname}
              onChange={event => this.handleChange(event)}
            ></input>
            <input
              className="Input-Frame"
              type="text"
              placeholder="Display Name                                                  (optional)"
              id="input-box4"
              name="text"
              displayname={this.props.displayname}
              onChange={event => this.handleChange(event)}
            ></input>
            <input
              className="Input-Frame"
              type="text"
              placeholder="Password"
              id="input-box5"
              name="text"
              password={this.props.password}
              onChange={event => this.handleChange(event)}
            ></input>
            <input
              className="Input-Frame"
              type="text"
              placeholder="Company Name"
              id="input-box6"
              name="text"
              company={this.props.company}
              onChange={event => this.handleChange(event)}
            ></input>
            <button className="signup">
              <span id="signup">SIGN UP</span>
            </button>
          </form>
          <div className="terms-container">
            <p className="terms">
              By selecting Sign Up, you agree to our{" "}
              <strong>Terms & Conditions</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
