import { useSelector } from 'react-redux'
import './index.css'

const Banner = (props) => {
    const {loading} = useSelector(state => state.app)
    if(loading){
        return (<h2>Loading...</h2>)
    }
    return (
        <div className='bannerComponent'>
            {props.desired && (
                <>
                    <img className='banner' src={props.desired.background_image} alt="" /> 
                    <div className='image-overlay'></div>
                    <div className='movieTitle'>{props.desired.name}</div>
                </>
            )}
        </div>
    )
}

export default Banner