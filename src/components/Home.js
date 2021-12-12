import React from 'react';
import "../index.css"

const Home = () => {
    return (
        <div className="mainhome">
           <h1>Countries in the World</h1>   
        <p>
            There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine.
        </p>
         <div className="info">
                    <div><strong>Where are they located?</strong></div>
            <div>Of the 195 countries in the world:</div>

           <div>- 54 countries are in Africa</div> 
            <div>- 48 in Asia</div>
            <div>- 44 in Europe</div>
            <div>- 33 in Latin America and the Caribbean</div>
            <div>- 14 in Oceania</div>
            <div>- 2 in Northern America</div>
        </div>
        </div>
    );
};

export default Home;