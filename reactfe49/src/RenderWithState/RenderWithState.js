import React, { Component } from 'react'

// Cách 1
// export default class RenderWithState extends Component {
//     login = true;
//     userName = 'Hong';

//     render() {
//         return (
//             <div>
//                 {this.login ? <p>Hello {this.userName}</p> : <div><button className='btn btn-success'>Đăng nhập</button></div>}
//             </div>
//         )
//     }
// }

// Cách 2
// export default class RenderWithState extends Component {
//     login = false;
//     userName = 'Hong';

//     renderLogin = () => {
//         if(this.login) {
//             return <p>Hello {this.userName}</p>
//         }

//         return <div>
//             <button className="btn btn-success">
//                 Đăng nhập
//             </button>
//         </div>

//         // if(this.login) {
//         //     return <p>Hello {this.userName}</p>
//         // } else {
//         //     return <div>
//         //         <button className="btn btn-success">
//         //             Đăng nhập
//         //         </button>
//         //     </div>
//         // }
//         // cách này và cách trên giống nhau chỉ là viết nó gọn hơn

//     }

//     render() {
//         return (
//             <div>
//                 {this.renderLogin()}
//             </div>
//         )
//     }
// }

// Cách 3
// export default class RenderWithState extends Component {
//     state = {
//         login: false
//     }

//     userName = 'Hong';

//     renderLogin = () => {
//         if(this.state.login) {
//             return <p>Hello {this.userName}</p>
//         }

//         return <div>
//             <button className="btn btn-success" onClick={() => {
//                 this.handleLogin();
//             }}>
//                 Đăng nhập
//             </button>
//         </div>
//     }

//     handleLogin = () => {
//         // this.state.login = true; => ko gọi state trực tiếp mà phải dùng setState
//         let newState =  {login:true};  //gán giá trị mới cho biến login
            //console.log(this.state.login); // tới đây console là ra false vì setState nó là bất đồng bộ
//         // this.setState(newState); // gán giá mới cho state
//         this.setState(newState,()=>{   // vừa gán giá trị mới cho state vừa callback
//             console.log(this.state.login); //lúc này console  ra mới đúng
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.renderLogin()}
//             </div>
//         )
//     }

    // Cách 4
export default class RenderWithState extends Component {
    state = {
        login: false
    }

    userName = 'Hong';

    renderLogin = () => {
        if(this.state.login) {
            return <p>Hello {this.userName}</p>
        }

        return <div>
            <button className="btn btn-success" onClick={() => {
                this.handleLogin();
            }}>
                Đăng nhập
            </button>
        </div>
    }

    handleLogin = () => {
        this.setState({
            login: true
        },()=>{
            console.log(this.state.login);
        })
    }
    //cách này như cách trên nhưng thay vì đặt 1 biến lưu giá trị state mới thì đặt thẳng trong setState


    render() {
        return (
            <div>
                {this.renderLogin()}
            </div>
        )
    }
}



// if login = true hiện tên userName, ngược lại false hiện button Đăng nhập
// Toán tử 3 ngôi: dieu_kien ? nếu dk đúng thì vào đây : nếu dk sai thì vào đây
// Cách 1 và cách 2 biến login mình thay đổi bằng tay nó ko có động
// State: Quản lý những giá trị thay đổi trên giao diện
// this.state.login = true; //=> ko dc gọi state trực tiếp
// Dùng phương thức setState => làm thay đổi giá trị state
// setState là phương thức bất đồng bộ
// set giá trị của state thông quan setState
// setState có 2 tham số: tham số 1 là giá trị mới, tham số 2 là callback thực thi ngay sau khi state thay đổi
// syntax: this.setState({
//               thuocTinh: [gia-tri-moi]
//          })
// syntax: this.setState({
//               thuocTinh: [gia-tri-moi]
//          },()=>{    //=> callback
//              some code
//          })

