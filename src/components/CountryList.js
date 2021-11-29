import React, { Component } from 'react';
import axios from 'axios';
import number from 'easy-number-formatter';

class CountryList extends Component {
    state={
        data:[],
        searchInput: "",
        isLoading: true,
      }
      componentDidMount(){
        axios.get("https://restcountries.com/v2/all?fields=name,capital,flags,languages,population,currencies").then((res)=>{this.setState({data:res.data,isLoading:false });
        console.log(this.state.data);
      });
    }
    searchHandler=(e)=>{
        this.setState({
          searchInput : e.target.value,
        });
        console.log(this.state.searchInput)
      }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CountryList;