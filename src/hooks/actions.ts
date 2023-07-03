import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {setCurrentSlide, setCurrentSong, setPlay} from "../app/repository/ShazamApi/PlayerSlice";

const actions = {
    setCurrentSlide,
    setPlay,
    setCurrentSong
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}