import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUser = createAsyncThunk('user/getUser' ,async (_, thunkAPI) => {

    const {rejectWithValue} = thunkAPI;
    try {
        const {data} = await axios.get('https://newbrainshigh.com/api/auth/userProfile', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("heighNewbrainsToken")}`
            }
        })
        return data;
    }catch (error) {
        return rejectWithValue(error.message);
    }
})



const currentUser = createSlice({
    name:'user',
    initialState:{user:{}, isLoading: false, error:null},
    extraReducers: (builder) => {
        builder
          .addCase(getUser.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = { ...action.payload.user };
          })
          .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
      },
}) 

export default currentUser.reducer;