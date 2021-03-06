import React from "react";
import './searchBox.styles.css'
function SearchBox( { placeholder, handleChange}) {

    return (
        <div className="search-container">
            <input
                className="search"
                type="search"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox