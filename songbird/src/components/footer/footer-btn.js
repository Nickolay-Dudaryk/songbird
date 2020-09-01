import React, { Component } from "react";

import "./footer-btn.css";

export default class FooterBtn extends Component {
  render() {
    const { disabled, onClick } = this.props;

    let class_name = "btn btn-secondary btn-block";

    if (disabled) {
      class_name = "btn btn-success btn-block";
    }

    return (
      <div className="footer mb-3">
        <button
          type="button"
          className={class_name}
          disabled={!disabled}
          onClick={onClick}
        >
          Next level
        </button>
      </div>
    );
  }
}
