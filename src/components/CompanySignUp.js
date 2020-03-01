import React, { Component } from "react";

class CompanySignUp extends Component {
  render() {
    return (
      <div id="company-signup-section">
        <div className="company-signup-container">
          <h3 id="company-signup-header">Company sign up mode</h3>
          <p id="Anyone-with-a-specif">
            Anyone with a specified email domain can join your team. Otherwise,
            an owner or co-owner will have to invite all team members.
          </p>
          <div className="Rectangle"></div>
          <form>
            <div className="sign-up-container">
              <img
                className="ic_selected"
                src="images/ic-selected.png"
                alt="selected-radio"
              ></img>
              <p className="Any-email-from-my-do">Any email from my domains</p>
            </div>
            <input
              className="Input-Frame"
              type="text"
              placeholder="Enter one or more domain..."
              id="input-box7"
              name="text"
              domains={this.props.domains}
              onChange={event => this.handleChange(event)}
            ></input>
            <div className="sign-up-container">
              <img
                className="radio-deactivated"
                src="images/ct-radio-deactivated.png"
                alt="radio-deactivated"
              ></img>
              <p className="Invite-only">Invite only</p>
            </div>
            <button className="signup">
              <span ID="done">DONE</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CompanySignUp;
