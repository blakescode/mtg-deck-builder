import React, {useState} from 'react'
import { getImageUrl } from '../../helpers/images'
import './card.css'

const Card = ({ card, handleMoveCard }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className='card-container'
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleMoveCard}
    >
      <img src={getImageUrl(card)} alt={card.name} className='card-image'/>
      {showTooltip && (
        <div className='tooltip-container'>
          <img src={getImageUrl(card)} alt={card.name} className='card-tooltip'/>
        </div>
      )}
    </div>
  )
}

export default Card