import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function BookingInfo(props) {
  const [seconds, setSeconds] = useState(120000);
  let history = useHistory();
  useEffect(() => {
    if (seconds > 0) {
      let interval = setInterval(() => {
        setSeconds(seconds - 1000);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      Swal.fire("Hết thời gian mua vé!", "Nhấn OK để thoát", "error");
      setTimeout(() => {
        history.replace("/");
      }, 3000);
    }
  });
  console.log(1);

  let millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  let renderFilmInfo = () => {
    let { FilmInfo } = props;
    if (FilmInfo) {
      return (
        <div>
          <div class="seatCheckOut__header">
            <div class="seatCheckOut__leftTitle">
              <div class="seatCheckOut__contentCinema">
                <p class="seatCheckOut__address">{FilmInfo.tenCumRap}</p>
                <p class="seatCheckOut__hour">
                  - {FilmInfo.gioChieu} - {FilmInfo.tenRap}
                </p>
              </div>
            </div>
            <div className="seatCheckOut__rightTitle">
              <div className="seatCheckOut__info1">
                {millisToMinutesAndSeconds(seconds)}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderFilmInfo()}</div>;
}
