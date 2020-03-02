import React, { Component } from "react";
// import radioActivated from "../assets/ic-clear.png";
// import radioDeactivated from "../assets/ct-radio-deactivated.png";
import MyDomain from "./MyDomain";

const radioActivated = "images/ic-selected.png";
const radioDeactivated = "images/ct-radio-deactivated.png";

class CompanySignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getDomain: false,
      domains: [],
      //   domains: ["sample.com", "test.com", "ymail.com"],
      inviteOnly: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   componentDidMount() {
  //     console.log("hello");
  //     console.log(this.props.location.state.newDomain);
  //     this.setState({
  //       domains: [...this.state.domains, this.props.location.state.newDomain]
  //     });
  //   }

  onClickDomains = event => {
    this.setState({ getDomain: true, inviteOnly: false });
  };

  onClickInvite = event => {
    this.setState({ getDomain: false, inviteOnly: true });
  };

  onDomainsChange = domain => {
    this.setState({ domains: domain });
  };

  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(event) {
    let domain = this.setState({
      domains: [...this.state.domains, event.target.value]
    });
    console.log(event.target.value);
  }

  //   addToDomains(domain) {
  //     this.setState({
  //       domains: [...this.state.domains, domain]
  //     });
  //   }

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
                src={this.state.getDomain ? radioActivated : radioDeactivated}
                alt="selected-radio"
                onClick={this.onClickDomains}
              ></img>
              <p className="Any-email-from-my-do">Any email from my domains</p>
            </div>

            <MyDomain
              domainIsInput={this.state.getDomain}
              onDomainsChange={this.onDomainsChange}
              domains={this.state.domains}
            />

            {/* <input
              className="Input-Frame"
              type="text"
              placeholder="Enter one or more domain..."
              id="input-box7"
              name="text"
              domains={this.props.domains}
              onChange={event => this.handleChange(event)}
            ></input> */}
            <div className="sign-up-container">
              <img
                className="radio-deactivated"
                src={this.state.inviteOnly ? radioActivated : radioDeactivated}
                alt="radio-deactivated"
                onClick={this.onClickInvite}
              ></img>
              <p className="Invite-only">Invite only</p>
            </div>
            <button
              type="submit"
              className="signup"
              onClick={this.handleSubmit}
              //   disabled={this.state.domains.length === 0 ? true : false}
            >
              <span id="done">DONE</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CompanySignUp;
