import React from 'react';
import './card-list.styles.css'
import Card from "../card/card.component";
import { motion } from "framer-motion";

const CardList = ({monsters, monsterType}) => {

    return (
        <div className="card-list">
            { monsters.map( monster => (
                <motion.div bottom key={monster.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                >
                    <Card monster={monster} type={monsterType}/>
                </motion.div>
            ))}
        </div>
    );
}
export default CardList