import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'

export default class BaiTapGioHang extends Component {
    mangSanPham =  [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    // state là danh sách sản phẩm được chọn
    state ={
        gioHang: [
            // { maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 1000, soLuong: 1 }
        ]  //default value
    }

    //phương thức thêm giỏ hàng (state ở đâu thì viết phương thức thay đổi state ở đó)
    themGioHang = (spClick) => {
        // this.setState({
        //     gioHang: [{ maSP: 2, tenSP: 'Note 8', hinhAnh: './img/sp_note7.png', gia: 1000, soLuong: 2 }]
        // })

        // Đây là sản phẩm được click
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            hinhAnh: spClick.hinhAnh,
            gia: spClick.gia,
            soLuong: 1
        }

        // let spGioHang = {...spClick,soLuong:1} >>> ES6
        // console.log(spClick)

        // let mangSPDuocChon = [];
        // mangSPDuocChon.push(spGioHang);
        // nếu làm theo cách này thì cứ mỗi lần click lại tạo mới mangSPDuocChon nên lúc nào trong giỏ hàng chỉ 1 sp dc click hiện tại


        // vì sao dùng state thì nó có thể push vào và cộng dồn chứ ko phải tạo mới vì state nó ko chạy lại, nó chỉ chạy 1 lần, nó giống như default value nếu có setState nghĩa là có giá trị mới thì nó ko chạy lại nữa
        // setState giỏ hàng mới tại đây
        let gioHangUpdate = this.state.gioHang;
        // gioHangUpdate.push(spGioHang);

        
        // ES5
        // var index = gioHangUpdate.findIndex(function(spGH){
        //     return spGH.maSP === spGioHang.maSP
        // })

        //Tìm sp đó có trong giỏ hàng không - ES6
        let index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP);

        if (index !== -1) { //Tìm thấy tại vị trí index => tăng số lượng
            gioHangUpdate[index].soLuong += 1;
        } else {
            //Không tìm thấy trong giỏ hàng => thêm sản phẩm vào giỏ hàng
            gioHangUpdate.push(spGioHang);
        }


        // setState giỏ hàng = giỏ hàng mới
        this.setState({
            gioHang : gioHangUpdate
        })

    }


     // tinhSoLuongGioHang = () => {
    //     return this.state.gioHang.length
    // } 
    // => ko chính xác trong TH này vì mảng push vô nếu trùng thì tăng số lượng chứ ko thêm mới vd mảng có 2 sp dc chọn mà 2 sp này giống nhau về mặt số lượng tuy là 2 nhưng về thành phần trong mảng thì chỉ có 1
 
    tinhSoLuongGH = () => {
        return this.state.gioHang.reduce((soLuong, spGH, index) => {
            return soLuong += spGH.soLuong;
        }, 0)
    }
    // dùng cách này vì khi push vô mảng nếu trùng thì tăng số lượng lên vậy số lượng lúc này cũng chính là số lượng sp mình mua




    tangGiamSoLuong = (maSP,tangGiam) => { //tangGiam=true => tăng, tăng giảm = false thì giảm 
        console.log(maSP,tangGiam);

        // gioHangUpdate chứa các sp dc chọn
        let gioHangUpdate = this.state.gioHang;
        //Tìm vị trí index của sp khi dc click + or -
        let index = gioHangUpdate.findIndex(spGioHang => spGioHang.maSP === maSP);

        if(index!==-1){
            if(tangGiam) { //Tăng giảm = true =>tăng số lượng
                gioHangUpdate[index].soLuong+=1;
            }else { 
                //Nếu sp giảm thì xem soLuong > 1 mới cho giảm
                if(gioHangUpdate[index].soLuong > 1) {
                    gioHangUpdate[index].soLuong -=1
                }else {
                    alert('Số lượng tối thiểu là 1!')
                }
            }
        }
        
        this.setState({
            gioHang:gioHangUpdate
        })

        
    }




    xoaGioHang = (maSP) => { 
        // Cách 1
        // Lấy các sp dc chọn 
        // let gioHangUpdate = this.state.gioHang;
        // //Tìm xem trong giỏ hàng có mã sp được click(nút xóa) không?
        // let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
        // if(index !== -1){
        //     gioHangUpdate.splice(index,1)
        // }
        // //Sau khi xóa sp giỏ hàng thì cập nhật lại state
        // this.setState({
        //     gioHang:gioHangUpdate
        // })
        
        // Cách 2: lọc ra những sp ko có đó
        this.setState({
            gioHang:this.state.gioHang.filter(sp=>sp.maSP !== maSP)
        })
    }



   




    render() {

        return (
            <div className="container">
                <h3 className="text-center">Bài Tập Giỏ Hàng</h3>
                {/* Giỏ Hàng */}
                <div className="gioHang">
                    <div className="text-right text-danger" >
                        <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#exampleModal" >
                            Giỏ hàng ( {this.tinhSoLuongGH()} )
                        </span>
                    </div>
                    {/* <GioHang mangSanPham={this.mangSanPham}/> */} 
                    {/* Dùng props truyền state của cha qua cho thằng con */}
                    {/* Vì sao phải truyền state ??? */}
                    <GioHang gioHang={this.state.gioHang} tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang}/>
                </div>

                {/* Danh sách sản phẩm */}
                <div className="danhSachSanPham">
                    <DanhSachSanPham mangSanPham={this.mangSanPham} themGioHang={this.themGioHang}/>
                </div>

            </div>
        )
    }
}


// mangSanPham={this.mangSanPham} => mangSanPham ko nằm chung với this là cái tên mình tự đặt, thường đặt trùng tên với giá trị muốn truyền

// Khi click thằng con, thằng cha sao hiểu dc????

// Đặt state ở thằng cha, muốn con hiểu dc state thì bắt buộc phải truyền state thông qua props








// Bài tập giỏ hàng: Khi click vào button thêm giỏ hàng thỉ số lượng ở dòng chữ Giỏ hàng tăng lên
// Click vào chữ dòng chữ giỏ hàng hiện 1 popup ra, show các số lượng đã chọn để mua

// Các bước làm bài tập:

// Làm giao diện (gồm đầy đủ các popup) trước trên cùng 1 file
// Chia nhỏ giao diện ra thành các component như sau: Component Cha BaiTapGioHang Component DSSP chứa tất cả các sản phẩm, Component giỏ hàng chứa giao diện và sản phẩm được chọn để mua, Trong Component DSSP chia thêm 1 component Sản Phẩm Giỏ Hàng là các sản phẩm chi tiết của DSSP => Bài này mình sẽ có 4 component 

// Làm dữ liệu động cho Component DanhSachSanPham
    // tại component BaiTapGioHang truyền props cho component DSSP (vì DSSP cần có mangSanPham để lấy ra xài mà mangSanPham lại nằm ở component BaiTapGioHang)

// Làm sự kiện Khi Click nút Thêm Giỏ Hàng sp bất kì, mở popup Giỏ Hàng ra có sp đó
    // + DSSP và Giỏ hàng là anh em nên mảng sp dc chọn ko truyền qua lại dc nên ko thể đặt vào 1 trong 2 component này => Đặt trong thằng cha và làm việc với thằng cha (BTGioHang) => Đặt state mangSP dc chọn trong BTGioHang
    // + mangSP dc chọn là động làm cho giao diện thay đổi thì nó là state. tạo 1 state giỏ hàng dc chọn và setState cho nó 
    // + mà state chỉ hoạt động trong component muốn truyền qua cho thằng con GioHang hiểu thì chỉ có 1 cách dùng props => truyền mangSP dc chọn qua GioHang
    // + mà muốn setState thì phải có sự kiện mà nút sự kiện "Thêm giỏ hàng" nằm trong DSSP nên phải truyền qua cho DSSP vì khi click nút sự kiện setState mới chạy

// làm setState cho themGioHang động: khi chọn 1 sp bất kì trong giỏ hàng có sp đó

// Nhưng có 1 bất cập khi chọn 1 sp thì trong giỏ hàng có nhưng cứ thêm mới cho dù cho trùng thì cũng ko tăng số lượng như vậy thì làm cho ds giỏ hàng bị dài. => Nếu click sp đó mà trong giỏ hàng có thì ko thêm mới chỉ tăng số lượng. nếu ko có trong giỏ hàng thì thêm mới

// Tính số lượng ở chữ giỏ hàng (0)

// Tăng giảm sổ lượng cho sản phẩm, thay vì viết 2 hàm riêng tăng và giảm vì nó gần như y hết nên gom chung
    // truyền props tangGiamSoLuong cho component GioHang


// Xóa sản phẩm





// mangSanPham =  [
//     { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },

//     { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },

//     { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
// ]

// renderSanpham = () => {
//     return this.mangSanPham.map((sanPham,index) => {
//         return  <div className="col-4" key={index}>
//         <div className="card text-left">
//           <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
//           <div className="card-body">
//             <h4 className="card-title">{sanPham.tenSP}</h4>
//             <button className="btn btn-success" >Thêm giỏ hàng</button>
//             </div>
//         </div>
//       </div>
//     })
// }

// <div className="container">
//     <h3 className="text-center">Bài Tập Giỏ Hàng</h3>
//     {/* Giỏ Hàng */}
//     <div className="gioHang">
//         <div className="text-right text-danger" >
//             <span style={{ cursor: 'pointer' }} data-toggle="modal" data-target="#exampleModal" >Giỏ hàng (0)</span>
//         </div>

//         <div>
//             {/* Button trigger modal */}
//             {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                         Launch demo modal
//                     </button> */}
//             {/* Modal */}
//             <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-lg" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">×</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <table className='table'>
//                                 <thead>
//                                     <tr>
//                                         <th>Mã SP</th>
//                                         <th>Hình ảnh</th>
//                                         <th>Tên SP</th>
//                                         <th>Đơn giá </th>
//                                         <th>Số lượng</th>
//                                         <th>Thành tiền</th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>1</td>
//                                         <td>
//                                             <img style={{ width: 50, height: 50 }} src='./img/vsphone.jpg'></img>
//                                         </td>
//                                         <td>VinSmart Live</td>
//                                         <td>
//                                             <button>+</button>
//                                                 1
//                                                 <button>-</button>
//                                         </td>
//                                         <td>5700000</td>
//                                         <td>5700000</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     {/* Danh sách sản phẩm */}
//         <div className='danhSachSanPham'>
//              <div className="row">
//                  {this.renderSanpham()}
//             </div>
//         </div>
// 
// </div>
