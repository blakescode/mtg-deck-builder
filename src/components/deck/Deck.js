import React from 'react'
import { sortByColor } from '../../helpers/filters'
import Column from './Column'
import './deck.css'

const Deck = ({ cards, handleMoveCard }) => {
  const sortedColumns = sortByColor(cards)
  return (
    <div className="deck-container">
      {sortedColumns.map(column => {
        return (
          <Column cards={column} handleMoveCard={handleMoveCard}/>
        )
      })}
    </div>
  )
}

export default Deck