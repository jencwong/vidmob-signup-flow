import React, { Component } from "react";

class GetStarted extends Component {
  render() {
    return (
      <div id="get-started-section">
        <div className="getstarted-vidmob">
          <h3 id="getstarted-header">Get started on VidMob</h3>
          <p id="Your-email-is-associ">
            Your email wasn't associated with an existing company. Fill out the
            information below to create a new one.
          </p>
          <div className="Rectangle"></div>
          <div>
            <input
              className="Input-Name-Frame"
              type="text"
              placeholder="First Name"
              id="input-box2"
              name="text"
              firstName={this.props.firstName}
              onChange={event => this.handleChange(event)}
            ></input>
            <input
              className="Input-Name-Frame"
              type="text"
              placeholder="Last Name"
              id="input-box3"
              name="text"
              lastName={this.props.LastName}
              onChange={event => this.handleChange(event)}
            ></input>
            <input
              className="Input-Frame"
              type="text"
              placeholder="Display Name                                                  (optional)"
              id="input-box4"
              name="text"
              lastName={this.props.DisplayName}
              onChange={event => this.handleChange(event)}
            ></input>
            <input
              className="Input-Frame"
              type="text"
              placeholder="Password"
              id="input-box5"
              name="text"
              lastName={this.props.Password}
              onChange={event => this.handleChange(event)}
            ></input>
            <button className="next">
              <span id="next">SIGN UP</span>
            </button>
            <div className="terms-container">
              <p className="terms">
                By selecting Sign Up, you agree to our{" "}
                <strong>Terms & Conditions</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
