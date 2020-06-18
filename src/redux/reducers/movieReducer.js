import * as ActionType from "../constants/ActionType";
let initialState = {
  listMovie: [],

  listShowTimes: [],
  listTheater: [],
  // loadTable
  listCumRap: [],
  maHeThong: null,
  maCumRap: null,
  // detail
  detailMovie: null,
  loading: false,
  error: null,
  // booking
  listChair: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.data;
      return { ...state };
    // detail
    case ActionType.GET_DETAIL_MOVIE:
      state.detailMovie = action.data;
      state.loading = false;
      state.err = null;
      return { ...state };
    case "STAR":
      state.loading = true;
      state.detailMovie = {};
      state.err = null;
      return { ...state };
    case "END":
      state.loading = false;
      state.detailMovie = {};
      state.err = action.data;
      return { ...state };
    // booking
    case ActionType.GET_LIST_CHAIR_BOOKING:
      state.listChair = action.data;
      state.loading = false;
      state.err = null;
      return { ...state };
    case "STARBOOKING":
      state.loading = true;
      state.listChair = [];
      state.err = null;
      return { ...state };
    case "ENDBOOKING":
      state.loading = false;
      state.listChair = [];
      state.err = action.data;
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
      return { ...state };
    case ActionType.SEND_ID_LIST_THEATER:
      state.maCumRap = action.data;
      return { ...state };
    case ActionType.SEND_LIST_THEATER:
      // console.log(action);
      state.listCumRap = action.data;
      return { ...state };
    default:
      return { ...state };
  }
};
export default movieReducer;
