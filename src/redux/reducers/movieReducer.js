import * as ActionType from "../constants/ActionType";
let initialState = {
  listMovie: [],
  detailMovie: {},
  listChair: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.data;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.detailMovie = action.data;
      return {...state};
    case ActionType.GET_LIST_CHAIR_BOOKING:
      state.listChair = action.data;
      return {...state}
    default:
      return { ...state };
  }
};
export default movieReducer;
