import React, { Component } from "react";
import "./App.css";
//import config from "../config";
import SearchBar from "../SearchBar/SearchBar";
import ResultsList from "../ResultsList/ResultsList";
import ApiContext from "../ApiContext";

class App extends Component {
  static contextType = ApiContext;
  state = {
    results: this.context.results
  };

  render() {
    const value = {
      results: this.state.results
    };
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <header className='App-header'>
            <h1 className='title'>Star Wars Search</h1>
          </header>
          <section>
            <SearchBar />
            <ResultsList />
          </section>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
