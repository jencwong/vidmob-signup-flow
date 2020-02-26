import React, { Component } from "react";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <div className="Background">
        <div>
          <div className="NavBar">
            <img
              className="vm_logo_primary"
              src="images/vm-logo-primary.png"
              alt="vm-logo-primary"
            />
            <p className="Already-have-an-acco">Already have an account?</p>
            <button className="login_btn">
              <span className="Log-In">LOG IN</span>
            </button>
          </div>
          <Default />
        </div>
      </div>
    );
  }
}

export default App;
