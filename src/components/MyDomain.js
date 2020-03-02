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

  //   inputDomain = event => {
  //     let val = event.target.value;
  //     if (event.key === val && "Enter") {
  //       if (this.state.domains.find(domain => domain.toLowerCase() === val)) {
  //         return;
  //       }
  //       let newDomains = [...this.props.domains, val];
  //       this.setState({ domains: newDomains });
  //       this.MyDomain.value = null;
  //       this.props.onDomainChange(newDomains);
  //     } else if (event.key === !val && "Backspace") {
  //       this.deleteDomain();
  //     }
  //   };

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
            let editableDomainClass;
            if (index === this.props.domains.length - 1) {
              editableDomainClass = "last-line";
            } else {
              editableDomainClass = "";
            }
            return (
              <li className={"domain-item" + editableDomainClass} key={domain}>
                <div className="domain-list-containter">
                  <div className="domain-list-text">{domain}</div>
                  <div
                    className="removeDomain-icon"
                    onClick={() => {
                      this.deleteDomain(index);
                    }}
                  >
                    <svg
                      className="svg-toggle-button"
                      width="15"
                      height="15"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <title>background</title>
                        <rect
                          fill="none"
                          id="canvas_background"
                          height="402"
                          width="582"
                          y="-1"
                          x="-1"
                        />
                      </g>
                      <g>
                        <title>Layer 1</title>
                        <path
                          //   className="svg-toggle-button"
                          fill="#e5e5e5"
                          id="svg_1"
                          d="m16,4c-6.617,0 -12,5.383 -12,12s5.383,12 12,12s12,-5.383 12,-12s-5.383,-12 -12,-12m0,-2c7.732,0 14,6.268 14,14s-6.268,14 -14,14s-14,-6.268 -14,-14s6.268,-14 14,-14l0,0zm3.536,9.05l1.414,1.414l-3.536,3.536l3.536,3.536l-1.414,1.414l-3.536,-3.536l-3.536,3.536l-1.414,-1.414l3.536,-3.536l-3.536,-3.536l1.414,-1.414l3.536,3.536l3.536,-3.536z"
                        />
                      </g>
                    </svg>{" "}
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
