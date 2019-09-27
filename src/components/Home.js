import React, { Component, Fragment } from 'react';
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
                        characters: characters.data.data.results
                    })
                    console.log(characters.data.data.results.name)
                }).catch(console.log)
            // .then(res => res.json())
            // .then((json)=>{
            //     for (const hero of json.data.results){
            //         let urlhero = hero.urls[0].url;
            //     }
            // })
     
    }
    render() {

        const characters = this.state.characters

        return (
            <Fragment>
            <div>
                <h1>Hola paco </h1>
                <CharactersList characters={characters} />
         
            </div>
            </Fragment>
        )
    }
}

export default Home