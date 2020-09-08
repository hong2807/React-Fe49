import React, { Component } from 'react'
import './Styling.scss';
import style from './Styling.module.scss';

export default class Child extends Component {
    render() {
        let myStyle = {backgroundColor: 'brown', color:'black', padding: '50px', fontSize:'40px', fontStyle: 'italic'}
        return (
            <div>
                <h1 className="title">Hello World</h1>
                <div className={style.content}>
                    <p className={style.text}>11111</p>
                    Parent component
                </div>
               
                <p className={style.text}>22222</p>
                
                <p style={{backgroundColor:'yellow',border:'3px solid red',fontSize:'50px'}}>
                    Hello Cybersoft Fe49
                </p>

                <div className={`${style.content} `}>
                    <p className={`${style.text}`}>22222</p>
                    Child component
                </div>

                <h5 style={myStyle}>Style !!!!!</h5>
            </div>
        )
    }
}


// import './Styling.scss';
// Cách này chỉ cần import cho 1 component thì các component khác vẫn xài dc mà ko cần import
// Ví dụ như Child.js đã import Styling.scss vô xài và Khi Styling.js chỉ cần import thằng Child.js vào là nó kế thừa 

// import style from './Styling.module.scss';
// Cách này phải có chữ module thì mới hiểu và chỉ có tác dụng trong component đó thôi

// Có 2 cách viết css là {style.tenClass} or {`${style.tenClass}`}

// Style csstrực tiếp trên thẻ HTML <html style={{color:"", fontSize:""}}></html>
// Style css trực tiếp trong react thì dc đặt trong 2 cặp {{}}, dấu = thành dấu :, dấu ; thành dấu ,
// thuộc tính css mà từ hai chữ trở lên thì dùng camelCased


// Có thể dùng biến để css