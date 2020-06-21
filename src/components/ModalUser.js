import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function ModalUser() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AccountCircleIcon
        onClick={handleClickOpen}
        type="button"
        style={{ margin: "4px 10px", fontSize: "30px" }}
      />
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/4Md08rfio6Q"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Dialog>
    </div>
  );
}
