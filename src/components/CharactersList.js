import React from 'react'
import Character from './Character';

const CharactersList = (props) => {

    const list = props.characters.map((character, i) => (
        <div className="col-4 mb-4" key={i}>
            <Character character={character} />

        </div>
    ))

    return (
        <div className="row">
            
            {list}
        </div>
    );
}

export default CharactersList

// import React, { Component } from 'react'
// import Character from './Character';

// class CharactersList extends Component {
//     render(){
//         return(
//             <div>
//                 {this.props.characters.map((character,i) =>(
//                     <div className="col-4 mb-4" key={i}>
//                     <Character character={character} />

//                      </div>
//                     ))}
//             </div>
//         )
//     }
// }

// export default CharactersList
