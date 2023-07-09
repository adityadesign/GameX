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

export const getGameDescription = createAsyncThunk('getGameDescription', async(id, {rejectWithValue}) => {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=585e1db683b242cabb477ced1f2265bc`)
    try {
        const result = await response.json()
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getGenreGames = createAsyncThunk('getGenreGames', async(id, {rejectWithValue}) => {
    const response = await fetch(`https://api.rawg.io/api/games?key=585e1db683b242cabb477ced1f2265bc&genres=${id}`)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const getScreenshots = createAsyncThunk('getScreenshots', async(id, {rejectWithValue}) => {
    const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=585e1db683b242cabb477ced1f2265bc`)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const gameDetail = createSlice({
  name: 'gameDetail',
  initialState: {
    genres: [],
    allGames : [],
    loading: false,
    gameDescription: [],
    genreGames: [],
    screenshots: null,
    ratings: null,
    genresOfSingle: null,
    selected: false,
  },

  reducers: {
    toggleSelect: (state, action) => {
        state.selected = action.payload
    },
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

    builder.addCase(getGameDescription.pending, (state) => {
        state.loading = true
    })
    builder.addCase(getGameDescription.fulfilled, (state, action) => {
        state.loading = false
        state.gameDescription = action.payload
        state.ratings = action.payload.ratings
        state.genresOfSingle = action.payload.genres
    })
    builder.addCase(getGameDescription.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
    })

    builder.addCase(getGenreGames.pending, (state) => {
    state.loading = true
    })
    builder.addCase(getGenreGames.fulfilled, (state, action) => {
        state.loading = false
        state.genreGames = action.payload
    })
    builder.addCase(getGenreGames.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
    })

    builder.addCase(getScreenshots.pending, (state) => {
        state.loading = true
    })
    builder.addCase(getScreenshots.fulfilled, (state, action) => {
        state.loading = false
        state.screenshots = action.payload.results.map(item => {
            return {original: item.image, thumbnail: item.image, id: item.id}
        })
    })
    builder.addCase(getScreenshots.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
    })
  }
})

export default gameDetail.reducer

export const {toggleSelect} = gameDetail.actions