import React, { Component } from "react";
import "./SearchBar.css";
import config from "../config";
import ApiContext from "../ApiContext";

class SearchBar extends Component {
  static contextType = ApiContext;
  handleSubmit = e => {
    e.preventDefault();
    const searchTerm = {
      name: e.target["search-input"].value,
      option: e.target["options"].value
    };
    fetch(
      `${config.API_ENDPOINT}${searchTerm.option}/?search=${searchTerm.name}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      }
    )
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(data => {
        this.context.results.push(data.results);
        this.setState({
          results: this.context.results
        });
      });
  };
  render() {
    return (
      <form className='search-bar' onSubmit={this.handleSubmit}>
        <input
          className='search-box'
          type='text'
          placeholder='Luke Skywalker'
          name='search-input'
        />
        <select name='options'>
          <option>planets</option>
          <option>spaceships</option>
          <option>vehicles</option>
          <option>people</option>
          <option>films</option>
          <option>species</option>
        </select>
        <input type='submit' />
      </form>
    );
  }
}

export default SearchBar;
