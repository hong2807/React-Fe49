import React, { Component } from 'react'

// Cách 1
// export default class ThongTinSinhVien extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Họ tên: {this.props.hoTen}</p>
//                 <p>Lớp: {this.props.lop}</p>
//             </div>
//         )
//     }
// }

// Cách 2
export default class ThongTinSinhVien extends Component {
    render() {
        return (
            <div>
                <p>Họ tên: {this.props.sinhVien.hoTen}</p>
                <p>Lớp: {this.props.sinhVien.lop}</p>
                {/* <p>Họ tên: {this.props.sv.hoTen}</p>
                <p>Lớp: {this.props.sv.lop}</p> */}
            </div>
        )
    }
}


//this.props: là thuộc tính có sẵn của component, Lưu ý: dùng để nhận giá trị từ component cha truyền vào, 
// và không thay đổi được giá trị đó

// <ThongTinSinhVien sinhVien={this.sinhVien}/> => cha
{/* <p>Họ tên: {this.props.sinhVien.hoTen}</p> */} // => con
// this.props.sinVien.hoTen => sinhVien la tên tự đặt chứ ko phải là sinhVien đã khai báo
