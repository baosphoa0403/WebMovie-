import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FaceIcon from "@material-ui/icons/Face";
import Axios from "axios";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import Modal from '@material-ui/core/Modal';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  p: {
     color: "black"
  },
  button: {
    background: "#212121",
    marginTop: "100px",
    color: "#fafafa",
    hover: {
      "&:hover": {
        backgroundColor: "rgb(7, 177, 77, 0.42)"
      }
    }
  },
  leftTable: {
    color: theme.palette.common.black,
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    padding: "0 30px"
  },
  leftUp: {
    marginBottom: "30px",
    marginTop: "10px",
    textDecoration: "none"
  },
  left: {
    textAlign: "center"
  },
  icon: {
    color: "#212121",
    fontSize: 200
  },
  span: {
    color: "#212121",
    width: 100,
    height: 2
  },
  paper: {
    position: 'absolute',
    width: '500px',
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    left: "35%",
    top: "25%"
  },
}));
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

export default function ModalUserBook(props) {
  const classes = useStyles();
  const [user, setUser] = React.useState({});
  const [arrBook, setBooking] = React.useState([]);
  const [maVe, setMaVe] = React.useState(null);
  const [rap, setRap] = React.useState({});
  let moment = require("moment");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    let rap = arrBook.find((item)=>{
      return  item.maVe === maVe
    })
    setRap(rap);
  }, [maVe])
  let render = () => {
    if (rap) {
      return (
        rap.danhSachGhe.map((item, index)=>
          <StyledTableRow key={index}> 
          <StyledTableCell component="th" scope="row">
           {item.tenHeThongRap}
         </StyledTableCell>
         <StyledTableCell  align="right" >
           {item.tenRap}
         </StyledTableCell>
         <StyledTableCell  align="right" >
           {item.tenGhe}
         </StyledTableCell>
        </StyledTableRow>
        )
      )
    }
  }
  const body = (
    <div className={classes.paper}>
         <TableContainer component={Paper}>
         <Table className={classes.table} aria-label="customized table">
         <TableHead style={{textAlign: "center"}}>
              <TableRow>
                <StyledTableCell >Tên Hệ Thống Rạp </StyledTableCell>
                <StyledTableCell align="right">
                  Tên Rạp
                </StyledTableCell>
                <StyledTableCell align="right">Tên ghế</StyledTableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {maVe ? (render()) : ("")}
          </TableBody>
         </Table>
         </TableContainer>
    </div>
  );
  
  let renderBooking = () => {
    if (arrBook.length === 0) {
       return (
         <h1>Vui Lòng đặt vé</h1>
       )
    }else{
      return (arrBook.map((item, index) => (
        <StyledTableRow key={item.name}>
          <StyledTableCell component="th" scope="row">
            {index + 1}
          </StyledTableCell>
          <StyledTableCell align="right">
            {item.tenPhim}
          </StyledTableCell>
          <StyledTableCell style={{textAlign: "center"}}>
           <EventSeatIcon /> <span
           onClick={()=>{
            handleOpen()
            setMaVe(item.maVe)
          }}
           > Chi Tiết </span>
          </StyledTableCell>
          <StyledTableCell align="right">  {moment(item.ngayDat).format("DD/MM/YYYY")} { moment(item.ngayDat).format("HH:mm A")}</StyledTableCell>
          <StyledTableCell align="right">{item.giaVe.toLocaleString()} VNĐ</StyledTableCell>
          <StyledTableCell align="right">{item.thoiLuongPhim} phút</StyledTableCell>
        </StyledTableRow>
      ))
    )
  }
}
  function FormRow() {
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead style={{textAlign: "center"}}>
              <TableRow>
                <StyledTableCell >Danh Sách Vé </StyledTableCell>
                <StyledTableCell align="right">
                  Tên Phim
                </StyledTableCell>
                <StyledTableCell align="right" style={{textAlign: "center"}}>Danh Sách Ghế</StyledTableCell>
                <StyledTableCell align="right">Ngày Đặt và Giờ Đặt</StyledTableCell>
                <StyledTableCell align="right">Giá Vé</StyledTableCell>
                <StyledTableCell align="right">Thời Lượng</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {renderBooking()}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    var userSend = {
      taiKhoan: user.taiKhoan
    };
    setUser(user);
    Axios({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: userSend
    })
      .then(rs => {
        console.log(rs.data);
        
        setBooking(rs.data.thongTinDatVe)
      })
      .catch(error => {
        console.log({ ...error });
      });
  }, []);
  let changePage = () => {
     props.history.replace("/")
  }
  return (
    <div className="userInformation" style={{width:"100%"}}>
      <Grid container >
        <Grid className={classes.leftTable} item xs={12} sm={2}>
          <div className={classes.left}>
            <div className={classes.leftUp}>
              <FaceIcon className={classes.icon} />
              <div className={classes.p}>
              <p><PersonIcon />{user.taiKhoan} </p>
              <p><EmailIcon /> {user.email} </p>
              <p><PhoneIcon /> {user.soDT} </p>
              </div>
            </div>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={changePage}
            >
             Back To Home
            </Button>
          </div>
        </Grid>
        <Grid className={classes.rightTable} item xs={12} sm={10}>
          <FormRow />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
