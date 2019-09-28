import React, { Component, Fragment } from 'react'
import axios from 'axios'
import CharactersList from './CharactersList'
import SearchBar from './SearchBar'
import queryString from 'query-string';

class Home extends Component {

    state = {
        characters: [],
        searchCharacters: []
    }

    handleSearchCharacters = (text) => {
        this.setState({
            searchCharacters: this.state.characters.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
        })
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

    }
    render() {
        // const querySearch = queryString.parse(this.props.location.search)
        const characters = this.state.characters

        return (
            <Fragment>
                    <h1>Marvel App</h1>
                    {/* <SearchBar onSearch={this.handleSearchCharacters} querySearch={querySearch}/> */}
                    <div className="row">
                        <div className="col-12 p-4">
                            <CharactersList characters={characters} />
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default Home