import React, { Component, useState } from "react";
import Popup from "reactjs-popup";
import { Redirect } from "react-router-dom";

const bg = {
  overlay: {
    background: "rgba(0, 0, 0, 0.6)"
  }
};

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existingEmail: [
        "scooks@snapchat.com",
        "plauria@facebook.com",
        "mkreider@amazon.com",
        "dwong@apple.com",
        "rbadolato@beeswax.com",
        "daniel@vidmob.com"
      ],
      existingDomain: [
        "vidmob.com",
        "facebook.com",
        "amazon.com",
        "bloomberg.com",
        "apple.com",
        "beeswax.com",
        "twillio.com"
      ],
      personalEmail: [
        "aol.com",
        "att.net",
        "comcast.net",
        "facebook.com",
        "gmail.com",
        "gmx.com",
        "googlemail.com",
        "google.com",
        "hotmail.com",
        "hotmail.co.uk",
        "mac.com",
        "me.com",
        "mail.com",
        "msn.com",
        "live.com",
        "sbcglobal.net",
        "verizon.net",
        "yahoo.com",
        "yahoo.co.uk"
      ],
      existingCompany: false,
      email: "",
      redirect: false,
      open: false,
      errorEmail: false,
      errorMessage: "",
      personal: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  openModal2() {
    this.setState({ personal: true });
  }

  closeModal2() {
    this.setState({ personal: false });
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userEmail = this.state.email;
    // alert("Your email: " + userEmail);
    let userDomain = userEmail.split("@")[1].toLowerCase();

    if (
      this.state.existingDomain.includes(userDomain) &&
      !this.state.existingEmail.includes(userEmail)
    ) {
      console.log(true);
      this.setState({ open: true });
    } else if (this.state.existingEmail.includes(userEmail)) {
      console.log(true);
      this.setState({ errorEmail: true });
      this.setState({
        errorMessage:
          "That email looks like it's already taken. Do you want to "
      });
    } else if (this.state.personalEmail.includes(userDomain)) {
      console.log("personal email!");
      this.setState({ personal: true });
    } else {
      console.log(false);
      this.setState({ redirect: true });
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: "/get-started-section"
          }}
        />
      );
    }
    return (
      <div className="Parent-Default">
        <div className="Container-Default">
          <form onSubmit={this.handleSubmit}>
            <p className="Get-started-on-VidMo">Get started on VidMob</p>
            <p className="Enter-your-work-emai">Enter your work email</p>
            <div className="Rectangle"></div>
            <div id="text-input">
              <input
                className={
                  this.state.errorMessage
                    ? "Input-Email-Red"
                    : "Input-Email-Frame"
                }
                type="email"
                placeholder="name@company.com"
                id="input-box1"
                error={this.state.error}
                name="email"
                domain={this.props.existingDomain}
                onChange={event => this.handleChange(event)}
              ></input>

              <button className="next">
                <span id="next">NEXT</span>
              </button>
            </div>
          </form>
          {this.state.errorMessage && (
            <p className="errTooltip">
              {this.state.errorMessage}{" "}
              <a className="toolTipLinks" href="/">
                login
              </a>{" "}
              or{" "}
              <a className="toolTipLinks" href="/reset">
                reset your password
              </a>
            </p>
          )}

          <div>
            <Popup
              className="popup-background"
              open={this.state.open}
              closeOnDocumentClick
              onClose={this.closeModal}
              styles={bg}
            >
              <div className="modal">
                <div className="popup-button">
                  <a
                    className="close"
                    onClick={this.closeModal}
                    href="sign-up-section"
                  >
                    CLOSE{" "}
                    <img
                      id="ic_clear"
                      src="images/ic-clear.png"
                      alt="clear icon"
                    ></img>
                  </a>
                </div>
                <div className="popup-circle">
                  <img
                    className="popup-image"
                    src="images/ic-large-email-generic.png"
                    alt="email icon"
                  ></img>
                </div>
                <div>
                  <h3 id="popup-header">That looks familiar</h3>
                  <p id="popup-text">
                    That email looks like it's part of an existing company.
                  </p>
                </div>
              </div>
            </Popup>

            <Popup
              className="popup-background2"
              open={this.state.personal}
              closeOnDocumentClick
              onClick={this.closeModal2}
              styles={bg}
            >
              <div>
                <h3 id="popup-header2">That looks like a personal email</h3>
                <p id="popup-text2">
                  Press continue to create a new team, or go back to try finding
                  your team instead.
                </p>
              </div>
              <div className="Rectangle2"></div>

              <div className="buttons-container">
                <button className="back">
                  <span id="back">BACK</span>
                  <a href="/"></a>
                </button>
                <button className="continue">
                  <span id="back">CONTINUE</span>
                </button>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
