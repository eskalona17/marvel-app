import React, { Component, Fragment } from 'react'

class Character extends Component {


    render() {

        const character = this.props

        

        console.log('hola soy props: '+this.props)


        return (
            <div className="Episode card">
                {/* <img src={character.data.medium} className="card-img-top" alt="..." /> */}
                <div className="card-body">

                    {/* {this.props.characters.map((character, i) =>(
                        <h5 className="card-title">{character.name}</h5>
                    ))} */}

                </div>
            </div>
        )
    }
}

export default Character