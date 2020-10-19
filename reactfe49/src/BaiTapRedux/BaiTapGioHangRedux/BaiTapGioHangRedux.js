import React, { Component } from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import GioHangRedux from './GioHangRedux'

// Kết nối với redux
import { connect } from 'react-redux'

class BaiTapGioHangRedux extends Component {

    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },

        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },

        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong,spGH,index)=>{
            return tongSoLuong += spGH.soLuong
        },0).toLocaleString();
    }



    render() {
        return (
            <div className="container">
                <h3 className="text-center display-4 font-weight-bold">
                    Bài tập giỏ hàng Redux
                </h3>
                <div className="text-right text-danger" >
                        <span style={{ cursor: 'pointer', fontWeight: 'bold'}} data-toggle="modal" data-target="#exampleModal" >
                            Giỏ hàng ({this.renderSoLuong()})
                        </span>
                </div>
                <DanhSachSanPhamRedux mangSanPham={this.mangSanPham}/>
                <GioHangRedux/>
            </div>
        )
    }
}


//Hàm lấy giá trị state từ redux store và biến thành props component
const mapStateToProps = (state) => { //state là rootReducer
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}
export default connect(mapStateToProps)(BaiTapGioHangRedux)


// rootReducer: store tôtng của ứng dụng

// Làm Bài Tập Giỏ Hàng bằng redux
// Tạo ra giao diện
// Store trong redux dc gọi là reducer 
// Tạo store BT Giỏ Hàng để chứa đựng tất cả state của BT giỏ hàng (GioHangReducer.js)
//  Vì sao GioHangReducer là nơi lấy redux về vì khi bấm thêm giỏ hàng, mở giỏ hàng nó sẽ chứa các sp dc chọn, vậy nên giỏ hàng là nơi lấy state về
// Tạo state giỏ hàng trên redux - GioHangReducer (mặc định nó sẽ rỗng) nhưng để thử 1 cái để cho nó chạy thử
    // const stateGioHang = {
    // 	gioHang: [
    // 		{maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 1000, soLuong: 1}
    // 	]
    // }
    // export const GioHangReducer = (state = stateGioHang, action) => { // Hàm này giống hàm setState
    // 	return {...state}
    // }
// Import state giỏ hàng vào redux chính (rootReducer)
    // import {combineReducers} from 'redux';
    // import { GioHangReducer } from './GioHangReducer';

    // export const rootReducer = combineReducers({
    //      GioHangReducer: GioHangReducer
    // })
// Lấy state từ rootReducer vể - tại component nào cần xài thì đặt ở đó (TH này là GioHangRedux.js)  
//  => dùng hàm mapStateToProps: biến state trên redux thành props component và vì nó là props rồi thì xài như bt
    // const mapStateToProps = (state) => { //state là rootReducer
    //     return {
    //         gioHang: state.GioHangReducer.gioHang
    //     }
    // }
    // export default connect(mapStateToProps,null)(GioHangRedux)
// Lấy state lấy dc ra xài (binding dữ liệu lên giao diện)- tại component nào cần xài thì đặt ở đó (TH này là GioHangRedux.js) 
//  => dùng hàm mapStateToProps: biến state trên redux thành props component và vì nó là props rồi thì xài như bt
    // renderGioHang = () => {
    //     return this.props.gioHang.map((spGioHang,index)=> {
    //         return <tr key={index}>
    //             <td>{spGioHang.maSP}</td>
    //             <td><img src={spGioHang.hinhAnh} width={50} /></td>
    //             <td>{spGioHang.tenSP}</td>
    //             <td>{spGioHang.gia}</td>
    //             <td>
    //                 <button>+</button>
    //                 {spGioHang.soLuong}
    //                 <button>-</button>
    //             </td>
    //             <td>{spGioHang.gia * spGioHang.soLuong}</td>
    //             <td><button className="btn btn-danger">Xóa</button></td>
    //         </tr>
    //     });
    // }
// >>>>>>>>>>>>>>>>>> Các bc trên là lấy dc state mặc định
// Tạo props - đưa các sản phẩm dc chọn lên redux (thì lúc này state dc cập nhật liên tục) - setState
// Vậy component nào đưa các sp lên - nơi chứa sản phẩm gửi lên - đó là component SanPhamRedux
// Viết function cho chữ Giỏ hàng (0): dùng mapStateToProps tại BaiTapGioHangRedux.js để lấy gioHang về rồi từ đó lấy tổng các số lượng và bỏ vào chữ Giỏ hàng
// Thêm nút xóa cho popup giỏ hàng, mỗi dòng sp sẽ có 1 nút xóa (giao diện)
// Khi bấm nút xóa thì gioHang sẽ thay đổi >>> nghĩa là cần setState lại, dùng mapDispatchToProps đưa masp lên để xóa
// Function Tăng Giảm Số Lượng
// Function Tổng tiền