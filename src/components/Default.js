import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div className="Parent-Default">
        <div className="Container-Default">
          <form>
            <p className="Get-started-on-VidMo">Get Started on VidMob</p>
            <p className="Enter-your-work-emai">Enter your work email</p>
            <div className="Rectangle"></div>
            <div id="text-input">
              <input
                className="Input-Email-Frame"
                type="text"
                placeholder="name@company.com"
                id="input-box1"
              ></input>
              <button className="next">
                <span id="next">NEXT</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Default;
