import React, { Component } from 'react'

class Character extends Component {


    render() {

        const character = this.props.character

        return (
            <div className="card">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="card-img-top" alt="character" />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                </div>
                <div className="card-text">
                    <p>{character.description}</p>
                </div>
            </div>
        )
    }
}

export default Character