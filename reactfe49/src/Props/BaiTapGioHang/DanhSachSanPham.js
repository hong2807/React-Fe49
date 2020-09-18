import React, { Component } from 'react'
import SanPhamGH from './SanPhamGH'

export default class DanhSachSanPham extends Component {
    // renderSanpham = () => {
    //     return this.props.mangSanPham.map((sanPham,index) => {
    //         return  <div className="col-4" key={index}>
    //         <div className="card text-left">
    //           <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
    //           <div className="card-body">
    //             <h4 className="card-title">{sanPham.tenSP}</h4>
    //             <button className="btn btn-success" onClick={() => {
    //                    this.props.themGioHang(sanPham)
    //                 }}>Thêm giỏ hàng</button>
    //           </div>
    //         </div>
    //       </div>
    //     })
    // }

    // themGioHangFn = () => {
    //   this.props.themGioHang();
    // }

    renderSanpham = () => {
      return this.props.mangSanPham.map((sanPham,index) => {
          return  <div className="col-4" key={index}>
            <SanPhamGH sanPham={sanPham} themGioHang = {this.props.themGioHang} />
        </div>
      })
    }

    render() {
        return (
            <div>
                 <div className="row">
                        {this.renderSanpham()}
                </div>
            </div>
        )
    }
}


// Danh sách sản phẩm là nhận prop mangSanPham và props themGioHang từ BT giỏ hàng qua
// Từ mangSanPham tạo ra sanPham, lấy sanPham này truyền qua lại cho thằng con sanPhamGH, mình đặt ten sanPham trung với gia trị sanPham mình mún truyền qua <SanPhamGH sanPham={sanPham} />
// tại sao ko phải là <SanPhamGH sanPham={this.sanPham} /> có this, vì tại component DSSP từ map nó tạo ra sanPham mà sanPham này ko phải là thuộc tính, phương thức thì ko cần this
// Tại component DSSP nhận props themGioHang về xài {this.props.themGioHang}, rồi mình truyền props {this.props.themGioHang} qua cho thằng con SanPhamGH, giá trị mới lúc này là {this.props.themGioHang} và mình đặt 1 key mới chứa đựng giá trị mới này themGioHang = {this.props.themGioHang}
  // thay vì khi nhận props themGioHang về xài và dùng 1 cái gì đó đựng nó
          // themGioHangFn = () => {
          //   this.props.themGioHang();
          // }
  // sau đó truyền lại cho thằng con  themGioHang = {this.themGioHangFn()}
  // mà themGioHangFn lại = this.props.themGioHang();
  // Nên vậy ko cần lấy cái gì đó đựng mà truyền thẳng qua lun
     



