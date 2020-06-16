import React, { Component } from 'react'

export default class DetailTime extends Component {
    render() {
        let moment = require('moment');
        let {time} = this.props
        return (
            <div>
                <span>{moment(time.ngayChieuGioChieu).format("HH:mm")}</span>
            </div>
        )
    }
}
