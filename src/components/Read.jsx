import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showFood } from '../features/foodDetailSlice'

const Read = () => {
    const dispatch = useDispatch()
    const {users} = useSelector((state) => state.app)

    useEffect(() => {
        dispatch(showFood())
    },[])
    
console.log(users);
  return (
    <div>Read</div>
  )
}

export default Read