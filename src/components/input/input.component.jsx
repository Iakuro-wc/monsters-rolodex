import React from 'react'
import './input.styles.css'

export const Input = ({placeholder, searchField, handleInput}) => {
    return (
        <div>
            <input
                className='search'
                type='search'
                value={searchField}
                onChange={handleInput}
                name='searchField'
                placeholder={placeholder}
            />
        </div>
    )
}
