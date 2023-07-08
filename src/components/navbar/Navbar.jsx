import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')

  

  return (
    <div className='navbar'>
        <Link to='/' className='logo'>GameX</Link>
        <input type="text" 
          placeholder='Search Games'
          value={searchData}
          onChange={e => setSearchData(e.target.value)}
          />
    </div>
  )
}

export default Navbar