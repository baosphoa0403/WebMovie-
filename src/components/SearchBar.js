import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import * as action from "../redux/action";
const options1 = ["Option 1", "Option 2"];
const options2 = ["Option 3", "Option 4"];
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      tenPhim: "",
      tenHeThongRap: "",
      tenRap: "",
      ngayXem: "",
      gioXem: "",
      maLichChieu: null,
      btnValid: false,
    };
  }
  arrayEmpty = ["Vui lòng chọn phim"];
  renderTenPhim = () => {
    let { listMovie } = this.props;
    if (listMovie) {
      let arr = listMovie.map((item) => {
        return item.tenPhim
      })
      // console.log(arr);

      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            options={arr}
            onChange={(event, newValue) => {
              this.setState({
                tenPhim: newValue,
                tenHeThongRap: "",
                tenRap: "",
                ngayXem: "",
                gioXem: "",
              }, () => {
                console.log(this.state);
                let movie = listMovie.find((movie) => {
                  return movie.tenPhim === this.state.tenPhim
                })
                // console.log(movie);
                this.props.actGetInformationShowTimes(movie.maPhim);
              });

            }}
            value={this.state.tenPhim}
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
    }

  };
  renderHeThongRap = () => {
    // console.log(this.props.listShowTimes); 
    // console.log(this.state.values.tenPhim);
    let { heThongRapChieu } = this.props.listShowTimes;
    if (heThongRapChieu) {
      // console.log(this.props.listShowTimes);
      let arr = heThongRapChieu.map((heThongCumRap) => {
        return heThongCumRap.tenHeThongRap;
      })
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.tenHeThongRap}
            // options={heThongRapChieu.map(rap => {
            //   return rap.tenHeThongRap;
            // })}
            // getOptionLabel={(option)=>option.tenHeThongRap}
            options={arr}
            onChange={(event, newValue) => {
              this.setState({
                ...this.state,
                tenHeThongRap: newValue,
                tenRap: "",
                ngayXem: "",
                gioXem: "",
              }, () => {
                console.log(this.state);

              })
            }}
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
    }else{
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.tenHeThongRap}
            options={['Vui lòng chọn phim']}
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
  renderRap = () => {
    // console.log(this.state.tenHeThongRap);

    let { heThongRapChieu } = this.props.listShowTimes;
    let { tenHeThongRap } = this.state;
    if (heThongRapChieu && tenHeThongRap) {
      //   // lọc maHeThong
      // console.log(this.props.listShowTimes.heThongRapChieu);
      let heThongRap = heThongRapChieu.find(heThongRap => {
        return heThongRap.tenHeThongRap === tenHeThongRap;
      });
      console.log(heThongRap);

      let arr = heThongRap.cumRapChieu.map((rap) => {
        return rap.tenCumRap;
      })
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
              }, () => {
                console.log(this.state);
              })
            }}
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
    }else{
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.tenRap}
            options={['Vui lòng chọn phim và thống rạp']}
            renderInput={params => {
              return (
                <TextField
                  {...params}
                  label="rạp"
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
  // handleOnChangeDate = (event, value) => {
  //   let { heThongRapChieu } = this.props.listShowTimes;
  //   let { tenPhim, tenHeThongRap, tenRap } = this.state;
  //   if (heThongRapChieu && tenHeThongRap && tenPhim && tenRap) {
  //     let heThongRap = heThongRapChieu.find(heThongRap => {
  //       return heThongRap.tenHeThongRap === tenHeThongRap;
  //     });
  //     console.log(heThongRap);

  //     let rap = heThongRap.cumRapChieu.find((rap) => {
  //       return rap.tenCumRap === tenRap
  //     })
  //     const lichChieu = rap.lichChieuPhim.find((lichChieu)=>{
  //       return(new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()) === value
  //     })
  //     console.log(lichChieu.maLichChieu);
  //     this.props.history(`/booking/${lichChieu.maLichChieu}`)
     
  //   }
     
     
  // }
  renderNgayXem = () => {
    let { heThongRapChieu } = this.props.listShowTimes;
    let { tenPhim, tenHeThongRap, tenRap } = this.state;
    if (heThongRapChieu && tenHeThongRap && tenPhim && tenRap) {
      let heThongRap = heThongRapChieu.find(heThongRap => {
        return heThongRap.tenHeThongRap === tenHeThongRap;
      });
      console.log(heThongRap);

      let rap = heThongRap.cumRapChieu.find((rap) => {
        return rap.tenCumRap === tenRap
      })
      // // convert to day and filter day duplicate
      const listDay = new Set(rap.lichChieuPhim.map((lichChieu) => {
        return (new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString())
      }));
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
                gioXem: ""
              }, () => {
                console.log(this.state);
              })
            }}
           
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
            value={this.state.ngayXem}
            options={['Vui lòng chọn phim và thống rạp và rạp']}
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
    if (this.state.tenPhim && this.state.tenHeThongRap && this.state.tenRap && this.state.ngayXem && this.state.gioXem) {
      this.setState({
        btnValid: true
      })
    }
  }
  
  renderGioXem = () => {
    let { heThongRapChieu } = this.props.listShowTimes;
    let { tenPhim, tenHeThongRap, tenRap,  ngayXem} = this.state;
    if (heThongRapChieu && tenHeThongRap && tenPhim && tenRap && ngayXem) {
      let heThongRap = heThongRapChieu.find(heThongRap => {
        return heThongRap.tenHeThongRap === tenHeThongRap;
      });
      // console.log(heThongRap);

      let rap = heThongRap.cumRapChieu.find((rap) => {
        return rap.tenCumRap === tenRap
      })
      // // convert to day and filter day duplicate
      const listTime = new Set(rap.lichChieuPhim.map((lichChieu) => {
        return (new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString())
      }));
      
      const listTimeUpdate = [...listTime];
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.gioXem}
            options={listTimeUpdate}
            onChange={(event, newValue) => {
              this.setState({
                ...this.state,
                gioXem: newValue
              }, () => {
                console.log(this.state);
                this.checkBtn()
                // this.handleOnChangeDate()
              })
            }}
            // onInputChange={this.handleOnChangeDate}
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
    }else{
      return (
        <div style={{ width: 200 }} className="input">
          <Autocomplete
            value={this.state.gioXem}
            options={['Vui lòng chọn phim và thống rạp và rạp và ngày ']}
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
    console.log(this.state.maLichChieu);
      
    console.log(this.props.listMovie);

    return (
      <div className="search_bar">
        {this.renderTenPhim()}
        {this.renderHeThongRap()}
        {this.renderRap()}
        {this.renderNgayXem()}
        {this.renderGioXem()}

        <Button   className="buyTicket" variant="contained" color="secondary" disabled={!this.state.btnValid}>Mua Vé</Button>

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
