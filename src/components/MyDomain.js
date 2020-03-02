import React, { Component } from "react";

class MyDomain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains: []
    };
    this.handleChange = this.handleChange.bind(this);
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
    this.props.onDomainChange(newDomains);
  };

  myList() {
    return this.props.domains.map((domain, index) => {
      let editableDomain;
      if (index === this.props.domains.length - 1) {
        editableDomain = "last-line-item";
      } else {
        editableDomain = "";
      }
      return (
        <li className={"domain-list" + editableDomain} key={domain}>
          <div className="domain-list-containter">
            <div className="domain-list-text">{domain}</div>
            <div
              className="removeDomain-icon"
              onClick={() => {
                this.deleteDomain(index);
              }}
            >
              <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
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
                    fill="#e5e5e5"
                    id="svg_1"
                    d="m16,4c-6.617,0 -12,5.383 -12,12s5.383,12 12,12s12,-5.383 12,-12s-5.383,-12 -12,-12m0,-2c7.732,0 14,6.268 14,14s-6.268,14 -14,14s-14,-6.268 -14,-14s6.268,-14 14,-14l0,0zm3.536,9.05l1.414,1.414l-3.536,3.536l3.536,3.536l-1.414,1.414l-3.536,-3.536l-3.536,3.536l-1.414,-1.414l3.536,-3.536l-3.536,-3.536l1.414,-1.414l3.536,3.536l3.536,-3.536z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="MyDomain">
        <ul className="domain_list">
          {this.props.domainIsInput ? this.myList() : null}
          <input
            className={
              this.props.domains.length === 0
                ? "domain-default"
                : "domain-text-input"
            }
            type="text"
            placeholder="Enter one or more domain..."
            id="input-box7"
            name="text"
            onChange={event => this.handleChange(event)}
          ></input>
        </ul>
      </div>
    );
  }
}
export default MyDomain;
