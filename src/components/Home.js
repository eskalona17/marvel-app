import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    componentDidMount(){
        axios.get(`https://gateway.marvel.com/v1/public/characters?limit=12&ts=1&apikey=6e8f34cea393d16874d5c0168d855c9c&hash=f68b97ab42350ebc7b61b55b5fd02e20`)
        .then(result=>{
            console.log(result)
        }).catch(console.log)
    }
    render(){

        const { results } = this.props
        return(
            <div>
            <h1>Hola paco</h1>
            <h2>{results}</h2>
            </div>
        )
    }
}

export default Home