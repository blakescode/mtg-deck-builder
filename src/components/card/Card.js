import React from 'react'

const Card = ({ card }) => {
  const imgUrl = window.location.origin + '/images/' + card.set + '/' + card.name + '.png'

  return (
    <div>
      <img src={imgUrl} alt={card.name}/>
    </div>
  )
}

export default Card