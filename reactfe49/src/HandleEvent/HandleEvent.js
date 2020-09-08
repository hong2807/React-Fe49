import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {

        alert('hello');
    }

    showInfo = (name) => {
        alert(`name ${name}`)
    }

    // {this.HandleClick} => ko co dau ngoac => nghia la click moi goi ham
    // {this.HandleClick()} => hàm đó dc gọi ra sử dụng luôn rồi mới click

    render() {
        return (
            <div className="container">
                {/*Cách 1: Truyền callback function thông qua thuộc tính  */}
                <button onClick={this.handleClick}>Click me</button>
                {/* <button onClick={this.handleClick()}>Click me</button> */}
                    {/* => hàm dc gọi ra luôn rồi mới click */}
                <br /> <br />

                {/* Cách này chưa click đã gọi hàm */}
                {/* <button onClick={this.showInfo('Khải')}>Click me</button> */}
                <br></br>
                {/* Cách này click mới gọi hàm */}
                <button onClick={this.showInfo.bind(this,'Mẫn')}>Click me</button>
                <br /> <br />

                {/*Cách 2: Dùng arrow function */}
                <button onClick={() => {
                    alert('hahaha');
                    //Click vào gọi nhiều hàm thực hiện ...
                    this.handleClick();
                }}>show Message</button>
                <br /> <br />
                <button onClick={() => {
                    this.showInfo('Mẫn đẹp trai!')
                }}>show info</button>

            </div>
        )
    }
}
