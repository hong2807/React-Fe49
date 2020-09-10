import React, { Component } from "react";

export default class BaiTapQLSP extends Component {
    mangSanPham =  [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    }
    // Khai báo state ở đây có thể hiểu là khai báo mặc định, khi mới mở trang web lên cái này sẽ xuất hiện mặc định
    // Nếu khai báo rỗng thì nó ko xuất hiện
    // Trong bài này mặc định mở lên là có nó rồi mà ko cần click
    // Trong TH mặc định mở lên ko có mà click mới có thì chỗ này nên set rỗng state={sanPhamChiTiet: {}}

    renderSanpham = () => {
        return this.mangSanPham.map((sanPham,index) => {
            return  <div className="col-4" key={index}>
            <div className="card text-left">
              <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
              <div className="card-body">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <button className="btn btn-success" onClick={() => {
                    this.xemChiTiet(sanPham)
                }}>Xem chi tiết</button>
                </div>
            </div>
          </div>
        })
    }

    xemChiTiet = (spClick) => {
        console.log('spClick',spClick); //spClick lúc này là sanPham khi dùng map ở trên ra
        this.setState({         //setState cho sản phẩm chi tiết = sản phẩm được click
            sanPhamChiTiet:spClick
        })
    }

  render() {
    //Nếu đúng ra khi setState xong thì gọi xemChiTiet ra xài là dc nhưng trong TH này muốn lấy giá trị trong xemChiTiet nên phải lấy biến ra đựng
    //es5 - destructuring
        // let maSP = this.state.sanPhamChiTiet.maSP;
        // let tenSP = this.state.sanPhamChiTiet.tenSP;
    //es6 - destructuring (trong es6 biến phải đặt trùng với tên key thì nó mới hiểu, còn es5 thì ko cần)
        // viết es6 cho gọn ko thì viết es5 vẫn xài dc
        let {maSP,tenSP,hinhAnh,manHinh,cameraSau,cameraTruoc,heDieuHanh,gia,ram,rom} = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">
            {this.renderSanpham()}
        </div>

        {/* Giao diện chi tiết sản phẩm */}
        <hr></hr>
        <div className="row">
            <div className="col-4">
                <h3 className="text-center">{tenSP}</h3>
                <img className="w-100" src={hinhAnh} alt={hinhAnh}/>
            </div>
            <div className="col-8">
                <h3 className="text-left">Thông số kỹ thuật</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Màn hình</th>
                            <th>{manHinh}</th>
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            <th>{heDieuHanh}</th>
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                            <th>{cameraTruoc}</th>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <th>{cameraSau}</th>
                        </tr>
                        <tr>
                            <th>RAM</th>
                            <th>{ram}</th>
                        </tr>
                        <tr>
                            <th>ROM</th>
                            <th>{rom}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

      </div>
    );
  }
}

// Có 1 danh sách sản phẩm điện thoại, khi click chi tiết sẽ show ra thông số kỹ thuật
// Tạo ra giao diện bằng HTML trước sau đó mới đục lỗ function vào
// Giao diện:
// export default class BaiTapQLSP extends Component {
//     render() {
//       return (
//         <div className="container">
//           <h3 className="text-center">Danh sách sản phẩm</h3>
//           <div className="row">
//             <div className="col-4">
//               <div className="card text-left">
//                 <img className="card-img-top" src="./img/vsphone.jpg" alt />
//                 <div className="card-body">
//                   <h4 className="card-title">VinSmartLive</h4>
//                   <button className="btn btn-success">Xem chi tiết</button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-4">
//               <div className="card text-left">
//                 <img className="card-img-top" src="./img/meizuphone.jpg" alt />
//                 <div className="card-body">
//                   <h4 className="card-title">VinSmartLive</h4>
//                   <button className="btn btn-success">Xem chi tiết</button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-4">
//               <div className="card text-left">
//                 <img className="card-img-top" src="./img/applephone.jpg" alt />
//                 <div className="card-body">
//                   <h4 className="card-title">VinSmartLive</h4>
//                   <button className="btn btn-success">Xem chi tiết</button>
//                   </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// Giao diện chi tiết
{/* <hr></hr>
        <div className="row">
            <div className="col-4">
                <h3 className="text-center">VinSmart Live</h3>
                <img className="w-100" src="./img/vsphone.jpg" alt=""/>
            </div>
            <div className="col-8">
                <h3 className="text-left">Thông số kỹ thuật</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Màn hình</th>
                            <th>AMOLED, 6.2, Full HD+</th>
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            <th>Android 9.0 (Pie)</th>
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                            <th>20 MP</th>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <th>Chính 48 MP & Phụ 8 MP, 5 MP</th>
                        </tr>
                        <tr>
                            <th>RAM</th>
                            <th>4 GB</th>
                        </tr>
                        <tr>
                            <th>ROM</th>
                            <th>64 GB</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div> */}