import { configureStore } from '@reduxjs/toolkit'
import foodDetail from '../features/foodDetailSlice'

export const store = configureStore({
  reducer: {
    app: foodDetail
  },
})