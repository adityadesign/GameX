import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, toggleGenreSelect, toggleSelect } from '../../features/gameSlice'
import './index.css'
import { searchflagToggle } from '../../features/searchGame'
import { useNavigate } from 'react-router-dom'

const Genres = (props) => {
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.app.genres.results)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getGenres())
    },[])

    const handleClick = (id) => {
      props.genreClick(id)
      dispatch(searchflagToggle(false))
      dispatch(toggleGenreSelect(false))
      dispatch(toggleSelect(true))
      navigate('/')
    }

  return (
    <div className='genres'>
      <div className='genresHead'>Genres</div>
      {genres && genres.map(item => {
        return (
          <div key={item.id} className='genreList' onClick={() => handleClick(item.id)}>
            <img src={item.image_background} alt="" />
            <div>{item.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Genres