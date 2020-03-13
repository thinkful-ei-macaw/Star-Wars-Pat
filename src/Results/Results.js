import React, { Component } from "react";
import ApiContext from "../ApiContext";
class Results extends Component {
  static contextType = ApiContext;
  render() {
    return <p>{this.result}</p>;
  }
}
export default Results;
