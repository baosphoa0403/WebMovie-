import * as ActionType from "../constants/ActionType"
let initialState = {
    listMovie: [],
    detailMovie: {}
};


const movieReducer = (state = initialState , action) => {
    switch (action.type) {
        case ActionType.GET_LIST_MOVIE:
            let listMovieUpdate = [...state.listMovie];
            listMovieUpdate = action.data;
            state.listMovie = listMovieUpdate;            
            return {...state}
        default:
          return {...state};
    }
}
export default movieReducer;