import React, { Component } from 'react'

class Character extends Component {
    render() {

        const character = this.props
        return (
            <div className="Episode card">
                <img src={character.image.medium} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>

                </div>
            </div>
        )
    }
}

export default Character