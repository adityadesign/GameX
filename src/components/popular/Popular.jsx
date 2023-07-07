import './index.css'
import { Link } from 'react-router-dom'

const Popular = ({desired}) => {
  return (
    <div className='popularSection'>
        <div className='popularHead'>Popular Games</div>
        <div className='popularCardsSection'>
            {desired && desired.map(item => {
                return (
                    <Link className='popularCard' key={item.id} to={`/game/${item.id}`}>
                        <img className='popularImg' src={item.background_image} alt="" />
                        <div>{item.name}</div>
                        <div className='popularDetails'>
                            <span>{item.rating} ({item.ratings_count})</span>
                            <span>Released: {item.released.substring(0,4)}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Popular