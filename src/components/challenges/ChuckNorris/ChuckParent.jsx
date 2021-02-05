import React, { useState } from 'react';
import ChuckChild from "../ChuckNorris/ChuckChild";

const ChuckParent = () => {

    function fetchJokes(){

        const url="https://api.chucknorris.io/jokes/random"

        fetch(url) 
            .then((response) => response.json())
            .then((json) => (console.log(json.results)));
            
        
        };

    };

    return (
        <div>Chuck Norris Jokes</div>
    );

},


export default ChuckParent;