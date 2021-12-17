import React from 'react'
import './card.css'

const Card = ({ card }) => {
  return (
    <div className='card-container'>
      <img src={card.image} alt={card.name} className='card-image'/>
    </div>
  )
}

export default Card