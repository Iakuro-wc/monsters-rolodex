import React from 'react'
import { Card } from '../card/card.component';


export const CardList = (props) => {
    
    return (
        
        <div className={props.monsters.length && 'card-list'}>
            {
               props.monsters.length < 1 ? <h1>No monsters with searched name</h1> :
               
               props.monsters.map(monster => {
                    return (
                        <Card key={monster.id}  monster={monster}/>
                    )
                })
            }
        </div>
    )
}
