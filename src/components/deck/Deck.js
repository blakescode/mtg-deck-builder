import React from 'react'
import { sortByColor } from '../../helpers/filters'
import Column from './Column'
import './deck.css'

const Deck = ({ cards, handleMoveCard }) => {
  const cardPool = sortByColor(cards);
  return (
    <div className="deck-container">
      {cardPool.map(column => {
        return (
          <Column cards={column} handleMoveCard={handleMoveCard}/>
        )
      })}
    </div>
  )
}

export default Deck