import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames } from '../../features/gameSlice'

const Banner = () => {
    const dispatch = useDispatch()
    const banner = useSelector(state => state.app.allGames.results)
    const {loading} = useSelector(state => state.app)
    
    useEffect(() => {
        dispatch(getAllGames())
    }, [])
    console.log(banner);

    if(loading){
        return (<h2>Loading...</h2>)
    }
    
    return (
        <div>
            banner
        </div>
    )
}

export default Banner