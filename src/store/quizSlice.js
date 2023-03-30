import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUQuizess = createAsyncThunk('quizess/getUQuizess',

async(quizId, thunkAPI) => {

    const {rejectWithValue} = thunkAPI;
    try {
        const {data} = await axios.get (`http://localhost:5000/assignment/${quizId}`,
        {
            headers: {
              token: `${localStorage.getItem("newbrainsToken")}`,
            }
        })  
              
        return data;
    }
    catch (error){
       
        return rejectWithValue(error.message);
    }
})

const quizessSlice = createSlice({
    name:'quizess',
    initialState:{
        quizess:[],
        isLoading: false,
        error:null,
        currentQuiz:{},
        currentQuizIndex:0,
        totalQuestions:0
    },
    reducers:{
        setCurrentQuiz: (state, action) => {
           state.currentQuiz = {...state.quizess[action.payload]};
           state.currentQuizIndex = Number(action.payload);
            state.totalQuestions = state.currentQuiz.questions.length;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUQuizess.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUQuizess.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizess = JSON.parse(JSON.stringify(action.payload.quizes));
                state.currentQuiz = {...state.quizess[0]};
                state.totalQuestions = state.currentQuiz.questions.length;
            })
            .addCase(getUQuizess.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
}) 

export default quizessSlice.reducer;
export const {setCurrentQuiz} = quizessSlice.actions;
