import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import { Link } from 'react-router-dom'

const Trending = ({desired}) => {
    const {loading} = useSelector(state => state.app)

    if(loading){
        return (<h2>Loading...</h2>)
    }
    
    return (
        <div className='trendingSection'>
            <div className='trendingHead'>Trending Games</div>
            <div className='trendingLists'>
                {desired && desired.map((item, index) => index<4 && (
                    <Link className='trendingEach' key={item.id} to={`/game/${item.id}`}>
                        <img className='trendingImg' src={item.background_image} alt="" />
                        <div className='trendingNames'>{item.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Trending