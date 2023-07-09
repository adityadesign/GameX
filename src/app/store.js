import { configureStore } from '@reduxjs/toolkit'
import gameDetail from '../features/gameSlice'
import searchGame from '../features/searchGame'

export const store = configureStore({
  reducer: {
    app: gameDetail,
    search : searchGame
  },
})