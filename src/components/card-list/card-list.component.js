import React from 'react';
import './card-list.styles.css'
import Card from "../card/card.component";
import Fade from 'react-reveal/Fade';
const CardList = ({monsters, monsterType}) => {

    return (
        <div className="card-list">
            { monsters.map( monster => (
                <Fade bottom key={monster.id}>
                    <Card monster={monster} type={monsterType}/>
                </Fade>
            ))}
        </div>
    );
}
export default CardList