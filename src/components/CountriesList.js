import React, { Component } from "react";
import axios from "axios";
 import "../loader.css";
import CountriesCard from "./CountriesCard";

class CountriesList extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
  }

  searchHandler(e) {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        <div className="countries">
          <input
            type="text"
            name="search"
            onChange={this.searchHandler.bind(this)}
          />
          {this.state.data
            .filter((c) => {
              return c.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
            })
            .map((something) => (
              <CountriesCard {...something} key={something.name} />
            ))}
        </div>
      );
    }
  }
}

export default CountriesList;