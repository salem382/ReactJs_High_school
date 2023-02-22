import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isEnd : false,
    totalSubmited:0,
    totalGrade:0
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
            state.totalSubmited = 0;
        },
        setTotalGrade : (state, action) => {
            state.totalGrade = state.totalGrade + action.payload;
        },
        defaultTotalGrade : (state, action) => {
            state.totalGrade = 0;
        }
    }
})

export default showResult.reducer;
export const {setIsEnd, inCreaseTotalSubmited,setTotalQuestions,defaultTotalQuestions,
     defaultTotalSubmited, setTotalGrade, defaultTotalGrade} = showResult.actions;
