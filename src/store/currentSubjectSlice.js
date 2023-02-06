
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    subject : ""
}

const currentSubjectSlice = createSlice({
    name:'subject',
    initialState,
    reducers:{
       
        setCurrentSubject :(state, action) => {
            state.subject = action.payload;
        }
    }
})

export default currentSubjectSlice.reducer;
export const {setCurrentSubject} = currentSubjectSlice.actions;
