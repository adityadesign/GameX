import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const showFood = createAsyncThunk('showFood', async(_,{rejectWithValue}) => {
    const response = await fetch('https://ind-nutrient-api1.p.rapidapi.com/food', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f3d685b04msh5d446a3406ca1e2p153b91jsn57bef264af3e',
		'X-RapidAPI-Host': 'ind-nutrient-api1.p.rapidapi.com'
        }
    })
    try {
        const result = await response.json()
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const foodDetail = createSlice({
  name: 'foodDetail',
  initialState: {
    foods: []
  },
  extraReducers: (builder) => {
    builder.addCase(showFood.pending, (state) => {
        state.loading = true
    })
    builder.addCase(showFood.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
    })
    builder.addCase(showFood.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
    })
  }
})

export default foodDetail.reducer