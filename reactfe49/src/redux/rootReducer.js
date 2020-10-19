import {combineReducers} from 'redux';
import { GioHangReducer } from './GioHangReducer';
import GameXucXacReducer from './GameXucXacReducer'

export const rootReducer = combineReducers({
     // GioHangReducer: GioHangReducer
     GioHangReducer, //viết tắt
     // stateGameXucXac: gameXucXacReducer
     GameXucXacReducer: GameXucXacReducer
    // stateGameXucXac đặt giống gameXucXacReducer or khác cũng dc
})


