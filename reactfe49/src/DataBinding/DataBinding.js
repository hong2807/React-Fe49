import React, { Component } from 'react'

export default class DataBinding extends Component {
    // Thuộc tính: là khác biến ko có var, let, const
    product = {
        id: 1,
        name: "iphoneX",
        price: 1000,
    };

    // Phương thức
    renderCard = () => {
        return (
        <div className="card text-left">
            <img className="card-img-top" src="https://picsum.photos/200/200" alt />
            <div className="card-body">
            <h4 className="card-title">{this.product.name}</h4>
            <p className="card-text">{this.product.price}</p>
            </div>
        </div>
        );
    };

    // // Binding data
    // let title = "Hello FrontEnd 49";
    // let photo = "https://picsum.photos/200/200";
        // => Trong class ko cho khai báo biến chỉ cho khai báo thuộc tính, phương thức
        // => muốn khai báo biến dc thì để sau render trước return
    render() {
        // Binding data
        let title = "Hello FrontEnd 49";
        let photo = "https://picsum.photos/200/200";
        
         // Binding function
        let renderImg = () => {
            return <img src="https://picsum.photos/200/200" />;
        };
        return (
            <div>
                {/* vì sao ở đây ko dùng this vì nó là biến nên cứ gọi biến ra để xài */}
                <h1 id="title">{title}</h1>
                <img src={photo} />
                <br></br>
                <img src="./img/logo.jpg" />

                <div>
                {renderImg()}
                {/* vì sao ở đây ko gọi this nó vẫn hiểu là do nó là 1 function của component */}
                </div>

                <div>
                {this.renderCard()}
                {/* vì sao ở đây phải dùng this là vì renderCard lúc này là phương thức của component nên this 
                là đại diện cho component đó => bắt buộc phải có this */}
                </div>

                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title"> {this.product.name} </h4>
                        {/* vì sao bắt buộc phải có this vì product.name lúc này là thuộc tính của component đó
                        nên this là đại diện cho component đó => bắt buộc phải có this */}
                        <p className="card-text"> {this.product.price} </p>
                    </div>
                </div>  
          </div>
        )
    }
}
