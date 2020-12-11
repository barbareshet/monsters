import React from "react";
import './select-box.styles.css'
function SelectMonster({handleSelect} ) {
    const types = [1,2,3,4,5];
    return (
        <div className="select-container">
            <label htmlFor="select-monster">Select Monster Type </label>
            <select
                name="select-monster"
                onChange={handleSelect}
            >
                {types.map( t => <option key={t}>{t}</option>)}
            </select>
        </div>
    )
}

export default SelectMonster