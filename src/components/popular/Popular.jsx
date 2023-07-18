import { useSelector } from 'react-redux'
import './index.css'
import { useNavigate } from 'react-router-dom'

const Popular = ({desired, selected, genreName}) => {
    const navigate = useNavigate()
    const {searchflag} = useSelector(state => state.search)
    
    const handleClick = (id) => {
        navigate(`/game/${id}`)
    }

  return (
    <div className='popularSection'>
        <div className='popularHead'>{searchflag ? 'Searched' : (selected ? `${genreName}` : 'Popular')} Games</div>
        {searchflag && <div>Filter:</div>}
        <div className='popularCardsSection'>
            {desired && desired.map(item => {
                return (
                    <div className='popularCard' key={item.id} onClick={() => handleClick(item.id)}>
                        <img 
                            className='popularImg' 
                            src={item.background_image} 
                            alt={item.name} />
                        <div className='popularGameName'>{item.name}</div>
                        <div className='popularDetails'>
                            <span>{item.rating} ({item.ratings_count})</span>
                            <span>Released: {item?.released?.substring(0,4)}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Popular