import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from '@material-ui/core/Button';
import * as action from "../redux/action";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        maPhim: null,
        tenPhim: null,
        tenHeThongRap: null, 
        tenRap: null,
        ngayXem: null,
        gioXem: null,
      },
        btnValid: false
      };
  }
  arrayEmpty = ["Vui lòng chọn phim"];
  handleOnChangeTenPhim = (event, value) => {
    let {listMovie} = this.props;
    //   lấy dc phim
    // console.log(value);
    // b1 setState lưu TenPhim
    this.setState({
       values: {...this.state.values, tenPhim: value},
    }, ()=>{
      console.log(this.state.values);
    })
    let movie = listMovie.find(movie => {
      return movie.tenPhim === value;
    });
    // this.setState({
    //   maPhim: movie.maPhim
    // }, ()=>{
    //   console.log(this.state.values);
    // })
    console.log(movie.maPhim);
    
    // trả về 1 object để r lấy object đó movie.maPhim để gửi lên sever
    //  console.log(movie.maPhim);
  //  if (movie.maPhim) {
    // this.props.actGetInformationShowTimes(movie.maPhim);
  //  }
  };
  // handleBlur  = (event, values) => {
  //     console.log(event.target, values);
      
  // }
  renderTenPhim = () => {
    let {listMovie} = this.props;
    return (
      <div style={{ width: 200 }} className="input">
        <Autocomplete
          options={listMovie.map(movie => {
            return movie.tenPhim;
          })}
          onChange={this.handleOnChangeTenPhim}
          renderInput={params => {
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
  };
  handleHeThongRap = (event, value) => {
    console.log(value);
    this.setState({
      values: {...this.state.values, tenHeThongRap: value},
    }, ()=>{
      console.log(this.state.values);
    });
  };
  renderHeThongRap = () => {
    // console.log(this.props.listShowTimes.heThongRapChieu);
    // console.log(this.state.values.tenPhim);
    let {heThongRapChieu} = this.props.listShowTimes;
    let {tenPhim} = this.state.values;
    if (heThongRapChieu && tenPhim) {
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            options={heThongRapChieu.map(rap => {
              return rap.tenHeThongRap;
            })}
            onChange={this.handleHeThongRap}
            renderInput={params => {
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
           options={this.arrayEmpty}
            renderInput={params => {
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
  handleOnChangeRap = (event, value) => {
    console.log(value);
    this.setState({
      values: {...this.state.values, tenRap: value},
    }, ()=>{
      console.log(this.state.values);
      
    })
  }
  renderRap = () => {
    // console.log(this.state.tenHeThongRap);
    // console.log(this.props.listShowTimes.heThongRapChieu);
    let {heThongRapChieu} = this.props.listShowTimes;
    if (heThongRapChieu && this.state.values.tenPhim && this.state.values.tenHeThongRap ) {
      let index = heThongRapChieu.findIndex(rap => {
        return rap.tenHeThongRap === this.state.values.tenHeThongRap;
      });
      // console.log(this.props.listShowTimes.heThongRapChieu[index].cumRapChieu);
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            options={heThongRapChieu[index].cumRapChieu.map(cumRap => {
              return cumRap.tenCumRap;
            })}
            onChange={this.handleOnChangeRap}
            renderInput={params => {
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
            options={this.arrayEmpty}
            renderInput={params => {
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
  handleOnchangeNgayXem = (event, value) => {
     this.setState({
      values: {...this.state.values, ngayXem: value}
      }, ()=>{
        console.log(this.state.values);
        
      })
  }
  renderNgayXem = () => {
      let {heThongRapChieu} = this.props.listShowTimes;
      if (heThongRapChieu && this.state.values.tenPhim && this.state.values.tenHeThongRap && this.state.values.tenRap) {
        let index = heThongRapChieu.findIndex(rap => {
          return rap.tenHeThongRap === this.state.values.tenHeThongRap;
      });
      // console.log(this.props.listShowTimes.heThongRapChieu[index].cumRapChieu);
      // console.log(this.state.values.tenRap);
      let indexTenRap = heThongRapChieu[index].cumRapChieu.findIndex((tenRapChiTiet)=>{
        return tenRapChiTiet.tenCumRap === this.state.values.tenRap;
      })
      // console.log(this.props.listShowTimes.heThongRapChieu[index].cumRapChieu[indexTenRap].lichChieuPhim);
      // convert to day and filter day duplicate
      const listDay = new Set(heThongRapChieu[index].cumRapChieu[indexTenRap].lichChieuPhim.map((lichChieu)=>{
        return (new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString())
      }));
      console.log(listDay);
      
      const listDayUpdate = [...listDay];
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
           onChange = {this.handleOnchangeNgayXem}
            options={listDayUpdate.map((time)=>{
                  return time
            })}
            renderInput={params => {
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
    }else{
    return (
      <div style={{ width: 200 }} className="input">
        <Autocomplete
          options={this.arrayEmpty}
          renderInput={params => {
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
  }
  checkBtn = () => {
    if (this.state.values.tenPhim && this.state.values.tenHeThongRap && this.state.values.tenRap && this.state.values.ngayXem && this.state.values.gioXem) {
      this.setState({
        btnValid: true
      })
    }
  }
  handleOnChangeGioXem = (event, value) => {
    this.setState({
      values: {...this.state.values, gioXem: value},
    },
    ()=>{
      console.log(this.state.values);
      this.checkBtn()
    }
    )
  }
  renderGioXem = () => {
    let {heThongRapChieu} = this.props.listShowTimes;
      if (heThongRapChieu && this.state.values.tenPhim  && this.state.values.tenHeThongRap  && this.state.values.tenRap && this.state.values.ngayXem) {
        let index = heThongRapChieu.findIndex(rap => {
          return rap.tenHeThongRap === this.state.values.tenHeThongRap;
      });
      console.log(this.props.listShowTimes.heThongRapChieu[index].cumRapChieu);
      console.log(this.state.values.tenRap);
      let indexTenRap = heThongRapChieu[index].cumRapChieu.findIndex((tenRapChiTiet)=>{
        return tenRapChiTiet.tenCumRap === this.state.values.tenRap;
      })
      console.log(this.props.listShowTimes.heThongRapChieu[index].cumRapChieu[indexTenRap].lichChieuPhim);
      const listDay = new Set(heThongRapChieu[index].cumRapChieu[indexTenRap].lichChieuPhim.map((lichChieu)=>{
        return (new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString())
      }));
      console.log(listDay);
      
      const listDayUpdate = [...listDay];
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            onChange={this.handleOnChangeGioXem}
            options={listDayUpdate.map((time)=>{
                  return time
            })}
            renderInput={params => {
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
    } else{
    return (
      <div style={{ width: 200 }} className="input">
        <Autocomplete
          options={this.arrayEmpty}
          renderInput={params => {
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
  }
  
  render() {
    //  này là cái mảng lấy từ server về nè
    //  h mún lấy cái time á

    // console.log(this.props.listMovie);

    return (
      <div className="search_bar">
          {this.renderTenPhim()}
          {this.renderHeThongRap()}
          {this.renderRap()}
          {this.renderNgayXem()}
          {this.renderGioXem()}
          <Button variant="contained" color="secondary" disabled={!this.state.btnValid}>Mua Vé</Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie,
    listShowTimes: state.movieReducer.listShowTimes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actGetInformationShowTimes: idMovie => {
      dispatch(action.actGetInformationShowTimesAPI(idMovie));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
