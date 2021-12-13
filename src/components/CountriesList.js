import React, { Component } from "react";
import axios from "axios";
 import "../loader.css";
 import "../index.css"
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
        this.setState({ 
          data: res.data,
          isLoading: false 
        });
        
      });
  }

  searchHandler(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="lds-ring">
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
        <>
        <input
            type="text"
            name="search"
            placeholder="country..."
            onChange={this.searchHandler.bind(this)
            }
          />
        <div className="countries">
          
          {this.state.data
            .filter((c) => {
              return c.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
            })
            .map((country) => (
              <CountriesCard {...country} key={country.name} />
            ))}
        </div>
        </>
      );
    }
  }
}

export default CountriesList;