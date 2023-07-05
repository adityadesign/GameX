import { configureStore } from '@reduxjs/toolkit'
import gameDetail from '../features/gameSlice'

export const store = configureStore({
  reducer: {
    app: gameDetail
  },
})