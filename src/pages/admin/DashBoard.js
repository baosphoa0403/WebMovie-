import { connect } from "react-redux";
import * as action from "../../redux/action/userAction";
// DashBoard
import React, { useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Navbar from "./Navbar";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 500
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function DashBoard(props) {
  const classes = useStyles();
  
  useEffect(() => {
    props.getListUser();
    console.log(props.listUser);
  }, []);
  return (
    <div>
    <Navbar />
    {/* <ModalSearch /> */}
    <div className={classes.root} className="table">
    {/* <Container fixed> */}
      <Grid container spacing={3}>
        <Grid item xs={1}>
           <div className="sidebar">
             {/* <div className="sidebar-wrapper"> */}
               <h3>Menu</h3>
            {/* </div> */}
           </div>
        </Grid>
        <Grid item xs={11}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>STT</StyledTableCell>
                  <StyledTableCell align="right">Họ Tên</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Tai Khoản </StyledTableCell>
                  <StyledTableCell align="right">Mật khẩu</StyledTableCell>
                  <StyledTableCell align="right">Số Điện thoại </StyledTableCell>
                  <StyledTableCell align="right">Mã loại người dùng</StyledTableCell>
                  <StyledTableCell align="right">Chức năng</StyledTableCell>
                  <StyledTableCell align="right"><PersonAddIcon/></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.listUser.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.hoTen}</StyledTableCell>
                    <StyledTableCell align="right">{item.email}</StyledTableCell>
                    <StyledTableCell align="right">{item.taiKhoan}</StyledTableCell>
                    <StyledTableCell align="right">{item.matKhau}</StyledTableCell>
                    <StyledTableCell align="right">{item.soDt}</StyledTableCell>
                    <StyledTableCell align="right">{item.maLoaiNguoiDung}</StyledTableCell>
                    <StyledTableCell align="right">< EditIcon/></StyledTableCell>
                    <StyledTableCell align="right"><DeleteOutlinedIcon/></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    {/* </Container> */}
    </div>
  </div>
  );
}

const mapDisptachToProps = dispatch => {
  return {
    getListUser: () => {
      dispatch(action.actGetListUserAPI());
    }
  };
};
const mapStateToProps = state => {
  return {
    listUser: state.userReducer.listUser
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(DashBoard);
