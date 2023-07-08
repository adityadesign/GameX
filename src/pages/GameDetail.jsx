import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGameDescription, getScreenshots } from '../features/gameSlice'
import ImageGallery from 'react-image-gallery';
import './pages.css'
import ProgressBar from "@ramonak/react-progress-bar";

const GameDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {loading, gameDescription, screenshots, ratings, genresOfSingle} = useSelector(state => state.app)
   
    useEffect(() => {
        dispatch(getGameDescription(id))
        dispatch(getScreenshots(id))
    },[])

    if(loading){
        return (<h2>Loading...</h2>)
    }

  return (
    <div className='gameDetailSection'>
        <div className='leftSection'>
            {gameDescription && 
            <div>
                <div className='gameHead'>{gameDescription.name}</div>
                <div className='gameHeadDetails'>
                    <span className='ratingDetail'>Ratings: {gameDescription.rating} <span style={{color: 'gray'}}>({gameDescription.ratings_count})</span></span>
                    <span style={{ whiteSpace: 'nowrap' }}>Released: {gameDescription.released}</span>
                </div>
            </div>}
            <div className='image-container'>
                {screenshots && <ImageGallery className='gallery' items={screenshots} lazyLoad='true'/>}
            </div>
            {gameDescription && 
            <div className='description' dangerouslySetInnerHTML={{ __html: gameDescription.description }}>
            </div>}
        </div>
        <div className='rightSection'>
            {gameDescription && 
            <div className='rating'>
                <div className='ratingHead'>Ratings</div>
                <div>{ratings && ratings.map(item => {
                    return (<div key={item.id} className='ratingItem'>
                        <span>{item.title}</span>
                        <span> ({item.percent}%)</span>
                        <ProgressBar completed={item.percent} isLabelVisible={false} height='10px' margin='3px 0'/>
                    </div>)
                })}</div>
            </div>}
            <div className='genreSection'>
                <div className='genreHead'>Genres</div>
                <div className='genreDetail'>
                    {genresOfSingle && genresOfSingle.map(item => {
                        return (
                            <div key={item.id}>{item.name}</div>
                        )
                    })}
                </div>    
            </div>
        </div>
    </div>
  )
}

export default GameDetail