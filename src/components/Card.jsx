import React from 'react'
import './card.css'

function Card({title, icon, offer, isNew}) {
  return (
    <div className='card'>
        {isNew && <p className='top new'>New</p>}
        {offer && <p className='top offer'>Offer</p>}
        <p className='icon'>{icon}</p>
        <p>{title}</p>
    </div>
  )
}

export default Card