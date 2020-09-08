import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productList = [
        {id:1,name:'Iphone X',price:1000},
        {id:2,name:'Samsung Note 10plus',price:3000},
        {id:3,name:'Htc m10',price:2000},
    ]

    // renderProduct = () => {
    //         let content = [];
    //         for(let i = 0; i < this.productList.length; i++) {
    //             let product = this.productList[i];
    //             let cardProduct = <div key={i} className="col-4">
    //                     <div className="card text-left">
    //                         <img className="card-img-top" src="https://picsum.photos/200/200" alt="" />
    //                         <div className="card-body">
    //                             <h4 className="card-title">{product.name}</h4>
    //                             <p className="card-text">{product.price}</p>
    //                         </div>
    //                     </div>
    //                 </div>;
    //             content.push(cardProduct)
    //         }
    //         console.log(content);
    //         return content;
    // }

    renderProduct = () =>{
        let arrJSXProduct = this.productList.map((product,index)=>{
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        })

        return arrJSXProduct;
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div> 
        )
    }
}

// Phương thức or function ko bắt buộc là có return hay ko tùy vào function đó như thế nào

// let cardProduct = <div key={i} className="col-4">
// Khi mà sử dụng vòng lặp thì trong react bắt buộc mình nên truyền cho nó 1 cái key để nhận biết thằng nào là
// thằng nào vì khi lặp mình sẽ ko biết thằng nào là thằng nào nên thường sẽ truyền nào ko bị trùng thì thường
// là truyền luôn cái index của từng thằng vào

// cách 1 và cách 2 giống nhau nhưng thay vì viết dài vậy thằng array nó có sẵn các chức năng như forEach,
// map, filter.... 


