// Tổ chức reducer để lưu trữ và xử lý state của bài tập game xúc xăc - Buoi 6


const stateDefault = {
    // banChon: false,    // true là tài (từ 3-11), false là xỉu ( > 12)
    banChon: "",    // true là tài (từ 3-11), false là xỉu ( > 12)
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
        {ma:1, hinhAnh:'./img/game_xuc_xac/1.png'},
        {ma:1, hinhAnh:'./img/game_xuc_xac/1.png'},
        {ma:1, hinhAnh:'./img/game_xuc_xac/1.png'},
    ]
}


const mangXucXac = [
    { ma: 1, hinhAnh: './img/game_xuc_xac/1.png' },
    { ma: 2, hinhAnh: './img/game_xuc_xac/2.png' },
    { ma: 3, hinhAnh: './img/game_xuc_xac/3.png' },
    { ma: 4, hinhAnh: './img/game_xuc_xac/4.png' },
    { ma: 5, hinhAnh: './img/game_xuc_xac/5.png' },
    { ma: 6, hinhAnh: './img/game_xuc_xac/6.png' },
]

const GameXucXacReducer = (state = stateDefault, action) => { //GameXucXacReducer đặt trùng với tên file
    switch(action.type) {
        case 'DAT_CUOC_TAI_XIU': {
            state.banChon = action.ketQuaBanChon;
            // let stateUpdate = state;
            // return stateUpdate
            return {...state}
        }

        case 'PLAY_GAME':{
            console.log('abc');
            // Tạo ra 3 viên xúc xắc ngẫu nhiên add vào mảng xúc xắc ngẫu nhiên
            let mangXucXacNgauNhien = [];
            // Thực hiện random 3 lần để tạo ra 3 viên xúc xắc ngẫu nhiên đưa vào mảng
            for(let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                let xucXacNgauNhien = mangXucXac[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            // Cập nhật lại state mangXucXac
            state.mangXucXac = mangXucXacNgauNhien;

            // Cập nhật số bàn chơi
            state.tongSoBanChoi += 1

            // Tính điểm từ mangXucXacNgauNhien
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem, xxnn, index) => {
                return tongDiem += xxnn.ma
            },0)

            // So sánh tongDiem và giá trị người dùng chọn
            // Nếu tongDiem lớn hơn 10 và banChon = true => thắng
            // Nếu tongDiem <= 10 và banChon = false => thua
            if((tongDiem > 10 && state.banChon) || (tongDiem <= 10 && !state.banChon)) {
                state.soBanThang += 1;
            }

            return{...state};
        }


        default: return {...state}
    }
}

export default GameXucXacReducer;




// DAT_CUOC_TAI_XIU
// Khi click nút tài là gửi true lên, click nút xỉu là gửi false lên. Vậy chỗ thể hiện trên giao diện tài xỉu là thuộc tính banChon vậy action gửi lên gì nhận cái đó thì lúc này banChon = action.ketQuaBanChon