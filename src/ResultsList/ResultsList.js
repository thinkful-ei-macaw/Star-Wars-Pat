import React, { Component } from "react";
import "./ResultsList.css";
import ApiContext from "../ApiContext";
import Results from "../Results/Results";

class ResultsList extends Component {
  static contextType = ApiContext;

  render() {
    return (
      <div className='results-list'>
        <h2 className='results-header'>Results:</h2>
        <ul>
          {this.context.results.map(
            result => console.log(result.name)
            // <li>{result.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default ResultsList;
