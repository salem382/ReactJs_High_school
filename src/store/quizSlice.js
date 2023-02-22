import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUQuizess = createAsyncThunk('quizess/getUQuizess',

async(quizId, thunkAPI) => {

    const {rejectWithValue} = thunkAPI;
    try {
        const {data} = await axios.get (`https://newbrainshigh.com/api/auth/getQuizesWeb/${quizId}`,
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

const quizessSlice = createSlice({
    name:'quizess',
    initialState:{
        quizess:[],
        isLoading: false,
        error:null,
        curentQuizIndx :0,
        currentQuiz:{}
    },
    reducers:{
        setCurrentQuiz: (state, action) => {
           state.currentQuiz = {...state.quizess[action.payload]};
           state.curentQuizIndx = action.payload;
           let total_grad = 0;
            state.currentQuiz.questions.forEach((question) => {
                total_grad += question.question_grade;
            })
            state.currentQuiz.total_grad = total_grad;
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
                state.quizess = JSON.parse(JSON.stringify(action.payload.result));
                state.currentQuiz = {...state.quizess[0]};
                let total_grad = 0;
                state.currentQuiz.questions.forEach((question) => {
                    total_grad += question.question_grade;
                })
                state.currentQuiz.total_grad = total_grad;
            })
            .addCase(getUQuizess.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
}) 

export default quizessSlice.reducer;
export const {setCurrentQuiz} = quizessSlice.actions;
