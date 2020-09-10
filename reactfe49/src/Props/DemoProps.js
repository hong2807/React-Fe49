import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'


// Cách 1
// export default class DemoProps extends Component {

//     render() {
//         return (
//             <div className="container">
//                 <ThongTinSinhVien hoTen="Nguyễn Văn Tèo" lop="FrontEnd49"/>
//                 <ThongTinSinhVien hoTen="Nguyễn Thị B" lop="FrontEnd48"/>
//                 <ThongTinSinhVien hoTen="Tèo" lop="121"/> 
//             </div>
//         )
//     }
// }


// Cách 2
export default class DemoProps extends Component {
    sinhVien = {
        hoTen: 'Nguyễn Văn Tèo',
        hinhAnh: 'https://api.adorable.io/avatars/152/hong',
        lop: 'Fe 49'
    }

    render() {
        return (
            <div className="container">
                <ThongTinSinhVien sinhVien={this.sinhVien}/>
                 {/* <ThongTinSinhVien sv={this.sinhVien}/> */} 
            </div>
        )
    }
}

// export default class DemoProps extends Component {
//     sinhVienList = [
//         {hoTen: 'Nguyễn Văn Tèo', lop: "12"},
//         {hoTen: 'Nguyễn Thị B', lop: "8"},
//         {hoTen: 'Nguyễn Tũn', lop: "10"},
//     ]

//     sinhVienListRender = () => {  
//         return this.sinhVienList.map((sinhVien) => {
//             return <ThongTinSinhVien sinhVien={sinhVien}/>
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 { this.sinhVienListRender() }
//             </div>
//         )
//     }
// }

// DemoProps là cha
// ThongTinSinhVien là con
// vì sao biết dc là cha con??? vì đặt <ThongTinSinhVien/> trong class DemoProps
// Có thể cùng 1 props mà truyền nhiều dữ liệu khác nhau
// Có 2 cách khai báo thuộc tính, 1 là khai trực tiếp 2 là khai ở trên