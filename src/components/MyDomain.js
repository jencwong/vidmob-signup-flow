import React, { Component } from "react";

class MyDomain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains: [],
      inputDomain: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.deleteDomain = this.deleteDomain.bind(this);
  }

  handleChange = event => {
    let val = event.target.value;
    console.log(val);
    if (event.key === val && "Enter") {
      this.setState.domains = val.toLowerCase();
      let newDomains = [...this.props.domains, val];
      this.setState({ domains: newDomains });
      this.props.onDomainChange(newDomains);
    } else if (event.key === !val && "Backspace") {
      this.deleteDomain();
    }
  };

  deleteDomain = index => {
    let newDomains = [...this.props.domains];
    newDomains.splice(index, 1);
    this.setState({ domains: newDomains });
    this.props.onDomainsChange(newDomains);
  };

  handleKeyDown = event => {
    event.preventDefault();
    // if pressed Enter key
    if (event.key === "Enter") {
      // get current list of domains and add a new input to the array
      let newDomains = [...this.props.domains, this.state.inputDomain];

      // reset the input box and state
      this.setState({
        inputDomain: ""
      });
      this.props.onDomainsChange(newDomains);
    }

    // if pressed Backspace
    else if (event.key === "Backspace") {
      // reset the input box and state
      let change = {};
      change[event.target.name] = "";
      this.setState(change);
    }
    // if pressed shift key
    else if (event.key === "Shift") {
      let change = {};
      change[event.target.name] = "";
    }

    // if pressed any other keys
    else {
      // update input box and state
      let change = {};
      change[event.target.name] = event.target.value + event.key;
      this.setState(change);
    }
  };

  myDomain() {
    return (
      <div className="MyDomain">
        <ul className="domain_list">
          {this.props.domains.map((domain, index) => {
            let editableDomainId;
            if (index === this.props.domains.length - 1) {
              editableDomainId = "last-line";
            } else {
              editableDomainId = "";
            }
            return (
              <li className={"domain-item"} id={editableDomainId} key={domain}>
                <div className="domain-list-containter">
                  <div className="domain-list-text">{domain}</div>
                  <div
                    className="removeDomain-icon"
                    onClick={() => {
                      this.deleteDomain(index);
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <title>background</title>
                        <rect
                          fill="none"
                          id="canvas_background"
                          height="17"
                          width="17"
                          y="-1"
                          x="-1"
                        />
                      </g>
                      <g>
                        <title>Layer 1</title>
                        <path
                          stroke="null"
                          fill="#b2b2b2"
                          className="svg-toggle-button"
                          d="m7.604493,1.612743c-3.255508,0 -5.903899,2.555866 -5.903899,5.69764s2.648391,5.69764 5.903899,5.69764s5.9039,-2.555866 5.9039,-5.69764s-2.648391,-5.69764 -5.9039,-5.69764m0,-0.949607c3.80408,0 6.887883,2.976068 6.887883,6.647247s-3.083803,6.647247 -6.887883,6.647247s-6.887882,-2.976068 -6.887882,-6.647247s3.083803,-6.647247 6.887882,-6.647247l0,0zm1.739683,4.296971l0.695676,0.671371l-1.739682,1.678905l1.739682,1.678905l-0.695676,0.671372l-1.739683,-1.678905l-1.739682,1.678905l-0.695676,-0.671372l1.739682,-1.678905l-1.739682,-1.678905l0.695676,-0.671371l1.739682,1.678904l1.739683,-1.678904z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
          <input
            className={
              this.props.domains.length === 0
                ? "domain-default"
                : "domain-input"
            }
            value={this.state.inputDomain}
            type="text"
            placeholder={
              this.props.domains.length === 0
                ? "Enter one or more domain..."
                : ""
            }
            id="input-box7"
            name="inputDomain"
            onKeyDown={this.handleKeyDown}
          ></input>
        </ul>
      </div>
    );
  }

  render() {
    return <div>{this.props.domainIsInput ? this.myDomain() : null}</div>;
  }
}
export default MyDomain;
