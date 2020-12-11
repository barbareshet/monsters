import React from 'react';
import './card.styles.css'
const Card = ({monster, type}) => {
    const title = monster.title.split(' ').slice(0,2).join(' ')
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set${type}&size=180x360`} alt="monster"/>
            <h3>{title}</h3>
        </div>
    );
}
export default Card