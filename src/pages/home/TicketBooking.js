import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import BookingInfo from "./BookingTicket.js/BookingInfo";
import HeaderBooking from "./BookingTicket.js/HeaderBooking";
import ListChair from "./BookingTicket.js/ListChair";
import BuyTicket from "./BookingTicket.js/BuyTicket";

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

    let listChair = [...this.state.listChair];

    if (!isBooking) {
      //Add
      listChair = [...this.state.listChair, product];
    } else {
      //Find index to delete
      listChair.splice(index, 1);
    }
    this.setState({
      listChair,
    });
    // console.log(product);
  };

  renderCheckSeat = () => {
    if (this.props.listChair.danhSachGhe !== undefined) {
      if (this.props.listChair.danhSachGhe.length > 0) {
        let arr = this.props.listChair.danhSachGhe.filter((item) => {
          return item.daDat === true;
        });
        console.log(arr);
      }
    }
  };

  renderSeatInfo = () => {
    if (this.props.listChair.danhSachGhe !== undefined) {
      if (this.props.listChair.danhSachGhe.length > 0) {
        return this.props.listChair.danhSachGhe.map((item) => {
          return (
            <BuyTicket
              item={item}
              key={item.maGhe}
              buyTicket={this.state.listChair}
              FilmInfo={this.props.listChair.thongTinPhim} 
            />
          );
        });
      }
    }
  };

  render() {
    console.log(this.props.listChair.thongTinPhim);
    console.log(this.props.listChair);

    return (
      <div>
        <HeaderBooking />
        <div class="seatCheckOut">
          <div class="seatCheckOut__content">
            <BookingInfo FilmInfo={this.props.listChair.thongTinPhim} />
            <div class="clear"></div>
            <ListChair addTicket={this.handleAddCart} />
          </div>
        </div>
        {this.renderSeatInfo()}
        {this.renderCheckSeat()}
      </div>
    );
  }
  componentDidMount() {
    let idMaLichChieu = this.props.match.params.idLichChieu;
    console.log(idMaLichChieu);

    this.props.getListChairBooking(idMaLichChieu);
  }
  componentWillUnmount() {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking);
