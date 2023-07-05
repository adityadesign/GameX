import React from 'react'
import Genres from '../components/genres/Genres'
import Banner from '../components/banner/Banner'
import './pages.css'

const Home = () => {
  return (
    <div className='home'>
        <Genres />
        <Banner />
    </div>
  )
}

export default Home