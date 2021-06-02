import React from 'react'
import './card.styles.css'

export const Card = ({monster}) => {
    const {name, id, email} = monster
    return (
        <div  className='card-container'>
            <h2>{name}</h2>
            <p>{email}</p>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name}/>
        </div>
    )
}
