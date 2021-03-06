import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {

    renderSanPham = () => {
        //Nhận props mangSanPham từ component cha render ra giao diện
        return this.props.mangSanPham.map((sanPham,index)=>{
            return <div className="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham}/>
            </div>
        })
    }


    render() {
        return (
            <div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
