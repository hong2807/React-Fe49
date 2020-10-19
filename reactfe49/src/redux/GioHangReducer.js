//File này quản lý state theo nghiệp vụ


const stateDefault = {
	gioHang: [
		// {maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 1000, soLuong: 1}
	]
}


export const GioHangReducer = (state= stateDefault, action) => { // Hàm này giống hàm setState
	//GioHangReducer là 1 hàm
	// export const GioHangReducer = (stateDefault, action)
	//Tại sao ở đây mình ko dùng thẳng stateDefault lun phải dùng 1 biến mới(state) đặt bằng stateDefault vì đẻ stateDefault ko nó bị trùng với stateDefault mà trong javascript khi đã khai báo 1 biến, thì khi khai báo lại trùng nó sẽ ưu tiên lấy cái mới mà như vậy stateDefault lúc này là nó biến rỗng chứ ko phải là stateDefault chứa gioHang, mà rỗng vậy khi xài mapStateToProps nó ko có gioHang như vậy là sai, bắt buộc phải tạo ra biến mới đựng stateDefault

	switch (action.type) {
		// Cách 1
		// case 'THEM_GIO_HANG': {
        //     //xử lý trả về state mới render lại tất cả component theo dõi state này
        //     //List sản phẩm đã dc chọn gửi từ action lên
        //     const spGioHang = {
        //         maSP: action.spSelected.maSP,
        //         tenSP: action.spSelected.tenSP,
        //         hinhAnh: action.spSelected.hinhAnh,
        //         soLuong: 1,
        //         gia: action.spSelected.gia,
        //     };
		// 	   Tạo ra 1 state gioHangUpdate y hệt stateDefault(mà stateDefault thì bằng state ) ở trên
		// 	// Dùng ES6
        //     const gioHangUpdate = [...state.gioHang];
        //     const index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP);
        //     if (index !== -1) {
        //         gioHangUpdate[index].soLuong += 1;
        //     } else {
        //         gioHangUpdate.push(spGioHang)
        //     };
        //     //Cập nhất lại state
		// 	state.gioHang = gioHangUpdate;
		// 		// state.gioHang thì state ở đây chính là state
		// 		// export const GioHangReducer = (state = stateDefault, action)
		// 	//Trả về state mới
		// 	console.log('state.gioHang',state.gioHang)
        //     return {...state}; //...state là gioHangUpdate
		// }

		// Cách 2
		case 'THEM_GIO_HANG': {
			console.log('action',action.spGioHang)
			let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
			// state.gioHang = stateDefault.gioHang
			// action.sanPham là dữ liệu bên SanPhamRedux.js gửi lên
		
            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang)
            };
            //Cập nhật lại stateDefault - setState
			state.gioHang = [...state.gioHang]; //Cách viết spread ES6
			// Tại sao ko lấy luôn state.gioHang mà phải set lại [...state.gioHang] mặc dù giá trị giống nhau do trong redux của class component bắt buộc phải sao chép ra 1 biến mới mặc dù giá trị giống nhau để redux nó biết có giá trị mới thì nó mới render lại, nếu ko làm vậy nó sẽ ko render ra giao diện mặc dù console.log có cập nhật giá trị mới - dùng ES6
			// or mình dùng 1 biến khác để đựng lại
            //Trả về state mới
            return { ...state };
		}

		case 'XOA_GIO_HANG': {
			 //sao chép giá trị giỏ hảng ra 1 biến
			 let gioHangUpdate = [...state.gioHang];
			 // Xử lý xóa giỏ hàng dựa trên biến vừa tạo 
			 let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);  //xóa dựa trên mã sp
			 if (index !== -1) {
				 gioHangUpdate.splice(index, 1);
			 }
			 //Cập nhật lại state giỏ hàng để component render lại 
			 state.gioHang = gioHangUpdate;
			 return { ...state }
		}

		case 'TANG_GIAM_SO_LUONG': {
			let gioHangUpdate = [...state.gioHang];
			// Xử lý tăng giảm trên gioHangUpdate
			let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);
			if (index !== -1) {
				if (action.tangGiam) { //action.tangGiam = true
					gioHangUpdate[index].soLuong += 1
				} else {
					if(gioHangUpdate[index].soLuong > 1) {
						gioHangUpdate[index].soLuong -= 1
					} else {
						alert('Số lượng tối thiểu là 1')
					}
				}
				
			}
			// Lấy giá trị gioHangUpdate vào stateDefault
			state.gioHang = gioHangUpdate;
			return { ...state }
		}
		
		

		default: return { ...state }
	}

}