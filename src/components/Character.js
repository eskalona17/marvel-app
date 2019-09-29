import React, { Component } from 'react'

class Character extends Component {


    render() {

        return (
            <div className="card"> 
                     <img src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`} className="card-img-top" alt="images" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.character.name}</h5>
                </div>
            </div>
        )
    }
}

export default Character