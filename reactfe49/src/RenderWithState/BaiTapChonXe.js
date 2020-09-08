import React, { Component } from "react";


// Lúc đầu chỉ có Giao diện
// export default class BaiTapChonXe extends Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-8">
//             <img className="w-100" src="./img/CarBasic/Products/black-car.jpg"></img>
//           </div>
//           <div className="col-4">
//             <div className="card text-left">
//               <div className="card-header">Exterior color</div>
//               <div className="card-body">
//                 <p className="card-text">
//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-black.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Crystal Black</h5>
//                             <p>Pearl</p>
//                         </div>
//                     </div>
                    
//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-steel.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Modern steel</h5>
//                              <p>Pearl</p>
//                         </div>
//                     </div>

//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-silver.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Crystal Black</h5>
//                             <p>Pearl</p>
//                         </div>
//                     </div>

//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-red.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Crystal Black</h5>
//                             <p>Pearl</p>
//                         </div>
//                     </div>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// Cách 1
// export default class BaiTapChonXe extends Component {

//     //State là source tấm hình xe
//     state = {
//         imgCar: './img/CarBasic/products/black-car.jpg'
//     }


//     render() {
//       return (
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-8">
//               <img className="w-100" src={this.state.imgCar}></img>
//             </div>
//             <div className="col-4">
//               <div className="card text-left">
//                 <div className="card-header">Exterior color</div>
//                 <div className="card-body">
//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
//                         this.setState({
//                             imgCar: './img/CarBasic/products/black-car.jpg'
//                         })
//                     }}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-black.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Crystal Black</h5>
//                             <p>Pearl</p>
//                         </div>
//                     </div>
                    
//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
//                         this.setState({
//                              imgCar: './img/CarBasic/products/steel-car.jpg'
//                         })
//                     }}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-steel.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Modern steel</h5>
//                             <p>Pearl</p>
//                         </div>
//                     </div>

//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
//                         this.setState({
//                              imgCar: './img/CarBasic/products/silver-car.jpg'
//                         })
//                     }}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-silver.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Crystal Black</h5>
//                             <p>Pearl</p>
//                         </div>
//                     </div>

//                     <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
//                         this.setState({
//                              imgCar: './img/CarBasic/products/red-car.jpg'
//                         })
//                     }}>
//                         <div className="col-3">
//                             <img className="w-100" src="./img/CarBasic/icons/icon-red.jpg" />
//                         </div>
//                         <div className="col-9">
//                             <h5>Crystal Black</h5>
//                             <p>Pearl</p>
//                         </div>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

// Cách 2
  export default class BaiTapChonXe extends Component {

    //State là source tấm hình xe
    state = {
        imgCar: './img/CarBasic/products/black-car.jpg'
    }

    handleChangeColorCar = (imgColor) => {
        this.setState({
            imgCar: `./img/CarBasic/products/${imgColor}-car.jpg`
        })
    }

    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <img className="w-100" src={this.state.imgCar}></img>
            </div>
            <div className="col-4">
              <div className="card text-left">
                <div className="card-header">Exterior color</div>
                <div className="card-body">
                    <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
                        this.handleChangeColorCar('black')  //chỗ này có dấu {} cũng dc mà ko có cũng dc vì nó dấu{} vàng bọc rồi nếu ko có thì phải có dấu {}
                    }}>
                        <div className="col-3">
                            <img className="w-100" src="./img/CarBasic/icons/icon-black.jpg" />
                        </div>
                        <div className="col-9">
                            <h5>Crystal Black</h5>
                            <p>Pearl</p>
                        </div>
                    </div>
                    
                    <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
                        {this.handleChangeColorCar('steel')}
                    }}>
                        <div className="col-3">
                            <img className="w-100" src="./img/CarBasic/icons/icon-steel.jpg" />
                        </div>
                        <div className="col-9">
                            <h5>Modern steel</h5>
                            <p>Pearl</p>
                        </div>
                    </div>

                    <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
                        {this.handleChangeColorCar('silver')}
                    }}>
                        <div className="col-3">
                            <img className="w-100" src="./img/CarBasic/icons/icon-silver.jpg" />
                        </div>
                        <div className="col-9">
                            <h5>Crystal Black</h5>
                            <p>Pearl</p>
                        </div>
                    </div>

                    <div className="row p-2" style={{border:'1px solid #EEE',cursor:'pointer'}} onClick={()=>{
                        {this.handleChangeColorCar('red')}
                    }}>
                        <div className="col-3">
                            <img className="w-100" src="./img/CarBasic/icons/icon-red.jpg" />
                        </div>
                        <div className="col-9">
                            <h5>Crystal Black</h5>
                            <p>Pearl</p>
                        </div>
                    </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

// Đầu tiên tạo ra giao diện trước
// Xác định state, lúc này khi click từng dòng bên phải thì tấm hình bên trái sẽ thay đổi
// State >>> lúc này là tấm hình bên trái
// Khi click vào từng dòng (row) thì setState lại 
// Cách 2 như cách 1 sẽ ngắn gọn hơn Trong TH này đường dẫn img bên trái giống nhau chỉ khác cái tên 
// Thì mình chỉ cần lấy 1 lần source img và thay đổi tên