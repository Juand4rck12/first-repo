import React, { useState } from 'react'

const FilterComponent = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query); // Llama a la función onSearch pasando el query
    };

    return (
        <div id='searchApartContainer'>
            <div className="searchApart">
                <input
                    id='gender'
                    type="text"
                    placeholder='Search Character by name'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button id='gender' onClick={handleSubmit}>Search &#128270;</button>
            </div>
        </div>
    );
};

export default FilterComponent