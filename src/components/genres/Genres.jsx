import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../features/gameSlice'
import './index.css'

const Genres = () => {
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.app.genres.results)

    useEffect(() => {
        dispatch(getGenres())
    },[])
    
  return (
    <div className='genres'>
      <div className='genresHead'>Genres</div>
      {genres && genres.map(item => {
        return (
          <div key={item.id} className='genreList'>
            <img src={item.image_background} alt="" />
            <div>{item.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Genres