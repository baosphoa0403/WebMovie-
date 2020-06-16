import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class DetailTime extends Component {
    render() {
        let moment = require('moment');
        let {time} = this.props
        console.log(this.props.time);
        
        return (
            <div>
                <Link   to={`/booking/${this.props.time.maLichChieu}`}>{moment(time.ngayChieuGioChieu).format("HH:mm:A")}</Link>
            </div>
        )
    }
}
