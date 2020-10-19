import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './styleGame/styleGame.css'

export default class BaiTapGameTaiXiu extends Component {
    render() {
        return (
            <div className="gameXucXac">
                <h3 className="text-center display-4 text-dark">BÀI TẬP GAME XÚC XẮC</h3>
                <XucXac></XucXac>
                <KetQuaTroChoi/>
            </div>
        )
    }
}




//tạo 1 thư mục styleGame - thư mục này có thể chứa hình, font chũ, file css >>> import hình, file font chữ (pony.ttf), và 1 file css(styleGame.css)
// import font chữ vào file styleGame.css: (trường hợp này là down về) - dùng font-face
        // @font-face {
        //     font-family: 'pony';
        //     src: url('./Pony.ttf');
        // }
// import file styleGame.css vào file BaiTapGameTaiXiu.js
// có 2 cách import file hình. Cách 1: để file hình chung thư mục thì mình đứng ở file nào mình import vào
// Cách 2 là nếu để file hình vào thư mục img của thư mục public thì đứng ở vị trí file index.html trỏ tới file chứa hình
// Nhìn giao diện chia thành 3 component, 1 component cha là BaiTapGameTaiXiu.js, component thứ 2 là XucXac.js, component cuối cùng là KetQuaTroChoi.js
//  import 2 file XucXac.js và KetQuaTroChoi.js vào file BaiTapGameTaiXiu.js
// Tạo giao diện cho component XucXac.js
// Tạo giao diện cho component KetQuaTroChoi.js
// Xác định state - dữ liệu nào thay đổi trên giao diện. Trong bài này là: mấy hình xúc xắc, chọn tài hay xỉu, tổng số bàn thắng, tổng số bàn chơi - tạo state cho những thằng này và làm cho nó động - lấy giá trị về - mapStateToProps
// Xác định chỗ nào gần gửi dữ liệu lên để thay đổi giao diện (setState) - dùng mapDispatchToProps
    // - khi click nút tài or xỉu nghĩa là gửi lên true or false: ở chỗ bạn chọn thể hiện chữ tài hoặc xỉu
    // - khi click nút play game, các hình xúc xắc random ngẫu nhiên