import React,{ useEffect } from "react";
import MaterialTable from 'material-table';
import {connect } from "react-redux";
import Axios from "axios"
 function DashboardMovie() {
 const [state, setState] = React.useState({
        columns: [
          { title: "mã phim", field: "maPhim", type: "numeric" },
          { title: "tên phim", field: "tenPhim" },
          { title: "trailer", field: "trailer"},
          { title: "bí danh", field: "biDanh"},
          {
            title: "hinh Ảnh",
            editComponent: props => (
              <input
                type="file"
                onChange={e => props.onChange(e.target.files[0])}
              />
            ),
            field: "hinhAnh", render: hinhAnh => <img src={hinhAnh.hinhAnh} style={{width: 100, height: 100}}/>,
            type: "image"

          },
          { title: "mo Tả", field: "moTa" },
          { title: "ngày khởi chiếu", field: "ngayKhoiChieu" },
          { title: "đánh giá", field: "danhGia", type: "numeric" }

        ],
        data: [],
}); 

useEffect(() => {
    Axios({
        method: "GET",
        url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
    })
    .then((rs)=>{
        // console.log(rs.data);
        setState(prevState => {
            return { ...prevState, data: rs.data};
        });
    })
    .catch((err)=>{
        console.log(err);
    })
   
}, [])
let handleAddMovie = (film) => {
console.log(film);

var form_data = new FormData();
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
let maPhim = parseInt(film.maPhim, 10);
let danhGia = parseInt(film.danhGia, 10);
let filmAdd= {...film, maNhom : "GP09", maPhim: maPhim, danhGia: danhGia};
for (const key in filmAdd) {
  console.log(key, filmAdd[key]);
  form_data.append(key,filmAdd[key]);
}
 Axios({
    method: "POST",
    url:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      // "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
    data: form_data,
    headers: {
      Authorization: `Bearer ${userAdmin.accessToken}`
    }
  })
    .then(rs => {
      console.log(rs);
    })
    .catch(error => {
      console.log({...error});
      
    });
}
let handleEditMovie = (film) => {
  var form_data = new FormData();
  const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  let maPhim = parseInt(film.maPhim, 10);
  let danhGia = parseInt(film.danhGia, 10);
  let filmEdit= {...film, maNhom : "GP09", maPhim: maPhim, danhGia: danhGia}; 
  for (const key in filmEdit) {
    console.log(key, filmEdit[key]);
    
    form_data.append(key,filmEdit[key]);
  }
  Axios({
    method: "POST",
    url:
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
    data: form_data,
    headers: {
      Authorization: `Bearer ${userAdmin.accessToken}`
    }
  })
    .then(rs => {
      console.log(rs);
    })
    .catch(error => {
      console.log({...error});
      
    });
}
let handleDeleteMovie = (film) => {
   console.log(film);
   const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
  //  http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=1233
  Axios({
    method: "DELETE",
    url:
      `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${film.maPhim}`,
    data: film.maPhim,
    headers: {
      Authorization: `Bearer ${userAdmin.accessToken}`
    }
  })
    .then(rs => {
      console.log(rs);
    })
    .catch(error => {
      console.log({...error});
      
    });
}
  
  return (
    <div>
      <MaterialTable
       detailPanel={rowData => {
        return (
          <iframe
            width="100%"
            height="500"
            src={rowData.trailer}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )
      }}
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                handleAddMovie(newData);
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);


                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  handleEditMovie(newData)
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                handleDeleteMovie(oldData)
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    listMovie: state.movieReducer.listMovie
  }
}

export default connect(mapStateToProps, null)(DashboardMovie)