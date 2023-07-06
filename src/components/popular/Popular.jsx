import './index.css'

import React from 'react'

const Popular = ({desired}) => {
  return (
    <div className='popularSection'>
        <div className='popularHead'>Popular Games</div>
        <div className='popularCardsSection'>
            {desired && desired.map(item => {
                return (
                    <div className='popularCard' key={item.id}>
                        <img className='popularImg' src={item.background_image} alt="" />
                        <div>{item.name}</div>
                        <div className='popularDetails'>
                            <span>{item.rating} ({item.ratings_count})</span>
                            <span>Released: {item.released.substring(0,4)}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Popular