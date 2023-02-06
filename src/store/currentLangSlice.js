import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    lang : "en"
}

const currentLang = createSlice({
    name:'currentLang',
    initialState,
    reducers:{
       
        setCurrentLang :(state, action) => {
            state.lang = action.payload;
        }
    }
})

export default currentLang.reducer;
export const {setCurrentLang} = currentLang.actions;