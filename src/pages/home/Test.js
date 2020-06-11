import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import * as action from "../redux/action";
const options1 = ["Option 1", "Option 2"];
const options2 = ["Option 3", "Option 4"];
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // values: {
      //   maPhim: "",
      //   tenPhim: "",
      //   tenHeThongRap: "",
      //   tenRap: "",
      //   ngayXem: "",
      //   gioXem: "",
      // },
      inputValueFilm: "",
      inputValueCluster: "",
      valuesFilm: "",
      valuesCluster: "",
    };
  }

  renderTenPhim = () => {
    let { listMovie } = this.props;
    if (listMovie) {
      return (
        <Autocomplete
          value={this.state.valuesFilm}
          onChange={(event, newValue) => {
            this.setState({
              valuesFilm: newValue,
              valuesCluster: "",
            });
          }}
         
          id="controllable-states-demo"
          options={options1}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Film" variant="outlined" />
          )}
        />
      );
    }
  };

  renderCluster = () => {
    let { listMovie } = this.props;
    if (listMovie) {
      return (
        <Autocomplete
          value={this.state.valuesCluster}
          onChange={(event, newValue) => {
            this.setState({
              valuesCluster: newValue,
            });
          }}
          // inputValue={this.state.inputValue}
          // onInputChange={(event, newInputValue) => {
          //   this.setState({
          //     inputValueCluster: newInputValue,
          //   });
          // }}
          id="controllable-states-demo"
          options={options2}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Cluster" variant="outlined" />
          )}
        />
      );
    }
  };
  

  render() {
   
    return (
      <div className="search_bar">
        {this.renderTenPhim()}
        {this.renderCluster()}
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
export default connect(mapStateToProps, mapDispatchToProps)(Test);