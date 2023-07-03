import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name:'player',
    initialState:{
        currentSlide:0,
        isPlaying: false,
        currentSong:{
            songIndex:null,
            songUri:''
        }
    },
    reducers:{
        setCurrentSlide:(state,action)=>{
            state.currentSlide= action.payload
        },
        setPlay: (state,action) => {
            state.isPlaying= action.payload
        },
        setCurrentSong:(state,action)=>{
            state.currentSong= action.payload
        },
    }
});

export const { setCurrentSlide, setPlay,setCurrentSong } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;