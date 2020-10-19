import React, { Component } from 'react'
import {connect} from 'react-redux';


class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                 <div className="display-4 text-center">
                    TỔNG ĐIỂM: <span className="text-danger">0</span>
                </div>
                <div className="display-4 text-center">
                    {/* BẠN CHỌN: <span className="text-danger">TÀI</span> */}
                    BẠN CHỌN: <span className="text-danger">
                    {this.props.banChon !== '' && (this.props.banChon ? 'TÀI' : 'XỈU')}
                    {/* Khác rỗng thì mới thực hiện cái sau */}
                    </span>
                </div>
                <div className="display-4 text-center">
                    {/* SỐ BÀN THẮNG: <span className="text-danger">1</span> */}
                    SỐ BÀN THẮNG: <span className="text-danger">
                        {this.props.soBanThang}
                    </span>
                </div>
                <div className="display-4 text-center">
                    {/* TỔNG SỐ BÀN CHƠI: <span className="text-danger">1</span> */}
                    TỔNG SỐ BÀN CHƠI: <span className="text-danger">
                        {this.props.tongSoBanChoi}
                    </span>
                </div>
                <div className="text-center mt-5">
                    <button className="btn btn-warning" onClick={() => {
                        this.props.playGame()
                    }}>
                        PLAY GAME
                    </button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        banChon: state.GameXucXacReducer.banChon,
        soBanThang: state.GameXucXacReducer.soBanThang,
        tongSoBanChoi: state.GameXucXacReducer.tongSoBanChoi,
        mangXucXac: state.GameXucXacReducer.mangXucXac
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(KetQuaTroChoi)