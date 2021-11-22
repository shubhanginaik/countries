import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state={
    data:[],
  }
  componentDidMount(){
    axios.get("https://restcountries.com/v3.1/all").then((res)=>{this.setState({data:res.data});
    console.log(this.state.data);
  });
}
  render() {
    return (
      <div className="App">
       {this.state.data.map((c=> 
       <div className="countries" key={c.name.common}>
         <p><img src={c.flags.png} alt="flag" /><h2>{c.name.common}</h2>  </p>
          <p>Capital is  <strong> {c.capital} </strong></p>
          <p>Population is <strong> {c.population}</strong></p>
          
          </div>
          ))}
      </div>
    );
  }
}

export default App;