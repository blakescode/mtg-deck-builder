import React from 'react'
import Card from '../card/Card'
import './column.css'

const Column = ({ cards }) => {
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