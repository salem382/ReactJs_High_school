import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    openSidebar : true,
    sidebarWidth : '320px',
    screeSize : 1220
}

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
       
        setOpenSidebar :(state, action) => {
            state.openSidebar = action.payload;
        } ,
        setScreenSize : (state, action) => {
            state.screeSize = action.payload;
        }
    }
})

export default sidebarSlice.reducer;
export const {setOpenSidebar, setScreenSize} = sidebarSlice.actions;