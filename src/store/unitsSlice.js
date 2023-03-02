import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUnits = createAsyncThunk('units/getUnits',

async(unitId, thunkAPI) => {

    const {rejectWithValue} = thunkAPI;
    try {
        const {data} = await axios.get (`https://newbrains-edu.com/api/auth/getUnits/${unitId}`,
        {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("heighNewbrainsToken")}`,
            }
        })  
              
        return data;
    }
    catch (error){
       
        return rejectWithValue(error.message);
    }
})


const unitsSlice = createSlice({
    name:'units',
    initialState:{
        units:[],
        isLoading: false,
        error:null,
        currentUnitsLessons:[],
        activeVideoIndex: 0,
        currentUnit:"",
        activeVideo:{},
        noNext: false
    },
    reducers:{
       
        setCurrentLessons :(state, action) => {
            state.currentUnitsLessons = [...state.units[action.payload].lessons];
            state.currentUnitsLessons.length > 0 ? state.noNext = true : state.noNext = false; 
            state.currentUnit = state.units[action.payload].name;
        },
        setCurrentVideo : (state, action) => {
            state.activeVideoIndex = action.payload;
            state.activeVideo = {...state.currentUnitsLessons[action.payload]};
            state.activeVideoIndex  == state.currentUnitsLessons.length -1 ? state.noNext = true :state.noNext = false; 
        },
        nextBtn : (state) => {
                state.activeVideoIndex = ++state.activeVideoIndex;
                state.activeVideo = {...state.currentUnitsLessons[state.activeVideoIndex]};
    
            if (state.activeVideoIndex == state.currentUnitsLessons.length -1) {
                state.noNext = true;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUnits.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUnits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.units= JSON.parse(JSON.stringify(action.payload.result));
                state.currentUnitsLessons = [...state.units[0].lessons];
                state.activeVideo = {...[...state.units[0].lessons][0]};
                state.currentUnit = state.units[0].name;
                state.activeVideoIndex == state.currentUnitsLessons.length - 1 ? state.noNext = true :state.noNext = false; 
            })
            .addCase(getUnits.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
}) 

export default unitsSlice.reducer;
export const {setCurrentLessons, setCurrentVideo, nextBtn} = unitsSlice.actions;

