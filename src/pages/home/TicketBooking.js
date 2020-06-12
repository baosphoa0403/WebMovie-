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

    let listChairUpdate = [...this.state.listChair];

    if (!isBooking) {
      //Add
      listChairUpdate = [...this.state.listChair, product];
    } else {
      //Find index to delete
      listChairUpdate.splice(index, 1);
    }
    this.setState({
      listChair: listChairUpdate,
    });
    // console.log(product);
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
        <BuyTicket
          buyTicket={this.state.listChair}
          FilmInfo={this.props.listChair.thongTinPhim}
        />
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
