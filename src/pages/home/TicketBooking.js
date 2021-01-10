import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import BookingInfo from "./BookingTicket.js/BookingInfo";
import HeaderBooking from "./BookingTicket.js/HeaderBooking";
import ListChair from "./BookingTicket.js/ListChair";
import BuyTicket from "./BookingTicket.js/BuyTicket";
import Loading from "../../components/Loading";
import { notifiError } from "../../utils/MyToys";

class TicketBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listChair: [],
    };
  }
  timViTri = (maGhe) => {
    return this.state.listChair.findIndex((product) => product.maGhe === maGhe);
  };
  handleAddCart = (product, isBooking) => {
    let index = this.timViTri(product.maGhe);

    let listChairUpdate = [...this.state.listChair];

    if (!isBooking) {
      listChairUpdate = [...this.state.listChair, product];
    } else {
      listChairUpdate.splice(index, 1);
    }
    this.setState({
      listChair: listChairUpdate,
    },()=>{console.log(this.state.listChair);
    });
  };
  checkChair = () => {
    for (let i = this.state.listChair.length - 1; i >= 0 ; i--) {
       if (this.state.listChair.length >= 2) {
        const count = Math.abs(this.state.listChair[i].maGhe - this.state.listChair[i-1].maGhe)
        if (count > 1) {
          notifiError("Vui lòng đặt ghế gần nhau")
        }
        break;
       }
    }   
     
  }
  // array.length = 2 
 
  
  render() {
    if (this.props.loading) {
      return <Loading />
    }else {
      return (
        <div>
          <HeaderBooking />
          {this.checkChair()}
          <div class="seatCheckOut">
            <div class="seatCheckOut__content">
              <BookingInfo FilmInfo={this.props.listChair.thongTinPhim} />
              <div class="clear"></div>
              <ListChair addTicket={this.handleAddCart} />
              
            </div>
          </div>
          <BuyTicket
            buyTicket={this.state.listChair}
            FilmInfo={this.props.listChair.thongTinPhim}
            listChair={this.state.listChair}
          />
        </div>
      );
    }
    
  }
  componentDidMount() {
    let idMaLichChieu = this.props.match.params.idLichChieu;
    this.props.getListChairBooking(idMaLichChieu);
  }
  componentWillUnmount() {
    localStorage.removeItem("maLichChieu")
    this.props.resetListChairBooking();
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getListChairBooking: (idMaLichChieu) => {
      dispatch(action.actGetListChairBookingAPI(idMaLichChieu));
      console.log(idMaLichChieu);
    },
    resetListChairBooking: () => {
      dispatch(action.actGetListChairBooking([]));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listChair: state.movieReducer.listChair,
    loading: state.movieReducer.loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking);
