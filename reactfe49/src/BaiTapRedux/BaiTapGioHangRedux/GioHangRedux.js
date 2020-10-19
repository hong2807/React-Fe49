import React, { Component } from 'react'

// Kết nối với redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {
    renderGioHang = () => {
        // Lấy dữ liệu lấy dc trên redux ra xài (là gioHang)
        return this.props.gioHang.map((spGioHang, index) => {
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td><img src={spGioHang.hinhAnh} width={50} /></td>
                <td>{spGioHang.tenSP}</td>
                <td>{spGioHang.gia.toLocaleString()}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => {
                        {this.props.tangGiamSoLuong(spGioHang.maSP,true)}
                    }}>+</button>
                    {spGioHang.soLuong}
                    <button className="btn btn-primary"  onClick={() => {
                        {this.props.tangGiamSoLuong(spGioHang.maSP,false)}
                    }}>-</button>
                </td>
                <td>{(spGioHang.gia * spGioHang.soLuong).toLocaleString()}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    {this.props.xoaGioHang(spGioHang.maSP)}
                }}>Xóa</button></td>
            </tr>
        });
    }

    render() {
        console.log(this.props.gioHang);
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên SP</th>
                                            <th>Đơn giá </th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                    <tfoot>
                                        <th colSpan={5}></th>
                                        <th>Tổng tiền</th>
                                        <th>{this.props.gioHang.reduce((tongTien,spGioHang,index) => {
                                            return tongTien += spGioHang.soLuong * spGioHang.gia
                                        },0).toLocaleString()}</th>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Hàm lấy state redux biến đổi thành props của component - return key và value, value là biến
const mapStateToProps = (state) => { //state là state tổng (rootReducer) của ứng dụng chứa các state con (reducer con)
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

// Hàm đưa dữ liệu lên reducer - return là key và value, value là hàm - biến đổi thành props của component
const mapDispatchToProps = (dispatch) => { //tham số truyền vào dispatch
    return {
        xoaGioHang: (maSP) => {
            // Tạo action để đưa dữ liệu lên reducer
            let action = {
                type: 'XOA_GIO_HANG', //Type là thuộc tính bắt buộc để biết chạy vào case nào trong tất 
                maSP                    //cả reducer
            }
            //Dùng phương thức dispatch redux cung cấp đưa dữ liệu lên reducer
            // Đưa action lên reducer mỗi khi ng dùng click vào
            console.log(maSP)
            dispatch(action)
        },

        tangGiamSoLuong: (maSP,tangGiam) => { //tangGiam = true => xử lý tăng, tangGiam =false => xử lý giảm
            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            }
            dispatch(action)
        }
    }
}
// export default connect(mapStateToProps, null)(GioHangRedux)
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)

