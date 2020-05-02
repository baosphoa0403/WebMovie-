import {combineReducers} from "redux"; 
import movieReducer from "./movieReducer";
export const rootReducers = combineReducers({
    // nơi chứ các reducer con
    movieReducer: movieReducer
})