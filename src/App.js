import React, { Component } from 'react';
import axios from 'axios';
import number from 'easy-number-formatter';

class App extends Component {
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
    if(this.state.isLoading){
     return( <div>
        <p className="spin"></p>
        </div>
     );
    }
    if(!this.state.isLoading){
    return (
      <>
      <input type="text" name="search" onChange={this.searchHandler} placeholder="search for country" />
      <div className="App">
       {this.state.data
       .filter((c) => {
         return c.name
         .toLowerCase()
         .includes(this.state.searchInput.toLowerCase());
       })
       .map((c=> 
       <div className="countries" key={c.name}>
         <div className="upper"><p><img src={c.flags.png} alt="flag" /><h2>{c.name}</h2>  </p>
          <p>Capital:  <strong> {c.capital} </strong></p>
          </div>
          <p>Language(s):{c.languages.map((lang) =>(
            <strong> {lang.name} </strong>
          ))} </p>
          <p>Currencies:{c.currencies.map((mon,i) =>(
            <strong key={i}>{mon.name} {mon.symbol} </strong>
          ))} </p>
           <p>Population: <strong className="low"> {number.formatNumber(c.population)}</strong></p>
          
          </div>
          ))}
      </div>
      </>
    );
  }
  }
}

export default App;