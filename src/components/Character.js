import React, { Component, Fragment, Children } from 'react'

class Character extends Component {


    render() {

        // const character = this.props

        // console.log('hola soy props: '+this.props)


        return (
            <div className="Episode card">
                
                <div className="card-body">
                    <ul>
                        {this.props.character.name}
                        <img src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`} alt="images"/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Character