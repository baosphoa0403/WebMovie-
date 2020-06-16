import React from "react";
import Dialog from "@material-ui/core/Dialog";
import PlayVideo from "../images/img/play-video.png";
export default function Dialog1(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="play">
      <img src={PlayVideo} onClick={handleClickOpen} />

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <iframe
          width="600"
          height="315"
          src={props.trailer}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Dialog>
    </div>
  );
}
