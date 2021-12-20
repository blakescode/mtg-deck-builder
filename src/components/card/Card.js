import React from 'react'
import { getImageUrl } from '../../helpers/images'
import './card.css'

const Card = ({ card }) => {
  return (
    <div className='card-container'>
      <img src={getImageUrl(card)} alt={card.name} className='card-image'/>
    </div>
  )
}

export default Card