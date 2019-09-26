import React, { Component } from 'react';
import axios from 'axios';
import CharactersList from './CharactersList'

class Home extends Component {

    state = {
        characters: []
    }

    componentDidMount() {
        axios.get(`https://gateway.marvel.com/v1/public/characters?limit=12&ts=1&apikey=6e8f34cea393d16874d5c0168d855c9c&hash=f68b97ab42350ebc7b61b55b5fd02e20`)
            .then(
                characters => {
                    this.setState({
                        characters: characters
                    })
                    console.log(characters.data.data.results[1].name)
                }).catch(console.log)
        // .then(result=>{
        //     console.log(result)
        // }).catch(console.log)
    }
    render() {

        return (
            <div>
                <h1>Hola paco</h1>
                <CharactersList characters={this.state.characters} />
            </div>
        )
    }
}

export default Home