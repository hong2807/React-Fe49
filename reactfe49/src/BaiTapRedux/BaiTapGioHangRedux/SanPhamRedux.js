import React, { Component } from 'react'

import {connect} from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props; //truyền từ thằng cha DanhSachSanPhamRedux
        
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={() => {
                            this.props.themGioHang(sanPham)
                            // Tại sao dùng tham số ten sanPham nó mới hiểu???
                            // Vì ở đây sanPham la tên dc truyền từ cha sang con, con truyền sang cháu chứ ko tạo 1 ds động (ví dụ như state DSSP trên redux) nên muốn thay đổi tên thì phải đổi từ cha <SanPhamRedux sanPham={sanPham}/>
                            // Truyền từ BaiTapGioHangRedux sang DanhSachSanPhamRedux sang SanPhamRedux
                            // this.props.themGioHang(sanPham) >>> con lấy ra xài
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}




// const mapDispatchToProps = (dispatch) => { //dispatch là hàm giống hàm setState
//     return {
//         themGioHang: (sanPhamClick) => { //sanPhamClick chính là sanPham dc click
//             console.log('sanPhamClick',sanPhamClick);
//             const action = {
//                 type:'THEM_GIO_HANG', //đây là thuộc tính bắt buộc 
//                 spSelected:sanPhamClick //Nội dung đưa lên store của redux, spSelected là tên tự đặt
//             }
//             //Dùng hàm dispatch gửi action lên redux
//             dispatch(action);
//         }
//     }
// }
// Cách 1: 
// gửi các sp đã chon lên redux = action, bên redux dùng 1 biến đựng các sp đã chọn rồi làm tiếp.



// Cách 2: 
// dùng biến đựng các sp cần gửi lên redux = action, bên redux dùng biến đựng đó xài tiếp
const mapDispatchToProps = (dispatch) => { //dispatch là hàm giống hàm setState
    return {
        themGioHang: (sanPhamClick) => {
            // Tạo ra sp giỏ hàng
            let spGioHang = {
                maSP: sanPhamClick.maSP,
                tenSP: sanPhamClick.tenSP,
                hinhAnh: sanPhamClick.hinhAnh,
                soLuong: 1,
                gia: sanPhamClick.gia,
            }
            console.log('sanPhamClick',sanPhamClick);
            const action = {
                type:'THEM_GIO_HANG', //đây là thuộc tính bắt buộc 
                spGioHang//Nội dung đưa lên store của redux
            }
            //Dùng hàm dispatch gửi action lên redux
            dispatch(action);
        }
    }
}



export default connect(null,mapDispatchToProps)(SanPhamRedux);
// Chỗ này xác định trong THợp này là Component SanPhamRedux ko có gửi lấy dữ liệu gì về mà chỉ gửi dữ liệu lên => nên chỗ này có 2 cách xử lý 1 là để null, 2 là lấy về mà rỗng 
        // export default connect(null,mapDispatchToProps)(SanPhamRedux);
// Cách 2 tạo 1 hàm mapStateToProps lấy dữ liệu về mà trả về rỗng
        // const mapStateToProps = state => {
        //     return {}
        // }
        // export default connect(mapStateToProps,mapDispatchToProps)(SanPhamRedux);