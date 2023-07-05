import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getGenres = createAsyncThunk('getGenres', async(_,{rejectWithValue}) => {
    const response = await fetch('https://api.rawg.io/api/genres?key=585e1db683b242cabb477ced1f2265bc')
    try {
        const result = await response.json()
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getAllGames = createAsyncThunk('getAllGames', async(_, {rejectWithValue}) => {
  const response = await fetch('https://api.rawg.io/api/games?key=585e1db683b242cabb477ced1f2265bc')
    try {
        const result = await response.json()
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const gameDetail = createSlice({
  name: 'gameDetail',
  initialState: {
    genres: [],
    searchGame : [],
    allGames : [],
    loading: false
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
        state.loading = true
    })
    builder.addCase(getGenres.fulfilled, (state, action) => {
        state.loading = false
        state.genres = action.payload
    })
    builder.addCase(getGenres.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
    })

    builder.addCase(getAllGames.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAllGames.fulfilled, (state, action) => {
        state.loading = false
        state.allGames = action.payload
    })
    builder.addCase(getAllGames.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    }
})

export default gameDetail.reducer