import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    componentDidMount(){
        // axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
        axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=6e8f34cea393d16874d5c0168d855c9c')
        .then(result=>{
            console.log(result)
        }).catch(console.log)
    }
    render(){
        return(
            <h1>Hola paco</h1>
        )
    }
}

export default Home