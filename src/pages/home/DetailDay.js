import React, { Component } from "react";
import DetailTime from "./DetailTime";

export default class DetailDay extends Component {
  constructor(props){
      super(props);
      this.state = {
        isOpen: false,
        day: ""
      }
  }
  openTime = () => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  };
  getDay = () => {
    if (this.props.lichChieu) {
        let arr = this.props.lichChieu.filter((item)=>{
             return new Date(item.ngayChieuGioChieu).toLocaleDateString() === this.state.day
        })
        console.log(arr);
        return arr.map((time)=>{
            return <DetailTime time={time}/>
        })
        
    }
  }
  render() {
    let { day } = this.props;
    return (
      <div>
        <span onClick={()=>{
            this.openTime();
            this.setState({day: this.props.day})
        }}>{day}</span>
         {!this.state.isOpen ? ("") : (<div>{this.getDay()}</div>)}
      </div>
    );
  }
}
