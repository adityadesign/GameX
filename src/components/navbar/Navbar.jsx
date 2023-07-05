import React from 'react'
import './index.css'

const Navbar = () => {
const handleChange = (e) => {
    console.log(e.target.value);
}

  return (
    <div className='navbar'>
        <div className='logo'>GameX</div>
        <input type="text" 
            placeholder='Search Games'
            onChange={handleChange}
        />
    </div>
  )
}

export default Navbar