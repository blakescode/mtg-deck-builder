import React from 'react'
import './stats.css'

const Stats = ({ cards }) => {
  return (
    <div className="stats-container">
      <div className="stats-display">
        Main Deck: {cards.length}
      </div>
      <div className="stats-display">
        Creatures: {cards.filter(card => card.type.toLowerCase().includes('creature')).length}
      </div>
      <div className="stats-display">
        Lands: {cards.filter(card => card.type.toLowerCase().includes('land')).length}
      </div>
    </div>
  )
}

export default Stats