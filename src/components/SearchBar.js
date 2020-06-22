import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import * as action from "../redux/action";
import { withRouter } from "react-router";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenPhim: "",
      maPhim: "",
      tenHeThongRap: "",
      tenRap: "",
      ngayXem: "",
      gioXem: "",
      maLichChieu: null,
      btnValid: false,
    };
  }
  renderTenPhim = () => {
    let { listMovie } = this.props;
    if (listMovie) {
      let arr = listMovie.map((item) => {
        return item.tenPhim;
      });
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            options={arr}
            onChange={(event, newValue) => {
              console.log(newValue);
              if (newValue !== null ) {
                this.setState(
                  {
                    tenPhim: newValue,
                    tenHeThongRap: "",
                    tenRap: "",
                    ngayXem: "",
                    gioXem: "",
                    btnValid: false,
                  },
                  () => {
                    let movie = listMovie.find((movie) => {
                      return movie.tenPhim === this.state.tenPhim;
                    });
                    this.setState({
                      maPhim: movie.maPhim,
                    });
                    this.props.actGetInformationShowTimes(movie.maPhim);
                  }
                );
              }
             
            }}
            value={this.state.tenPhim}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  id="tenPhim"
                  label="Phim"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    }
  };
  renderHeThongRap = () => {
    let { heThongRapChieu } = this.props.listShowTimes;
    if (heThongRapChieu) {
      let arr = heThongRapChieu.map((heThongCumRap) => {
        return heThongCumRap.tenHeThongRap;
      });
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.tenHeThongRap}
            options={arr}
            onChange={(event, newValue) => {
              this.setState({
                ...this.state,
                tenHeThongRap: newValue,
                tenRap: "",
                ngayXem: "",
                gioXem: "",
                btnValid: false,
              });
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="hệ thống rạp"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.tenHeThongRap}
            options={["Vui lòng chọn phim"]}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="hệ thống rạp"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    }
  };
  renderRap = () => {
    let { heThongRapChieu } = this.props.listShowTimes;
    let { tenHeThongRap } = this.state;
    if (heThongRapChieu && tenHeThongRap) {
      let heThongRap = heThongRapChieu.find((heThongRap) => {
        return heThongRap.tenHeThongRap === tenHeThongRap;
      });
      let arr = heThongRap.cumRapChieu.map((rap) => {
        return rap.tenCumRap;
      });
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.tenRap}
            options={arr}
            onChange={(event, newValue) => {
              this.setState({
                ...this.state,
                tenRap: newValue,
                ngayXem: "",
                gioXem: "",
                btnValid: false,
              });
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Rạp"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.tenRap}
            options={["Vui lòng chọn phim và thống rạp"]}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Rạp"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    }
  };
  renderNgayXem = () => {
    let { heThongRapChieu } = this.props.listShowTimes;
    let { tenPhim, tenHeThongRap, tenRap } = this.state;
    if (heThongRapChieu && tenHeThongRap && tenPhim && tenRap) {
      let heThongRap = heThongRapChieu.find((heThongRap) => {
        return heThongRap.tenHeThongRap === tenHeThongRap;
      });
      let rap = heThongRap.cumRapChieu.find((rap) => {
        return rap.tenCumRap === tenRap;
      });

      const listDay = new Set(
        rap.lichChieuPhim.map((lichChieu) => {
          return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
        })
      );
      const listDayUpdate = [...listDay];
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.ngayXem}
            options={listDayUpdate}
            onChange={(event, newValue) => {
              this.setState({
                ...this.state,
                ngayXem: newValue,
                gioXem: "",
                btnValid: false,
              });
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Ngày Chiếu"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.ngayXem}
            options={["Vui lòng chọn phim và thống rạp và rạp"]}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Ngày Chiếu"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    }
  };
  checkBtn = () => {
    let { tenPhim, tenHeThongRap, tenRap, ngayXem, gioXem } = this.state;
    if (tenPhim && tenHeThongRap && tenRap && ngayXem && gioXem) {
      this.setState({
        btnValid: true,
      });
    }
  };
  getIDSee = () => {
    var moment = require("moment");
    let { heThongRapChieu } = this.props.listShowTimes;
    let { tenPhim, tenHeThongRap, tenRap, ngayXem, gioXem } = this.state;
    if (
      heThongRapChieu &&
      tenHeThongRap &&
      tenPhim &&
      tenRap &&
      gioXem &&
      ngayXem
    ) {
      let heThongRap = heThongRapChieu.find((heThongRap) => {
        return heThongRap.tenHeThongRap === tenHeThongRap;
      });
      let rap = heThongRap.cumRapChieu.find((rap) => {
        return rap.tenCumRap === tenRap;
      });
      const lichChieu = rap.lichChieuPhim.find((lichChieu) => {
        return (
          new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() ===
            ngayXem &&
          moment(lichChieu.ngayChieuGioChieu).format("HH:mm:A") === gioXem
        );
      });
      this.setState(
        {
          maLichChieu: lichChieu.maLichChieu,
        },
        () => {
          localStorage.setItem(
            "maLichChieu",
            JSON.stringify(this.state.maLichChieu)
          );
        }
      );
    }
  };
  changePage = () => {
    if (JSON.parse(localStorage.getItem("user")) === null) {
      this.props.history.push("/form");
    } else {
      if (this.state.maLichChieu) {
        this.props.history.push(`/booking/${this.state.maLichChieu}`);
      }
    }
  };
  renderGioXem = () => {
    var moment = require("moment");
    let { heThongRapChieu } = this.props.listShowTimes;
    let { tenPhim, tenHeThongRap, tenRap, ngayXem } = this.state;
    if (heThongRapChieu && tenHeThongRap && tenPhim && tenRap && ngayXem) {
      let heThongRap = heThongRapChieu.find((heThongRap) => {
        return heThongRap.tenHeThongRap === tenHeThongRap;
      });
      let rap = heThongRap.cumRapChieu.find((rap) => {
        return rap.tenCumRap === tenRap;
      });
      const listTime = new Set(
        rap.lichChieuPhim.map((lichChieu) => {
          return moment(lichChieu.ngayChieuGioChieu).format("HH:mm:A");
        })
      );

      const listTimeUpdate = [...listTime];
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.gioXem}
            options={listTimeUpdate}
            onChange={(event, newValue) => {
              this.setState(
                {
                  ...this.state,
                  gioXem: newValue,
                  btnValid: false,
                },
                () => {
                  this.checkBtn();
                  this.getIDSee();
                }
              );
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Giờ Chiếu"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.gioXem}
            options={["Vui lòng chọn phim và thống rạp và rạp và ngày "]}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Giờ Chiếu"
                  margin="normal"
                  variant="outlined"
                />
              );
            }}
          />
        </div>
      );
    }
  };
  render() {
    return (
      <div className="search_bar" name="test3">
        {this.renderTenPhim()}
        {this.renderHeThongRap()}
        {this.renderRap()}
        {this.renderNgayXem()}
        {this.renderGioXem()}
        <Button
          onClick={this.changePage}
          className="buyTicket"
          variant="contained"
          color="secondary"
          disabled={!this.state.btnValid}
        >
          Mua Vé
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
    listShowTimes: state.movieReducer.listShowTimes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actGetInformationShowTimes: (idMovie) => {
      dispatch(action.actGetInformationShowTimesAPI(idMovie));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
