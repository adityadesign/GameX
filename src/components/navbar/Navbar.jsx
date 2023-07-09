import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleSelect } from '../../features/gameSlice'
import { getSearchMovie, searchflagToggle } from '../../features/searchGame'


const Navbar = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(getSearchMovie(e.target.value))
    if(e.target.value.length>0){
      dispatch(searchflagToggle(true))
      dispatch(toggleSelect(true))
    } else {
      dispatch(searchflagToggle(false))
    }
  }

  return (
    <div className='navbar'>
        <Link to='/' className='logo' onClick={() => dispatch(toggleSelect(false))}>GameX</Link>
        <input type="text" 
          placeholder='Search Games'
          onChange={handleChange}
          />
    </div>
  )
}

export default Navbar