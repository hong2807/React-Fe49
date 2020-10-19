import React, { Component } from 'react'
import {connect} from 'react-redux';

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac,index) => {
            return <img key={index} className="ml-5" style={{width: 50}} src={xucXac.hinhAnh} alt=""/>
        })
    }

    renderTaiXiu = () => {
        return this.props.mangXucXac.reduce((tongDiem, xxnn, index) => {
            return tongDiem += xxnn.ma;
        }, 0) > 10 ? "TÀI" : "XỈU" ;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        {/* <button style={{fontSize: 50}} className="btn display-4 text-white bg-success p-5 ml-5">TÀI</button> */}
                        <button style={{fontSize: 50}} className="btn display-4 text-white bg-success p-5 ml-5" onClick={() => {
                            {this.props.datCuocTaiXiu(true)}
                        }}>
                            TÀI
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        {/* <img className="ml-5" style={{width: 50}} src="./img/game_xuc_xac/1.png" alt=""/>
                        <img className="ml-5" style={{width: 50}} src="./img/game_xuc_xac/2.png" alt=""/>
                        <img className="ml-5" style={{width: 50}} src="./img/game_xuc_xac/3.png" alt=""/> */}
                        {this.renderXucXac()}
                        <div className="display-4 text-center">
                            MÁY CHỌN: <span className="text-success">
                            {this.props.tongSoBanChoi > 0 && this.renderTaiXiu()}
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <button  style={{fontSize: 50}} className="btn display-4 text-white bg-danger p-5 ml-5" onClick={() => {
                            {this.props.datCuocTaiXiu(false)}
                        }}>
                            XỈU
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = state => { // state là rootReducer
    return {
        mangXucXac: state.GameXucXacReducer.mangXucXac,
        banChon: state.GameXucXacReducer.banChon,
        tongSoBanChoi: state.GameXucXacReducer.tongSoBanChoi,
    }
}


// Tạo ra props đưa dữ liệu lên redux store
const mapDispatchToProps = dispatch => {
    return {
        datCuocTaiXiu: (ketQuaBanChon) => {
            const action = {
                type: 'DAT_CUOC_TAI_XIU',
                ketQuaBanChon
            }
            dispatch(action)
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(XucXac)