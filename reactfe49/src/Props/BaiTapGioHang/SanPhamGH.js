import React, { Component } from 'react'

// export default class SanPhamGH extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="card text-left">
//                     <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
//                     <div className="card-body">
//                         <h4 className="card-title">{sanPham.tenSP}</h4>
//                         <button className="btn btn-success" onClick={() => {
//                             this.props.themGioHang(sanPham)
//                         }}>Thêm giỏ hàng</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default class SanPhamGH extends Component {
    render() {
        console.log(this.props)
        let {sanPham,themGioHang} = this.props; //ES6

        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={() => {
                           themGioHang(sanPham)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}




// nhận props sanPham qua xài
// nhận props themGioHang qua xài
// thay vì {this.props.sanPham.hinhAnh}
// thay vì {this.props.sanPham.tenSP}
// thay vì {this.props.themGioHang(sanPham)}
// khi console.log this.props lúc này là 1 object nó gồm 2 cái sanPham và themGioHang
// mình dùng destructuring - ES6 đặt 2 biến có tên trùng với sanPham, themGioHang, đựng sanPham và themGioHang
