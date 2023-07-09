import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getSearchMovie = createAsyncThunk('getSearchMovie', async(data, {rejectWithValue}) => {
    const response = await fetch(`https://api.rawg.io/api/games?search=${data}&key=585e1db683b242cabb477ced1f2265bc`)
    try{
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const searchGame = createSlice({
    name: 'searchGame',
    initialState: {
      searchGame : [],
      loading: false,
      searchflag: false
    },

    reducers: {
        searchflagToggle: (state, action) => {
            state.searchflag = action.payload
        }
      },

    extraReducers: (builder) => {  
      builder.addCase(getSearchMovie.pending, (state) => {
          state.loading = true
      })
      builder.addCase(getSearchMovie.fulfilled, (state, action) => {
          state.loading = false
          state.searchGame = action.payload.results
      })
      builder.addCase(getSearchMovie.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
      })
    }
  })
  
  export default searchGame.reducer
  
  export const {searchflagToggle} = searchGame.actions