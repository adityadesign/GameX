import React, { useEffect } from 'react'
import Genres from '../components/genres/Genres'
import Banner from '../components/banner/Banner'
import './pages.css'
import Trending from '../components/trending/Trending'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames } from '../features/gameSlice'
import Popular from '../components/popular/Popular'

const Home = () => {
  const dispatch = useDispatch()
  const rand = Math.floor(Math.random()*20)
  const games = useSelector(state => state.app.allGames.results)
  const desiredBanner = games && games.length>0 ? games[rand] : null
  const desired= games && games.length>0 ? games : null

  useEffect(() => {
      dispatch(getAllGames())
  }, [])

  return (
    <div className='home'>
        <Genres />
        <div className='displaySection'>
          <Banner desired={desiredBanner}/>
          <Trending desired={desired}/>
          <Popular desired={desired}/>
        </div>
    </div>
  )
}

export default Home