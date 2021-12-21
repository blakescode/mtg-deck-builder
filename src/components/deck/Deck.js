import React from 'react'
import Card from '../card/Card'

const Deck = ({ cards }) => {
  return (
    <div>
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

export default Deck