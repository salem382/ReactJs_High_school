import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    openMenu : false
}

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
       
        setOpenMenu :(state, action) => {
            state.openMenu = action.payload;
        }
    }
})

export default menuSlice.reducer;
export const {setOpenMenu} = menuSlice.actions;
