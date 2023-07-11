import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleSelect } from '../../features/gameSlice'
import { getSearchMovie, searchflagToggle } from '../../features/searchGame'
import Genres from '../genres/Genres'
import { slide as Menu } from 'react-burger-menu'


const Navbar = () => {
  const dispatch = useDispatch()
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <div className='navbar'>
        <Link to='/' className='logo' onClick={() => (dispatch(toggleSelect(false)), dispatch(searchflagToggle(false)))}>GameX</Link>
        <input type="text" 
          placeholder='Search Games'
          onChange={handleChange}
          />
        <div className='hamburger' id="outer-container">
          <Menu id="menuToggle" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
            <Genres />
          </Menu>
          <div id="page-wrap" className='hamburgerIcon'></div>
        </div>
    </div>
  )
}

export default Navbar