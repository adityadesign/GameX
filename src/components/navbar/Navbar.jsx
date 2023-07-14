import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGenreGames, toggleGenreSelect, toggleSelect } from '../../features/gameSlice'
import { getSearchMovie, searchflagToggle } from '../../features/searchGame'
import Genres from '../genres/Genres'
import { slide as Menu } from 'react-burger-menu'


const Navbar = () => {
  const dispatch = useDispatch()
  const {genreSelected} = useSelector(state => state.app)

  const handleChange = (e) => {
    dispatch(getSearchMovie(e.target.value))
    if(e.target.value.length>0){
      dispatch(searchflagToggle(true))
      dispatch(toggleSelect(true))
    } else {
      dispatch(searchflagToggle(false))
      dispatch(toggleSelect(false))
    }
  }

  const genreClick = (id) => {
    dispatch(toggleSelect(true))
    dispatch(getGenreGames(id))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='navbar'>
        <Link to='/' className='logo' onClick={() => (dispatch(toggleSelect(false)), dispatch(searchflagToggle(false)))}>GameX</Link>
        <input type="text" 
          placeholder='Search Games'
          onChange={handleChange}
          />
        <div className='hamburger' id="outer-container">
          <Menu id="menuToggle" pageWrapId={ "page-wrap" } isOpen={genreSelected} outerContainerId={ "outer-container" } right>
            <Genres genreClick={genreClick}/>
          </Menu>
          <div id="page-wrap" className='hamburgerIcon'></div>
        </div>
    </div>
  )
}

export default Navbar