import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { withRouter } from "react-router";

const bg = {
  overlay: {
    background: "rgba(0, 0, 0, 0.6)"
  }
};

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existingEmail: false,
      existingDomain: [
        "vidmob.com",
        "facebook.com",
        "amazon.com",
        "bloomberg.com",
        "apple.com",
        "beeswax.com",
        "twillio.com"
      ],
      existingCompany: false,
      email: "",
      redirect: false,
      open: false
      //   redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // this.isDomainGood = this.isDomainGood.bind(this);

    // const existingEmail = [
    //   "scooks@vidmob.com",
    //   "plauria@facebook.com",
    //   "mkreider@amazon.com",
    //   "dwong@apple.com",
    //   "rbadolato@beeswax.com",
    //   "daniel@vidmob.com"
    // ];

    // const existingDomain = [
    //   "vidmob.com",
    //   "facebook.com",
    //   "amazon.com",
    //   "bloomberg.com",
    //   "apple.com",
    //   "beeswax.com",
    //   "twillio.com"
    // ];
    // const existingCompany = [
    //   "vidmob",
    //   "facebook",
    //   "amazon",
    //   "bloomberg",
    //   "apple",
    //   "beeswax",
    //   "twillio"
    // ];
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userEmail = this.state.email;
    alert("Your email: " + userEmail);
    let userDomain = userEmail.split("@")[1].toLowerCase();
    console.log(userDomain);
    if (this.state.existingDomain.includes(userDomain)) {
      console.log(true);
      this.setState({ open: true });
    } else {
      console.log(false);
      this.setState({ redirect: true });
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/get-started-section" />;
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
                className="Input-Email-Frame"
                type="text"
                placeholder="name@company.com"
                id="input-box1"
                name="email"
                domain={this.props.existingDomain}
                onChange={event => this.handleChange(event)}
              ></input>
              <button className="next">
                <span id="next">NEXT</span>
              </button>
            </div>
          </form>
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
                    Check your email for an invite to your company.
                  </p>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
