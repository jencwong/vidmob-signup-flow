import React, { Component } from "react";
import Popup from "reactjs-popup";
import { redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { withRouter } from "react-router";

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
      redirect: null,
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
      this.setState({ redirect: true });
    }
  }

  render() {
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
          <div className="modal-background">
            <Popup
              open={this.state.open}
              closeOnDocumentClick
              onClose={this.closeModal}
            >
              <div className="modal">
                <div>
                  <a className="close" onClick={this.closeModal}>
                    &times;
                  </a>
                  <div>
                    <img></img>
                    <h3>That looks familiar</h3>
                    <p>
                      That email looks like it's part of an existing company.
                      Check your email for an invite to your company
                    </p>
                  </div>
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
