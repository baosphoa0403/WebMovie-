import Axios from "axios";
import * as ActionType from "../constants/ActionType";
//  get list movie
export const actGetListMovieAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    })
      .then((rs) => {
        dispatch(actGetListMovie(rs.data));
      })
      .catch((err) => {});
  };
};
// get detail Movie

// hihi
export const actGetListChairBookingAPI = (id) => {
  return (dispatch) => {
    dispatch(actGetDetailMovieStartedBooking());
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
    })
      .then((rs) => {
        dispatch(actGetListChairBooking(rs.data));
      })
      .catch((err) => {
        dispatch(actGetDetailMovieEndBooking(err.response.data));
      });
  };
};
export const actGetListChairBooking = (listChair) => {
  return {
    type: ActionType.GET_LIST_CHAIR_BOOKING,
    data: listChair,
  };
};
export const actGetDetailMovieStartedBooking = () => {
  return {
    type: "STARBOOKING",
  };
};
export const actGetDetailMovieEndBooking = (messenger) => {
  return {
    type: "ENDBOOKING",
    data: messenger,
  };
};

// lấy danh sách cụm rạp
export const actGetInformationShowTimesAPI = (idMovie) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`,
    })
      .then((rs) => {
        dispatch(actGetInformationShowTimes(rs.data));
      })
      .catch();
  };
};
//  lấy hệ thống cụm rạp
export const actGetListSystemTheaterAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((rs) => {
        dispatch(actGetListSystemTheater(rs.data));
      })
      .catch();
  };
};
// gửi thông tin lịch chiếu lên store
export const actGetListSystemTheater = (listTheater) => {
  return {
    type: ActionType.GET_LIST_THEATER,
    data: listTheater,
  };
};
export const actGetInformationShowTimes = (listShowTimes) => {
  return {
    type: ActionType.GET_LIST_SHOW_TIMES,
    data: listShowTimes,
  };
};

export const actGetListMovie = (listMovie) => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie,
  };
};

export const actGetDetailMovieAPI = (id) => {
  return (dispatch) => {
    dispatch(actGetDetailMovieStarted());
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    })
      .then((rs) => {
        dispatch(actGetDetailMovie(rs.data));
      })
      .catch();
  };
};

export const actGetDetailMovie = (detailMovie) => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: detailMovie,
  };
};
export const actGetDetailMovieStarted = () => {
  return {
    type: "STAR",
  };
};
export const actGetDetailMovieEnd = (messenger) => {
  return {
    type: "END",
    data: messenger,
  };
};

export const postBreakTicket = (breaks) => {
  return {
    type: "POST_BREAKS",
    data: breaks,
  };
};
