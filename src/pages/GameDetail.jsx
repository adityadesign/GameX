import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGameDescription } from '../features/gameSlice'
import ImageGallery from 'react-image-gallery';
import './pages.css'
import ProgressBar from "@ramonak/react-progress-bar";

const GameDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {allGames, loading, gameDescription} = useSelector(state => state.app)
    const [gameData, setGameData] = useState()
    const [images, setImages] = useState()
   
    useEffect(() => {
        dispatch(getGameDescription(id))
        const filtered = allGames.results.filter(item => Number(item.id) === Number(id))
        const screenshots = filtered[0].short_screenshots
        setGameData(filtered[0])
        setImages(screenshots.map(item => {
            return {id: item.id, 
                original: item.image}
        }))
        },[])

    if(loading){
        return (<h2>Loading...</h2>)
    }

  return (
    <div className='gameDetailSection'>
        <div className='leftSection'>
            {gameData && 
            <div>
                <div className='gameHead'>{gameData.name}</div>
                <div className='gameHeadDetails'>
                    <span className='ratingDetail'>Ratings: {gameData.rating} <span style={{color: 'gray'}}>({gameData.ratings_count})</span></span>
                    <span style={{ whiteSpace: 'nowrap' }}>Released: {gameData.released}</span>
                </div>
            </div>}
            {images && 
            <div className='image-container'>
                <ImageGallery className='gallery' items={images}/>
            </div>}
            {gameDescription && 
            <div className='description' dangerouslySetInnerHTML={{ __html: gameDescription.description }}>
            </div>}
        </div>
        <div className='rightSection'>
            {gameData && 
            <div className='rating'>
                <div className='ratingHead'>Ratings</div>
                <div>{gameData.ratings.map(item => {
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
                    {gameData && gameData.genres.map(item => {
                        return (
                            <div>{item.name}</div>
                        )
                    })}
                </div>    
            </div>
        </div>
    </div>
  )
}

export default GameDetail