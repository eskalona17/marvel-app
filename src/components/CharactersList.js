import React from 'react'
import Characters from './Characters';

const CharactersList = (props) => {
    const list = props.characters.map((character, i) => (
        <div className="col-4 mb-4" key={i}>
            <Characters character={character} />
        </div>
    ))

    return (
        <div className="EpisodesList">
            <h4>All episodes</h4>

            <div className="row">
                {list}
            </div>
        </div>
    );
}

export default CharactersList
