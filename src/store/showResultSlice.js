import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isEnd : false,
    totalSubmited:1
}

const showResult = createSlice({
    name:'end',
    initialState,
    reducers:{
        setIsEnd :(state, action) => {
            state.isEnd = action.payload;
        },
        inCreaseTotalSubmited : (state) => {
            state.totalSubmited = ++state.totalSubmited;
        },
        defaultTotalSubmited : (state) => {
            state.totalSubmited = 1;
        }
    }
})

export default showResult.reducer;
export const {setIsEnd, inCreaseTotalSubmited, defaultTotalSubmited} = showResult.actions;
