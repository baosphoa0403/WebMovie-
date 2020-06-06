import * as ActionType from "../constants/ActionType";
let initialState = {
  listMovie: [],
  detailMovie: {},
  listChair: [],
  listShowTimes: [],
  listTheater: [],
  // loadTable
  listCumRap: [],
  maHeThong: null,
  maCumRap: null
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.data;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.detailMovie = action.data;
      return { ...state };
    case ActionType.GET_LIST_CHAIR_BOOKING:
      state.listChair = action.data;
      return { ...state };
    case ActionType.GET_LIST_SHOW_TIMES:
      // console.log(action);
      state.listShowTimes = action.data;
      return { ...state };
    case ActionType.GET_LIST_THEATER:
      state.listTheater = action.data;
      return { ...state };
      // send mã hệ thống rạp lên 
    case ActionType.SEND_ID_THEATER: 
      state.maHeThong = action.data;
       return {...state}  
    case ActionType.SEND_ID_LIST_THEATER:
      state.maCumRap = action.data;
       return {...state}
    case ActionType.SEND_LIST_THEATER:
      // console.log(action);
       state.listCumRap = action.data    
      return {...state}
    default:
      return { ...state };
  }
};
export default movieReducer;
