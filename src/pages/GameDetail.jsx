import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGameDescription } from '../features/gameSlice'

const GameDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {allGames, loading} = useSelector(state => state.app)
    const description = useSelector(state => state.app?.gameDescription.description_raw)
    const desired = description && description.length>0 ? description : null
    const [gameData, setGameData] = useState()
    const [singleGameData, setSingleGameData] = useState()

    useEffect(() => {
        dispatch(getGameDescription(id))
        if(id){
            const filtered = allGames.results.filter(item => Number(item.id) === Number(id))
            setGameData(filtered[0])
        }
            setSingleGameData(desired)
    },[])
    console.log(singleGameData);
    if(loading){
        return (<h2>Loading...</h2>)
    }

  return (
    <div>
        {singleGameData && <div>{singleGameData.description_raw}</div>}
    </div>
  )
}

export default GameDetail