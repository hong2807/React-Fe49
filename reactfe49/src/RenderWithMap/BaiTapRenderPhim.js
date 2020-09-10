import React, { Component } from "react";
import './BaiTapRender.css'
import data from './DataFilms.json';

export default class BaiTapRenderPhim extends Component {

    renderFilms = () => {
        return data.map((film,index)=>{
            return <div className="col-2 mb-5" key={index}>
            <div className="card text-left">
                <img className="card-img-top" style={{ height: 300 }} src={film.hinhAnh} alt={film.hinhAnh} />
                <div className="card-body bg-dark text-white">
                    <h4 className="card-title" style={{ height: 55, fontSize: 20 }}> {film.tenPhim.length > 20 ? <span> {film.tenPhim.substr(0, 20)} ... </span> : <span>{film.tenPhim}</span>} </h4>
                <p className="card-text" style={{ height: 80 }}> {film.moTa.length > 65 ? <span>{film.moTa.substr(0, 65)} ... </span>: film.moTa} </p>
                </div>
            </div>
        </div>
        })
    }

  render() {
    return (
      <div style={{ backgroundImage:"url('./img/avenger.jpg')", backgroundSize: 'cover', width: '100%', minHeight: 1000 }}>
        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgba(122,212,98,.5)' }}>
          <a className="navbar-brand" href="#">CYBERSOFT</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="container-fluid" style={{ width: '100%', minHeight: 1000, backgroundColor: 'rgba(0,0,0,.5)' }}>
            <h3 className="mt-2 mb-2 text-center display-4 text-light" >Danh sách phim</h3>

            <div className="row">
                {this.renderFilms()}
            </div>
        </div>
      </div>
    );
  }
}

// Bài tập này mình 1 có json danh sách phim, từ đó tạo 1 giao diện danh sách phim
// Tạo 1 file json chứa đựng mảng json
// import json vào sử dụng => import data from './DataFilms.json'; 

// backgroundImage:"url('./img/avenger.jpg')" 
// => nếu sử dụng cách này thì tấm hình phải dc bỏ trong thư mục img trong public

// Cách 2 nếu để tấm hình cùng tầng với file BaiTapRenderPhim.js
// Thì tạo 1 file css, tạo 1 tên class import tấm hình vào như bên đưới
// .backgroundFilm {
//     background-image: url('./avenger.jpg');
// }
// Sau đó qua BaiTapRenderPhim.js dùng tên biến bỏ vào vị trí muốn import

// {film.tenPhim.length > 20 ? <span> {film.tenPhim.substr(0, 20)} ... </span> : <span>{film.tenPhim}</span>}
// Dùng trong TH chữ nhiều quá muốn ít lại và thành dấu 3 chấm
// Nếu độ dài đoạn đó quá 20 thì lấy từ 0 đến 20 và dấu 3 chấm
// Ngược lại độ dài đoạn đó nhỏ hơn 20 thì lấy hết