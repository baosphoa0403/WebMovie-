import {combineReducers} from "redux"; 
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";
export const rootReducers = combineReducers({
    movieReducer: movieReducer,
    userReducer: userReducer
})