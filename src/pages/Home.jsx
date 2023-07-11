import React, { useEffect, useRef, useState } from 'react'
import Genres from '../components/genres/Genres'
import Banner from '../components/banner/Banner'
import './pages.css'
import Trending from '../components/trending/Trending'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames, getGenreGames, toggleSelect } from '../features/gameSlice'
import Popular from '../components/popular/Popular'

const Home = () => {
  const dispatch = useDispatch()
  const rand = Math.floor(Math.random()*20)
  const games = useSelector(state => state.app.allGames.results)
  const desiredBanner = games && games.length>0 ? games[rand] : null
  const {searchflag, searchGame} = useSelector(state => state.search)
  const trending = games && games.length>0 ? games : null
  const desired= searchflag ? searchGame : (games && games.length>0 ? games : null)
  const {genreGames, genres, selected} = useSelector(state => state.app)
  const genreName = useRef('')
  const displayInHamburgerMenu = window.innerWidth <= 1000;

  useEffect(() => {
      dispatch(getAllGames())
  }, [])

  const genreClick = (id) => {
    dispatch(toggleSelect(true))
    dispatch(getGenreGames(id))
    genreName.current = genres.results.filter(item => item.id === id)[0].name
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='home'>
        {displayInHamburgerMenu ? "" : <Genres genreClick={genreClick}/>}
        <div className='displaySection'>
        {!selected ? 
          <>
            <Banner desired={desiredBanner}/>
            <Trending desired={trending}/>
            <Popular desired={desired} genreName={genreName} selected={selected}/>
          </> : 
          <>
          {searchflag ? 
            <Popular desired={desired} genreName={genreName.current} selected={selected}/> :
            <Popular desired={genreGames.results} genreName={genreName.current} selected={selected}/>
          }
          </>
        }
        </div>
    </div>
  )
}

export default Home