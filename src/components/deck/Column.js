import React from 'react'
import Card from '../card/Card'
import './column.css'

const Column = ({ cards }) => {
  cards = cards.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="card-column">
      <ul>
        {cards.map(card => {
          return (
            <Card card={card} key={card.key} />
          )
        })}
      </ul>
    </div>
  )
}

export default Column