import './index.css'
import { useNavigate } from 'react-router-dom'

const Popular = ({desired, genreSelected, genreName}) => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/game/${id}`)
    }

  return (
    <div className='popularSection'>
        <div className='popularHead'>{genreSelected ? `${genreName}` : 'Popular'} Games</div>
        <div className='popularCardsSection'>
            {desired && desired.map(item => {
                return (
                    <div className='popularCard' key={item.id} onClick={() => handleClick(item.id)}>
                        <img className='popularImg' src={item.background_image} alt="" loading='lazy'/>
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